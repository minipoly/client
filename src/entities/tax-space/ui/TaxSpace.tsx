import React, { memo } from "react";

import { TaxName } from "./TaxName";
import { Space } from "@shared/ui/space";

export interface TaxSpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    cost: number;
    image: string;
}

const TaxSpaceComponent: React.FC<TaxSpaceProps> = ({
    name,
    cost,
    image,
    className,
    ...props
}) => {
    return (
        <Space className={className} {...props}>
            <TaxName className="m-[10%_0_0]">{name}</TaxName>
            <Space.Image image={image} className="absolute bottom-[17%] z-10" />
            <Space.Cost>{cost}</Space.Cost>
        </Space>
    );
};

export const TaxSpace = memo(TaxSpaceComponent);
