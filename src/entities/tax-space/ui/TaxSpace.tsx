import React from "react";

import { TaxName } from "./TaxName";
import { Space } from "@shared/ui/space";

export interface TaxSpaceProps {
    name: string;
    cost: number;
    image: string;
}

export const TaxSpace: React.FC<TaxSpaceProps> = ({ name, cost, image }) => {
    return (
        <Space>
            <TaxName className="m-[19px_0_0]">{name}</TaxName>
            <Space.Image image={image} className="absolute bottom-[32px]" />
            <Space.Cost className="absolute bottom-4 w-full">{cost}</Space.Cost>
        </Space>
    );
};
