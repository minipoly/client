import React, { memo } from "react";

import { Space } from "@shared/ui/space";

export interface ServiceSpaceProps {
    name: string;
    cost: number;
    image: string;
}

const ServiceSpaceComponent: React.FC<ServiceSpaceProps> = ({
    name,
    cost,
    image,
}) => {
    return (
        <Space>
            <Space.Name className="m-[19px_0_0]">{name}</Space.Name>
            <Space.Image image={image} className="absolute bottom-[34px]" />
            <Space.Cost className="absolute bottom-4 w-full">{cost}</Space.Cost>
        </Space>
    );
};

export const ServiceSpace = memo(ServiceSpaceComponent);
