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
            className={`${className ? className : ""} relative h-[182px] w-[182px] border-b-4 border-l-2 border-r-4 border-t-2 border-solid border-black`}
            {...props}
        >
            {children}
        </div>
    );
};
