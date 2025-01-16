import React, { memo } from "react";

export interface SpaceNameProps
    extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

const SpaceNameComponent: React.FC<SpaceNameProps> = ({
    children,
    className,
}) => {
    return (
        <h2
            className={`typography-board-small text-board-text select-none text-center ${className}`}
        >
            {children}
        </h2>
    );
};

export const SpaceName = memo(SpaceNameComponent);
