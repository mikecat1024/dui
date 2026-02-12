import { argbFromHex, Hct, hexFromArgb, SchemeTonalSpot } from "@material/material-color-utilities";

import { dark, light, md } from "./theme.css.js";

const defaultSeedColor = "#6750a4";
const defaultContrastLevel = 0;

type ThemeMode = "light" | "dark";
type ThemeColorTokens = { [K in keyof typeof md.sys.color]: string };

export interface CreateThemeOptions {
  seedColor?: string;
  mode?: ThemeMode;
  contrastLevel?: number;
  colorOverrides?: Partial<ThemeColorTokens>;
}

export interface CreatedTheme {
  className: string;
  style: Record<string, string>;
}

function schemeToColors(scheme: SchemeTonalSpot): ThemeColorTokens {
  return {
    primary: hexFromArgb(scheme.primary),
    onPrimary: hexFromArgb(scheme.onPrimary),
    primaryContainer: hexFromArgb(scheme.primaryContainer),
    onPrimaryContainer: hexFromArgb(scheme.onPrimaryContainer),
    primaryFixed: hexFromArgb(scheme.primaryFixed),
    primaryFixedDim: hexFromArgb(scheme.primaryFixedDim),
    onPrimaryFixed: hexFromArgb(scheme.onPrimaryFixed),
    onPrimaryFixedVariant: hexFromArgb(scheme.onPrimaryFixedVariant),
    secondary: hexFromArgb(scheme.secondary),
    onSecondary: hexFromArgb(scheme.onSecondary),
    secondaryContainer: hexFromArgb(scheme.secondaryContainer),
    onSecondaryContainer: hexFromArgb(scheme.onSecondaryContainer),
    secondaryFixed: hexFromArgb(scheme.secondaryFixed),
    secondaryFixedDim: hexFromArgb(scheme.secondaryFixedDim),
    onSecondaryFixed: hexFromArgb(scheme.onSecondaryFixed),
    onSecondaryFixedVariant: hexFromArgb(scheme.onSecondaryFixedVariant),
    tertiary: hexFromArgb(scheme.tertiary),
    onTertiary: hexFromArgb(scheme.onTertiary),
    tertiaryContainer: hexFromArgb(scheme.tertiaryContainer),
    onTertiaryContainer: hexFromArgb(scheme.onTertiaryContainer),
    tertiaryFixed: hexFromArgb(scheme.tertiaryFixed),
    tertiaryFixedDim: hexFromArgb(scheme.tertiaryFixedDim),
    onTertiaryFixed: hexFromArgb(scheme.onTertiaryFixed),
    onTertiaryFixedVariant: hexFromArgb(scheme.onTertiaryFixedVariant),
    error: hexFromArgb(scheme.error),
    onError: hexFromArgb(scheme.onError),
    errorContainer: hexFromArgb(scheme.errorContainer),
    onErrorContainer: hexFromArgb(scheme.onErrorContainer),
    background: hexFromArgb(scheme.background),
    onBackground: hexFromArgb(scheme.onBackground),
    surface: hexFromArgb(scheme.surface),
    surfaceDim: hexFromArgb(scheme.surfaceDim),
    surfaceBright: hexFromArgb(scheme.surfaceBright),
    surfaceContainerLowest: hexFromArgb(scheme.surfaceContainerLowest),
    surfaceContainerLow: hexFromArgb(scheme.surfaceContainerLow),
    surfaceContainer: hexFromArgb(scheme.surfaceContainer),
    surfaceContainerHigh: hexFromArgb(scheme.surfaceContainerHigh),
    surfaceContainerHighest: hexFromArgb(scheme.surfaceContainerHighest),
    onSurface: hexFromArgb(scheme.onSurface),
    surfaceVariant: hexFromArgb(scheme.surfaceVariant),
    onSurfaceVariant: hexFromArgb(scheme.onSurfaceVariant),
    outline: hexFromArgb(scheme.outline),
    outlineVariant: hexFromArgb(scheme.outlineVariant),
    shadow: hexFromArgb(scheme.shadow),
    scrim: hexFromArgb(scheme.scrim),
    surfaceTint: hexFromArgb(scheme.surfaceTint),
    inverseSurface: hexFromArgb(scheme.inverseSurface),
    inverseOnSurface: hexFromArgb(scheme.inverseOnSurface),
    inversePrimary: hexFromArgb(scheme.inversePrimary),
  };
}

function cssVarName(contractVar: string) {
  return contractVar.slice(4, -1);
}

function isDefaultThemeOptions({
  seedColor,
  mode,
  contrastLevel,
  colorOverrides,
}: Required<CreateThemeOptions>) {
  return (
    seedColor === defaultSeedColor &&
    mode === "light" &&
    contrastLevel === defaultContrastLevel &&
    Object.keys(colorOverrides).length === 0
  );
}

export function createTheme({
  seedColor = defaultSeedColor,
  mode = "light",
  contrastLevel = defaultContrastLevel,
  colorOverrides = {},
}: CreateThemeOptions = {}): CreatedTheme {
  const className = mode === "dark" ? dark : light;
  if (isDefaultThemeOptions({ seedColor, mode, contrastLevel, colorOverrides })) {
    return { className, style: {} };
  }

  const sourceHct = Hct.fromInt(argbFromHex(seedColor));
  const scheme = new SchemeTonalSpot(sourceHct, mode === "dark", contrastLevel);
  const colors = { ...schemeToColors(scheme), ...colorOverrides };
  const style: Record<string, string> = {};

  for (const key of Object.keys(md.sys.color) as Array<keyof typeof md.sys.color>) {
    style[cssVarName(md.sys.color[key])] = colors[key];
  }

  return { className, style };
}
