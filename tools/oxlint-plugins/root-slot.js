const normalizePropertyName = (value) => value.replace(/-/g, "").toLowerCase();

const defaultBannedProperties = [
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginInline",
  "marginInlineStart",
  "marginInlineEnd",
  "marginBlock",
  "marginBlockStart",
  "marginBlockEnd",
  "float",
  "clear",
  "top",
  "right",
  "bottom",
  "left",
  "inset",
  "insetBlock",
  "insetBlockStart",
  "insetBlockEnd",
  "insetInline",
  "insetInlineStart",
  "insetInlineEnd",
  "width",
  "minWidth",
  "maxWidth",
  "height",
  "minHeight",
  "maxHeight",
  "aspectRatio",
  "flex",
  "flexGrow",
  "flexShrink",
  "flexBasis",
  "alignSelf",
  "justifySelf",
  "placeSelf",
  "order",
  "gridArea",
  "gridColumn",
  "gridColumnStart",
  "gridColumnEnd",
  "gridRow",
  "gridRowStart",
  "gridRowEnd",
  "gap",
  "rowGap",
  "columnGap",
  "contain",
  "contentVisibility",
  "containerType",
  "containerName",
  "zIndex",
  "isolation",
  "transform",
  "filter",
  "opacity",
  "scrollMargin",
  "scrollMarginTop",
  "scrollMarginRight",
  "scrollMarginBottom",
  "scrollMarginLeft",
  "scrollMarginInline",
  "scrollMarginInlineStart",
  "scrollMarginInlineEnd",
  "scrollMarginBlock",
  "scrollMarginBlockStart",
  "scrollMarginBlockEnd",
  "scrollSnapType",
  "scrollSnapAlign",
  "scrollSnapStop",
  "scrollSnapMargin",
  "scrollSnapMarginTop",
  "scrollSnapMarginRight",
  "scrollSnapMarginBottom",
  "scrollSnapMarginLeft",
  "scrollSnapMarginInline",
  "scrollSnapMarginInlineStart",
  "scrollSnapMarginInlineEnd",
  "scrollSnapMarginBlock",
  "scrollSnapMarginBlockStart",
  "scrollSnapMarginBlockEnd",
  "scrollBehavior",
  "overscrollBehavior",
  "overscrollBehaviorX",
  "overscrollBehaviorY",
  "all",
];

const defaultBannedValues = {
  position: ["absolute", "fixed"],
  display: ["flex", "grid"],
  overflow: ["hidden", "scroll", "auto"],
  overflowX: ["hidden", "scroll", "auto"],
  overflowY: ["hidden", "scroll", "auto"],
};

const getStringLiteralValue = (node) => {
  if (!node) {
    return null;
  }

  if (node.type === "Literal" && typeof node.value === "string") {
    return node.value;
  }

  if (node.type === "JSXExpressionContainer") {
    const expression = node.expression;
    if (expression?.type === "Literal" && typeof expression.value === "string") {
      return expression.value;
    }

    if (expression?.type === "TemplateLiteral" && expression.expressions.length === 0) {
      return expression.quasis[0]?.value?.cooked ?? null;
    }
  }

  return null;
};

const getPropertyName = (node) => {
  if (node.computed) {
    return null;
  }

  if (node.key?.type === "Identifier") {
    return node.key.name;
  }

  if (node.key?.type === "Literal" && typeof node.key.value === "string") {
    return node.key.value;
  }

  if (node.key?.type === "TemplateLiteral" && node.key.expressions.length === 0) {
    return node.key.quasis[0]?.value?.cooked ?? null;
  }

  return null;
};

const getExpressionString = (node) => {
  if (!node) {
    return null;
  }

  if (node.type === "Literal" && typeof node.value === "string") {
    return node.value;
  }

  if (node.type === "TemplateLiteral" && node.expressions.length === 0) {
    return node.quasis[0]?.value?.cooked ?? null;
  }

  return null;
};

const normalizeValue = (value) => value.trim().toLowerCase();
const normalizeProperty = (value) => value.replace(/-/g, "").toLowerCase();

const buildBannedSet = (bannedProperties) =>
  new Set(bannedProperties.map((property) => normalizePropertyName(property)));

const buildBannedValueMap = (bannedValues) =>
  new Map(
    Object.entries(bannedValues).map(([property, values]) => [
      normalizePropertyName(property),
      new Set(values.map((value) => normalizeValue(String(value)))),
    ]),
  );

