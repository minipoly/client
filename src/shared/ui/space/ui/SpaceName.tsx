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
            className={`${className} typography-board-small m-[11%_0_0] select-none p-[0_3%] text-center text-board-text`}
        >
            {children}
        </h2>
    );
};

export const SpaceName = memo(SpaceNameComponent);
