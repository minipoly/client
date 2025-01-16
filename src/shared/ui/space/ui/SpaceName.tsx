import React, { memo } from "react";

export interface SpaceNameProps
    extends React.HTMLAttributes<HTMLHeadingElement> {
    children: string;
}

const SpaceNameComponent: React.FC<SpaceNameProps> = ({
    children,
    className,
}) => {
    return (
        <h2
            className={`${className} typography-board-small select-none text-center text-board-text`}
        >
            {children}
        </h2>
    );
};

export const SpaceName = memo(SpaceNameComponent);
