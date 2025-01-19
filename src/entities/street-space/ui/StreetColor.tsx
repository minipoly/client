import React, { memo } from "react";

export type color =
    | "white"
    | "red"
    | "yellow"
    | "green"
    | "blue"
    | "brown"
    | "light-blue"
    | "pink"
    | "orange";

export interface StreetColorProps extends React.HTMLAttributes<HTMLDivElement> {
    color: color;
}

const StreetColorComponent: React.FC<StreetColorProps> = ({
    color,
    className,
    ...props
}) => {
    const ColorClass = `bg-color-${color}`;

    return <div className={`${ColorClass} ${className}`} {...props}></div>;
};

export const StreetColor = memo(StreetColorComponent);
