import React from "react";

const sizeClasses = {
  txtInterMedium19: "font-inter font-medium",
  txtInterMedium23: "font-inter font-medium",
  txtInterSemiBold26: "font-inter font-semibold",
  txtInterSemiBold15: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtMontserratSemiBold58: "font-montserrat font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold27: "font-inter font-semibold",
  txtMontserratSemiBold55: "font-montserrat font-semibold",
  txtInterMedium15: "font-inter font-medium",
  txtMontserratSemiBold11: "font-montserrat font-semibold",
  txtInterSemiBold28: "font-inter font-semibold",
  txtMontserratSemiBold65: "font-montserrat font-semibold",
  txtMontserratSemiBold40: "font-montserrat font-semibold",
  txtInterSemiBold26WhiteA700: "font-inter font-semibold",
  txtMontserratSemiBold50: "font-montserrat font-semibold",
  txtInterSemiBold32: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtMyanmarKhyay23: "font-myanmarkhyay font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