const findAttribute = (node, attributeName) => {
  const attributes = node.attributes ?? [];
  return (
    attributes.find((attribute) => {
      if (attribute.type !== "JSXAttribute") {
        return false;
      }

      if (attribute.name?.type !== "JSXIdentifier") {
        return false;
      }

      return attribute.name.name === attributeName;
    }) ?? null
  );
};

const hasAttributeValue = (node, attributeName, attributeValue) => {
  const attribute = findAttribute(node, attributeName);
  if (!attribute) {
    return false;
  }

  return getStringLiteralValue(attribute.value) === attributeValue;
};

const isStyleFile = (filename) => filename.endsWith(".css.ts");

const isStyleCall = (node) => node.callee?.type === "Identifier" && node.callee.name === "style";
const isRecipeCall = (node) => node.callee?.type === "Identifier" && node.callee.name === "recipe";

const visitStyleObject = (context, node, bannedSet, bannedValueMap, styleName, options = {}) => {
  const { checkSelectors = true } = options;
  for (const property of node.properties) {
    if (property.type !== "Property") {
      continue;
    }

    const name = getPropertyName(property);
    if (!name) {
      continue;
    }

    if (name === "vars") {
      continue;
    }

    if (name === "selectors") {
      if (!checkSelectors) {
        continue;
      }
      if (property.value?.type === "ObjectExpression") {
        for (const selectorEntry of property.value.properties) {
          if (selectorEntry.type !== "Property") {
            continue;
          }
          if (selectorEntry.value?.type === "ObjectExpression") {
            visitStyleObject(context, selectorEntry.value, bannedSet, bannedValueMap, styleName, {
              checkSelectors,
            });
          }
        }
      }
      continue;
    }

    if (name.startsWith("@")) {
      if (property.value?.type === "ObjectExpression") {
        for (const queryEntry of property.value.properties) {
          if (queryEntry.type !== "Property") {
            continue;
          }
          if (queryEntry.value?.type === "ObjectExpression") {
            visitStyleObject(context, queryEntry.value, bannedSet, bannedValueMap, styleName, {
              checkSelectors,
            });
          }
        }
      }
      continue;
    }

    const normalizedName = normalizePropertyName(name);
    if (bannedSet.has(normalizedName)) {
      context.report({
        node: property.key,
        messageId: "bannedStyle",
        data: { property: name, name: styleName },
      });
    }

    const bannedValueSet = bannedValueMap.get(normalizedName);
    if (!bannedValueSet) {
      continue;
    }

    const value = getExpressionString(property.value);
    if (!value) {
      continue;
    }

    const normalizedValue = normalizeValue(value);
    if (bannedValueSet.has(normalizedValue)) {
      context.report({
        node: property.value,
        messageId: "bannedStyleValue",
        data: { property: name, value, name: styleName },
      });
    }
  }
};

const visitRecipeObject = (context, node, bannedSet, bannedValueMap, styleName, options) => {
  for (const property of node.properties) {
    if (property.type !== "Property") {
      continue;
    }

    const name = getPropertyName(property);
    if (!name) {
      continue;
    }

    if (name === "base" && property.value?.type === "ObjectExpression") {
      visitStyleObject(context, property.value, bannedSet, bannedValueMap, styleName, options);
      continue;
    }

    if (name === "variants" && property.value?.type === "ObjectExpression") {
      for (const variantEntry of property.value.properties) {
        if (variantEntry.type !== "Property") {
          continue;
        }
        if (variantEntry.value?.type !== "ObjectExpression") {
          continue;
        }
        for (const variantValue of variantEntry.value.properties) {
          if (variantValue.type !== "Property") {
            continue;
          }
          if (variantValue.value?.type === "ObjectExpression") {
            visitStyleObject(
              context,
              variantValue.value,
              bannedSet,
              bannedValueMap,
              styleName,
              options,
            );
          }
        }
      }
      continue;
    }

    if (name === "compoundVariants" && property.value?.type === "ArrayExpression") {
      for (const element of property.value.elements) {
        if (!element || element.type !== "ObjectExpression") {
          continue;
        }
        for (const entry of element.properties) {
          if (entry.type !== "Property") {
            continue;
          }
          const entryName = getPropertyName(entry);
          if (entryName === "style" && entry.value?.type === "ObjectExpression") {
            visitStyleObject(context, entry.value, bannedSet, bannedValueMap, styleName, options);
          }
        }
      }
    }
  }
};

