import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[13px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    deep_purple_A200: "bg-deep_purple-A200 text-white-A700",
  },
};
const sizes = { xs: "p-2.5", sm: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "deep_purple_A200"]),
};

export { Button };
