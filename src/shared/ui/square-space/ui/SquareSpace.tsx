import React from "react";

export interface SquareSpaceProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export const SquareSpace: React.FC<SquareSpaceProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div
            className={`${className ? className : ""} relative aspect-square`}
            {...props}
        >
            {children}
        </div>
    );
};
