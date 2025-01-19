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

export interface ColorProps {
    title: string;
    header: string;
    color: color;
}

const ColorComponent: React.FC<ColorProps> = ({ color, title, header }) => {
    const ColorClass = `bg-color-${color}`;

    return (
        <div
            className={`${ColorClass} m-[10px_0_0] h-[96px] w-[258px] select-none border border-solid border-black text-board-text`}
        >
            <p className="typography-card-small-bold m-[14px_0_0] text-center text-white">
                {title}
            </p>
            <h2 className="typography-card-large-bold m-[14px_0_0] text-center text-white">
                {header}
            </h2>
        </div>
    );
};

export const Color = memo(ColorComponent);
