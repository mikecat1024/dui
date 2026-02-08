const progressIndicatorToken = {
  linear: {
    height: "4px",
    activeIndicator: {
      thickness: "4px",
      wave: {
        amplitude: "3px",
        wavelength: "40px",
      },
    },
    track: {
      thickness: "4px",
    },
    stopIndicator: {
      size: "4px",
      trailingSpace: "0px",
    },
    trackActiveIndicatorSpace: "4px",
    indeterminate: {
      activeIndicator: {
        wave: {
          wavelength: "20px",
        },
      },
    },
  },
  circular: {
    size: "40px",
    activeIndicator: {
      thickness: "4px",
      wave: {
        amplitude: "1.6px",
        wavelength: "15px",
      },
    },
    track: {
      thickness: "4px",
    },
    trackActiveIndicatorSpace: "4px",
  },
};

export const progressIndicator = progressIndicatorToken;
