import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("html", {
  textSizeAdjust: "100%",
  fontSize: "16px",
});

globalStyle("body", {
  margin: 0,
  WebkitFontSmoothing: "antialiased",
});

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
  height: "auto",
});

globalStyle("button, input, textarea, select", {
  color: "inherit",
  font: "inherit",
});