const inlineRule = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow inappropriate inline style properties on root slot elements.",
    },
    schema: [
      {
        type: "object",
        properties: {
          attributeName: { type: "string" },
          attributeValue: { type: "string" },
          bannedProperties: { type: "array", items: { type: "string" } },
          bannedValues: {
            type: "object",
            additionalProperties: {
              type: "array",
              items: { type: "string" },
            },
          },
          enforceInlineDisplay: {
            type: "object",
            properties: {
              attributeName: { type: "string" },
              attributeValue: { type: "string" },
              requireDisplay: { type: "boolean" },
              allowedPrefixes: { type: "array", items: { type: "string" } },
            },
            additionalProperties: false,
          },
          reportUnknownStyle: { type: "boolean" },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      bannedStyle: "Avoid '{{property}}' on root slot inline styles.",
      bannedStyleValue: "Avoid '{{property}}: {{value}}' on root slot inline styles.",
      unknownStyle: "Root slot style must be an object literal to validate banned properties.",
      missingInlineDisplay:
        "Element with '{{attribute}}=\"{{value}}\"' must set display: inline-* in inline styles.",
      invalidInlineDisplay:
        "Element with '{{attribute}}=\"{{value}}\"' must use display: inline-* in inline styles.",
    },
  },
  create(context) {
    const options = context.options[0] ?? {};
    const attributeName = options.attributeName ?? "data-slot";
    const attributeValue = options.attributeValue ?? "root";
    const bannedProperties = options.bannedProperties ?? defaultBannedProperties;
    const bannedValues = options.bannedValues ?? defaultBannedValues;
    const enforceInlineDisplay = options.enforceInlineDisplay ?? null;
    const reportUnknownStyle = options.reportUnknownStyle === true;
    const bannedSet = buildBannedSet(bannedProperties);
    const bannedValueMap = buildBannedValueMap(bannedValues);
    const inlineDisplayPrefixes =
      enforceInlineDisplay?.allowedPrefixes?.length > 0
        ? enforceInlineDisplay.allowedPrefixes.map((value) => normalizeValue(value))
        : ["inline-"];

    const isRootSlot = (node) => {
      return hasAttributeValue(node, attributeName, attributeValue);
    };

    const getStyleAttribute = (node) => {
      return findAttribute(node, "style");
    };

    return {
      JSXOpeningElement(node) {
        const isRoot = isRootSlot(node);
        const matchesInlineDisplayTarget =
          enforceInlineDisplay &&
          hasAttributeValue(
            node,
            enforceInlineDisplay.attributeName,
            enforceInlineDisplay.attributeValue,
          );

        if (!isRoot && !matchesInlineDisplayTarget) {
          return;
        }

        const styleAttribute = getStyleAttribute(node);
        if (!styleAttribute) {
          if (matchesInlineDisplayTarget && enforceInlineDisplay?.requireDisplay) {
            context.report({
              node,
              messageId: "missingInlineDisplay",
              data: {
                attribute: enforceInlineDisplay.attributeName,
                value: enforceInlineDisplay.attributeValue,
              },
            });
          }
          return;
        }

        const styleValue = styleAttribute.value;
        if (!styleValue || styleValue.type !== "JSXExpressionContainer") {
          if (matchesInlineDisplayTarget && enforceInlineDisplay?.requireDisplay) {
            context.report({
              node: styleAttribute,
              messageId: "missingInlineDisplay",
              data: {
                attribute: enforceInlineDisplay.attributeName,
                value: enforceInlineDisplay.attributeValue,
              },
            });
          } else if (reportUnknownStyle && isRoot) {
            context.report({ node: styleAttribute, messageId: "unknownStyle" });
          }
          return;
        }

        const expression = styleValue.expression;
        if (!expression || expression.type !== "ObjectExpression") {
          if (matchesInlineDisplayTarget && enforceInlineDisplay?.requireDisplay) {
            context.report({
              node: styleAttribute,
              messageId: "missingInlineDisplay",
              data: {
                attribute: enforceInlineDisplay.attributeName,
                value: enforceInlineDisplay.attributeValue,
              },
            });
          } else if (reportUnknownStyle && isRoot) {
            context.report({ node: styleAttribute, messageId: "unknownStyle" });
          }
          return;
        }

        let displayProperty = null;
        for (const property of expression.properties) {
          if (property.type !== "Property") {
            if (reportUnknownStyle && isRoot) {
              context.report({ node: property, messageId: "unknownStyle" });
            }
            continue;
          }

          const name = getPropertyName(property);
          if (!name) {
            if (reportUnknownStyle && isRoot) {
              context.report({ node: property, messageId: "unknownStyle" });
            }
            continue;
          }

          const normalizedName = normalizePropertyName(name);
          if (isRoot && bannedSet.has(normalizedName)) {
            context.report({
              node: property.key,
              messageId: "bannedStyle",
              data: { property: name },
            });
          }

          if (isRoot) {
            const bannedValueSet = bannedValueMap.get(normalizedName);
            if (bannedValueSet) {
              const value = getExpressionString(property.value);
              if (value) {
                const normalizedValue = normalizeValue(value);
                if (bannedValueSet.has(normalizedValue)) {
                  context.report({
                    node: property.value,
                    messageId: "bannedStyleValue",
                    data: { property: name, value },
                  });
                }
              }
            }
          }

          if (matchesInlineDisplayTarget && normalizeProperty(name) === "display") {
            displayProperty = property;
          }
        }

        if (matchesInlineDisplayTarget) {
          if (!displayProperty) {
            if (enforceInlineDisplay?.requireDisplay !== false) {
              context.report({
                node: styleAttribute,
                messageId: "missingInlineDisplay",
                data: {
                  attribute: enforceInlineDisplay.attributeName,
                  value: enforceInlineDisplay.attributeValue,
                },
              });
            }
            return;
          }

          const displayValue = getExpressionString(displayProperty.value);
          if (!displayValue) {
            if (enforceInlineDisplay?.requireDisplay !== false) {
              context.report({
                node: displayProperty.value,
                messageId: "invalidInlineDisplay",
                data: {
                  attribute: enforceInlineDisplay.attributeName,
                  value: enforceInlineDisplay.attributeValue,
                },
              });
            }
            return;
          }

          const normalizedDisplay = normalizeValue(displayValue);
          const isInline = inlineDisplayPrefixes.some((prefix) =>
            normalizedDisplay.startsWith(prefix),
          );
          if (!isInline) {
            context.report({
              node: displayProperty.value,
              messageId: "invalidInlineDisplay",
              data: {
                attribute: enforceInlineDisplay.attributeName,
                value: enforceInlineDisplay.attributeValue,
              },
            });
          }
        }
      },
    };
  },
};

