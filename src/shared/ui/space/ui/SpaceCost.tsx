import React, { memo } from "react";
import { Currency } from "@shared/ui/currency";

export interface SpaceCostProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    children: number;
}

const SpaceCostComponent: React.FC<SpaceCostProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <p
            className={`${className} typography-board-small absolute bottom-[10%] flex w-full select-none items-center justify-center text-board-text`}
            {...props}
        >
            <span>
                <Currency size="medium" />
            </span>
            {children}
        </p>
    );
};

export const SpaceCost = memo(SpaceCostComponent);
