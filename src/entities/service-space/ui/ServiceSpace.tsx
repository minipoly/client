import React, { memo } from "react";

import { Space } from "@shared/ui/space";

export interface ServiceSpaceProps
    extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    cost: number;
    image: string;
}

const ServiceSpaceComponent: React.FC<ServiceSpaceProps> = ({
    name,
    cost,
    image,
    className,
    ...props
}) => {
    return (
        <Space className={className} {...props}>
            <Space.Name>{name}</Space.Name>
            <Space.Image image={image} className="absolute bottom-[17%] z-10" />
            <Space.Cost>{cost}</Space.Cost>
        </Space>
    );
};

export const ServiceSpace = memo(ServiceSpaceComponent);