const rootStyleRule = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow root style declarations with layout-breaking properties.",
    },
    schema: [
      {
        type: "object",
        properties: {
          rootStyleNamePattern: { type: "string" },
          bannedProperties: { type: "array", items: { type: "string" } },
          bannedValues: {
            type: "object",
            additionalProperties: {
              type: "array",
              items: { type: "string" },
            },
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      bannedStyle: "Avoid '{{property}}' in root style '{{name}}'.",
      bannedStyleValue: "Avoid '{{property}}: {{value}}' in root style '{{name}}'.",
    },
  },
  create(context) {
    const filename = context.getFilename();
    if (!isStyleFile(filename)) {
      return {};
    }

    const options = context.options[0] ?? {};
    const bannedProperties = options.bannedProperties ?? defaultBannedProperties;
    const bannedValues = options.bannedValues ?? defaultBannedValues;
    const patternSource = options.rootStyleNamePattern ?? "RootStyle$";
    let namePattern = null;

    try {
      namePattern = new RegExp(patternSource);
    } catch {
      namePattern = /RootStyle$/;
    }

    const bannedSet = buildBannedSet(bannedProperties);
    const bannedValueMap = buildBannedValueMap(bannedValues);

    return {
      VariableDeclarator(node) {
        if (node.id?.type !== "Identifier") {
          return;
        }

        const styleName = node.id.name;
        if (!namePattern.test(styleName)) {
          return;
        }

        if (!node.init || node.init.type !== "CallExpression") {
          return;
        }

        if (!isStyleCall(node.init) && !isRecipeCall(node.init)) {
          return;
        }

        const styleArg = node.init.arguments[0];
        if (!styleArg || styleArg.type !== "ObjectExpression") {
          return;
        }

        if (isStyleCall(node.init)) {
          visitStyleObject(context, styleArg, bannedSet, bannedValueMap, styleName, {
            checkSelectors: false,
          });
          return;
        }

        visitRecipeObject(context, styleArg, bannedSet, bannedValueMap, styleName, {
          checkSelectors: false,
        });
      },
    };
  },
};

module.exports = {
  rules: {
    "no-root-slot-banned-styles": inlineRule,
    "no-root-style-banned-styles": rootStyleRule,
  },
};
