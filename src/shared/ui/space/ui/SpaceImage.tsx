import React, { memo } from "react";

export interface SpaceImageProps extends React.HTMLAttributes<HTMLDivElement> {
    image: string;
}

const SpaceImageComponent: React.FC<SpaceImageProps> = ({
    className,
    image,
    ...props
}) => {
    return (
        <div className={`${className!} flex w-full justify-center`} {...props}>
            <img
                src={image}
                className="pointer-events-none m-auto h-[54.95%] w-full select-none"
                alt="Icon"
            />
        </div>
    );
};

export const SpaceImage = memo(SpaceImageComponent);
