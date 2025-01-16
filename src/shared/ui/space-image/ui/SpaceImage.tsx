import React, { memo } from "react";

export interface SpaceImageProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const SpaceImageComponent: React.FC<SpaceImageProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div
            className={`${className} flex h-[100px] select-none items-center justify-center`}
            {...props}
        >
            {children}
        </div>
    );
};

export const SpaceImage = memo(SpaceImageComponent);
