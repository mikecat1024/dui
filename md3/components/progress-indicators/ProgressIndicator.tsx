import { type ComponentPropsWithoutRef } from "react";

import { joinClassNames } from "../../utils/utils.js";
import {
  circularActiveCircleStyle,
  circularIndeterminateSvgStyle,
  circularSvgStyle,
  circularTrackCircleStyle,
  linearActiveIndicatorStyle,
  linearIndeterminateActiveIndicatorStyle,
  linearStopIndicatorStyle,
  linearTrackStyle,
  progressIndicatorStyle,
  type ProgressIndicatorVariants,
} from "./progress-indicator.css.js";
import { progressIndicator } from "./token.js";

type ProgressIndicatorProps = ComponentPropsWithoutRef<"div"> &
  ProgressIndicatorVariants & {
    value?: number;
    max?: number;
    indeterminate?: boolean;
    showStopIndicator?: boolean;
  };

type ProgressIndicatorPrivateProps = ComponentPropsWithoutRef<"div"> & {
  mergedClassName: string;
  safeMax: number;
  safeValue: number;
  progress: number;
  isIndeterminate: boolean;
};

function clampValue(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function toPixelNumber(value: string) {
  return Number.parseFloat(value);
}

function CircularProgressIndicatorPrivate({
  mergedClassName,
  safeMax,
  safeValue,
  progress,
  isIndeterminate,
  ...props
}: ProgressIndicatorPrivateProps) {
  const size = toPixelNumber(progressIndicator.circular.size);
  const strokeWidth = toPixelNumber(progressIndicator.circular.activeIndicator.thickness);
  const trackActiveIndicatorSpace = toPixelNumber(
    progressIndicator.circular.trackActiveIndicatorSpace,
  );
  const indeterminateDashSize = toPixelNumber(
    progressIndicator.circular.activeIndicator.wave.wavelength,
  );
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const determinateArcLength = Math.max(0, progress * circumference - trackActiveIndicatorSpace);
  const determinateDashArray = `${determinateArcLength} ${circumference}`;
  const indeterminateDashArray = `${indeterminateDashSize} ${circumference}`;
  const svgClassName = joinClassNames(
    circularSvgStyle,
    isIndeterminate ? circularIndeterminateSvgStyle : undefined,
  );

  return (
    <div
      className={mergedClassName}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={isIndeterminate ? undefined : safeValue}
      {...props}
      data-slot="root"
    >
      <svg className={svgClassName} viewBox={`0 0 ${size} ${size}`} aria-hidden>
        <circle
          className={circularTrackCircleStyle}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          pathLength={circumference}
        />
        <circle
          className={circularActiveCircleStyle}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={isIndeterminate ? indeterminateDashArray : determinateDashArray}
          strokeDashoffset={0}
          pathLength={circumference}
        />
      </svg>
    </div>
  );
}

function LinearProgressIndicatorPrivate({
  mergedClassName,
  safeMax,
  safeValue,
  progress,
  isIndeterminate,
  showStopIndicator,
  ...props
}: ProgressIndicatorPrivateProps & Pick<ProgressIndicatorProps, "showStopIndicator">) {
  const activeIndicatorInlineSize = `max(0px, calc(${progress * 100}% - ${progressIndicator.linear.trackActiveIndicatorSpace}))`;
  const activeIndicatorClassName = joinClassNames(
    linearActiveIndicatorStyle,
    isIndeterminate ? linearIndeterminateActiveIndicatorStyle : undefined,
  );

  return (
    <div
      className={mergedClassName}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={isIndeterminate ? undefined : safeValue}
      {...props}
      data-slot="root"
    >
      <span className={linearTrackStyle}>
        <span
          className={activeIndicatorClassName}
          style={isIndeterminate ? undefined : { inlineSize: activeIndicatorInlineSize }}
        />
        {showStopIndicator ? <span className={linearStopIndicatorStyle} /> : null}
      </span>
    </div>
  );
}

export default function ProgressIndicator({
  className,
  variant = "linear",
  value,
  max = 100,
  indeterminate,
  showStopIndicator = false,
  ...props
}: ProgressIndicatorProps) {
  const safeMax = Number.isFinite(max) && max > 0 ? max : 100;
  const safeValue = clampValue(value ?? 0, 0, safeMax);
  const progress = safeValue / safeMax;
  const isIndeterminate = indeterminate ?? value === undefined;

  const indicatorClassName = joinClassNames(progressIndicatorStyle({ variant }));
  const mergedClassName = joinClassNames(indicatorClassName, className);

  if (variant === "circular") {
    return (
      <CircularProgressIndicatorPrivate
        mergedClassName={mergedClassName}
        safeMax={safeMax}
        safeValue={safeValue}
        progress={progress}
        isIndeterminate={isIndeterminate}
        {...props}
      />
    );
  }

  return (
    <LinearProgressIndicatorPrivate
      mergedClassName={mergedClassName}
      safeMax={safeMax}
      safeValue={safeValue}
      progress={progress}
      isIndeterminate={isIndeterminate}
      showStopIndicator={showStopIndicator}
      {...props}
    />
  );
}

ProgressIndicator.displayName = "ProgressIndicator";
