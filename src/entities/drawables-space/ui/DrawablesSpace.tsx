import React from "react";

import { Space } from "@shared/ui/space";

export interface DrawablesSpaceProps {
    name: string;
    image: string;
}

export const DrawablesSpace: React.FC<DrawablesSpaceProps> = ({
    name,
    image,
}) => {
    return (
        <Space>
            <Space.Name className="m-[19px_0_0]">{name}</Space.Name>
            <Space.Image image={image} className="absolute bottom-[22px]" />
        </Space>
    );
};
