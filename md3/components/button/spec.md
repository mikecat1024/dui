# Button Specs & Tokens

Based on [Material Design 3 Buttons](https://m3.material.io/components/buttons/specs).

## Shared Specs

| Property         | Value       | Token                                                           |
| ---------------- | ----------- | --------------------------------------------------------------- |
| Container Height | 40px        | `--md-sys-typescale-label-large-line-height` (approx) + padding |
| Container Shape  | 20px (Full) | `md.sys.shape.corner.full`                                      |
| Label Text Font  | Label Large | `md.sys.typescale.label-large`                                  |
| Icon Size        | 18px        |                                                                 |
| Icon / Label Gap | 8px         |                                                                 |

## Variants

### Filled Button

| Component Token                                   | Value (Reference)         |
| ------------------------------------------------- | ------------------------- |
| `md.comp.filled-button.container.color`           | `md.sys.color.primary`    |
| `md.comp.filled-button.label-text.color`          | `md.sys.color.on-primary` |
| `md.comp.filled-button.icon.color`                | `md.sys.color.on-primary` |
| `md.comp.filled-button.pressed.state-layer.color` | `md.sys.color.on-primary` |
| `md.comp.filled-button.hover.state-layer.color`   | `md.sys.color.on-primary` |
| `md.comp.filled-button.focus.state-layer.color`   | `md.sys.color.on-primary` |

### Elevated Button

| Component Token                                     | Value (Reference)                    |
| --------------------------------------------------- | ------------------------------------ |
| `md.comp.elevated-button.container.color`           | `md.sys.color.surface-container-low` |
| `md.comp.elevated-button.label-text.color`          | `md.sys.color.primary`               |
| `md.comp.elevated-button.icon.color`                | `md.sys.color.primary`               |
| `md.comp.elevated-button.container.elevation`       | `md.sys.elevation.level1`            |
| `md.comp.elevated-button.pressed.state-layer.color` | `md.sys.color.primary`               |
| `md.comp.elevated-button.hover.state-layer.color`   | `md.sys.color.primary`               |
| `md.comp.elevated-button.focus.state-layer.color`   | `md.sys.color.primary`               |

### Tonal Button (Filled Tonal)

| Component Token                                         | Value (Reference)                     |
| ------------------------------------------------------- | ------------------------------------- |
| `md.comp.filled-tonal-button.container.color`           | `md.sys.color.secondary-container`    |
| `md.comp.filled-tonal-button.label-text.color`          | `md.sys.color.on-secondary-container` |
| `md.comp.filled-tonal-button.icon.color`                | `md.sys.color.on-secondary-container` |
| `md.comp.filled-tonal-button.pressed.state-layer.color` | `md.sys.color.on-secondary-container` |
| `md.comp.filled-tonal-button.hover.state-layer.color`   | `md.sys.color.on-secondary-container` |
| `md.comp.filled-tonal-button.focus.state-layer.color`   | `md.sys.color.on-secondary-container` |

### Outlined Button

| Component Token                                     | Value (Reference)      |
| --------------------------------------------------- | ---------------------- |
| `md.comp.outlined-button.outline.color`             | `md.sys.color.outline` |
| `md.comp.outlined-button.label-text.color`          | `md.sys.color.primary` |
| `md.comp.outlined-button.icon.color`                | `md.sys.color.primary` |
| `md.comp.outlined-button.pressed.state-layer.color` | `md.sys.color.primary` |
| `md.comp.outlined-button.hover.state-layer.color`   | `md.sys.color.primary` |
| `md.comp.outlined-button.focus.state-layer.color`   | `md.sys.color.primary` |
| `md.comp.outlined-button.outline.width`             | `1px`                  |

### Text Button

| Component Token                                 | Value (Reference)      |
| ----------------------------------------------- | ---------------------- |
| `md.comp.text-button.label-text.color`          | `md.sys.color.primary` |
| `md.comp.text-button.icon.color`                | `md.sys.color.primary` |
| `md.comp.text-button.pressed.state-layer.color` | `md.sys.color.primary` |
| `md.comp.text-button.hover.state-layer.color`   | `md.sys.color.primary` |
| `md.comp.text-button.focus.state-layer.color`   | `md.sys.color.primary` |
| `md.comp.text-button.container.color`           | `transparent`          |

## State Composition

State layers are overlays mixed with the container color (or surface if container is transparent).

| State   | Opacity |
| ------- | ------- |
| Hover   | 8%      |
| Focus   | 12%     |
| Pressed | 12%     |
| Dragged | 16%     |
