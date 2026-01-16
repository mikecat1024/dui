import {
  argbFromHex,
  Hct,
  hexFromArgb,
  SchemeTonalSpot,
} from "@material/material-color-utilities";
import { createTheme, createThemeContract } from "@vanilla-extract/css";

const seedColor = "#6750a4";
const sourceHct = Hct.fromInt(argbFromHex(seedColor));
const lightScheme = new SchemeTonalSpot(sourceHct, false, 0);

function schemeToColors(scheme: SchemeTonalSpot) {
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

export const vars = createThemeContract({
  sys: {
    color: {
      primary: null,
      onPrimary: null,
      primaryContainer: null,
      onPrimaryContainer: null,
      primaryFixed: null,
      primaryFixedDim: null,
      onPrimaryFixed: null,
      onPrimaryFixedVariant: null,
      secondary: null,
      onSecondary: null,
      secondaryContainer: null,
      onSecondaryContainer: null,
      secondaryFixed: null,
      secondaryFixedDim: null,
      onSecondaryFixed: null,
      onSecondaryFixedVariant: null,
      tertiary: null,
      onTertiary: null,
      tertiaryContainer: null,
      onTertiaryContainer: null,
      tertiaryFixed: null,
      tertiaryFixedDim: null,
      onTertiaryFixed: null,
      onTertiaryFixedVariant: null,
      error: null,
      onError: null,
      errorContainer: null,
      onErrorContainer: null,
      background: null,
      onBackground: null,
      surface: null,
      surfaceDim: null,
      surfaceBright: null,
      surfaceContainerLowest: null,
      surfaceContainerLow: null,
      surfaceContainer: null,
      surfaceContainerHigh: null,
      surfaceContainerHighest: null,
      onSurface: null,
      surfaceVariant: null,
      onSurfaceVariant: null,
      outline: null,
      outlineVariant: null,
      shadow: null,
      scrim: null,
      surfaceTint: null,
      inverseSurface: null,
      inverseOnSurface: null,
      inversePrimary: null,
    },
    state: {
      hover: null,
      pressed: null,
      focus: null,
      dragged: null,
      disabledContainer: null,
      disabledContent: null,
    },
    typescale: {
      label: {
        large: {
          fontFamily: null,
          fontSize: null,
          lineHeight: null,
          fontWeight: null,
          letterSpacing: null,
        },
      },
      body: {
        large: {
          fontFamily: null,
          fontSize: null,
          lineHeight: null,
          fontWeight: null,
          letterSpacing: null,
        },
        small: {
          fontFamily: null,
          fontSize: null,
          lineHeight: null,
          fontWeight: null,
          letterSpacing: null,
        },
      },
    },
    shape: {
      corner: {
        extraSmall: null,
        md: null,
        full: null,
      },
    },
    elevation: {
      level0: null,
      level1: null,
      level2: null,
      level3: null,
      level4: null,
      level5: null,
    },
  },
});

const sharedThemeTokens = {
  state: {
    hover: "8%",
    pressed: "12%",
    focus: "12%",
    dragged: "16%",
    disabledContainer: "12%",
    disabledContent: "38%",
  },
  typescale: {
    label: {
      large: {
        fontFamily:
          '"Roboto", "Noto Sans", "Helvetica Neue", Arial, sans-serif',
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "500",
        letterSpacing: "0.1px",
      },
    },
    body: {
      large: {
        fontFamily:
          '"Roboto", "Noto Sans", "Helvetica Neue", Arial, sans-serif',
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "400",
        letterSpacing: "0.5px",
      },
      small: {
        fontFamily:
          '"Roboto", "Noto Sans", "Helvetica Neue", Arial, sans-serif',
        fontSize: "12px",
        lineHeight: "16px",
        fontWeight: "400",
        letterSpacing: "0.4px",
      },
    },
  },
  shape: {
    corner: {
      extraSmall: "4px",
      md: "12px",
      full: "999px",
    },
  },
  elevation: {
    level0: "none",
    level1: "0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)",
    level2: "0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15)",
    level3: "0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 8px 3px rgba(0, 0, 0, 0.15)",
    level4: "0 2px 3px rgba(0, 0, 0, 0.3), 0 6px 10px 4px rgba(0, 0, 0, 0.15)",
    level5: "0 4px 4px rgba(0, 0, 0, 0.3), 0 8px 12px 6px rgba(0, 0, 0, 0.15)",
  },
};

export const lightThemeClass = createTheme(vars, {
  sys: {
    color: schemeToColors(lightScheme),
    ...sharedThemeTokens,
  },
});
