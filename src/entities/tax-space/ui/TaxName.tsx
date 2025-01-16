import React, { memo } from "react";

export interface TaxNameProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: string;
}

const TaxNameComponent: React.FC<TaxNameProps> = ({ children, className }) => {
    return (
        <h2
            className={`typography-board-large mx-auto max-w-[100px] select-none text-center text-board-text ${className}`}
        >
            {children.toUpperCase()}
        </h2>
    );
};

export const TaxName = memo(TaxNameComponent);
