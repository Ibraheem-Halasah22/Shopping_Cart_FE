import React from "react";

type RedBadgeProps = {
  color: string;
  width: string;
  height: string;
  children: React.ReactNode;
};
function RedBadge({ color, width, height, children }: RedBadgeProps) {
  return (
    <div
      className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
      style={{
        color: color,
        width: width,
        height: height,
        position: "absolute",
        bottom: 0,
        right: 0,
        transform: "translate(25%, 25%)",
      }}
    >
      {children}
    </div>
  );
}

export default RedBadge;
