import React, { memo } from "react";

import { StreetColor } from "./StreetColor";
import type { StreetColorProps } from "./StreetColor";
import { Space } from "@shared/ui/space";

export interface StreetSpaceProps extends StreetColorProps {
    name: string;
    cost: number;
    className?: string;
}

const StreetSpaceComponent: React.FC<StreetSpaceProps> = ({
    color,
    name,
    cost,
    className,
}) => {
    return (
        <Space className={className}>
            <StreetColor
                color={color}
                className="h-[23%] w-full border-b-[2px] border-solid border-black"
            />
            <Space.Name>{name}</Space.Name>
            <Space.Cost>{cost}</Space.Cost>
        </Space>
    );
};

export const StreetSpace = memo(StreetSpaceComponent);
