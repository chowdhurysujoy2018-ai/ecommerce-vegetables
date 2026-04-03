import React from "react";

const ContentBlock = ({
  title,
  subtitle,
  description,
  children,
  align = "left",
  className = "",
  titleClass = "",
  subtitleClass = "",
  descClass = "",
}) => {
  const alignment =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  return (
    <div className={`${alignment} space-y-3 ${className}`}>
      
      {/* Subtitle */}
      {subtitle && (
        <p className={`text-sm text-green-600 font-medium ${subtitleClass}`}>
          {subtitle}
        </p>
      )}

      {/* Title */}
      {title && (
        <h2 className={`text-xl font-semibold text-gray-800 ${titleClass}`}>
          {title}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p className={`text-gray-600 leading-relaxed ${descClass}`}>
          {description}
        </p>
      )}

      {/* Custom Content */}
      {children && <div>{children}</div>}
    </div>
  );
};

export default ContentBlock;