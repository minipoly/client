import React, { memo } from "react";
import { Color } from "./Color";

export interface CardComponentProps {
    children?: React.ReactNode;
}

const Card: React.FC<CardComponentProps> & {
    Color: typeof Color;
} = ({ children }) => {
    return (
        <div className="flex h-[452px] w-[278px] flex-col items-center border-[2px] border-solid border-black bg-white">
            {children}
        </div>
    );
};

Card.Color = Color;

export { Card };
