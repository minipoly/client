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
                className="h-[42px] w-full border-b-[4px] border-solid border-black"
            />
            <Space.Name className="m-[21px_0_0]">{name}</Space.Name>
            <Space.Cost className="absolute bottom-4 w-full">{cost}</Space.Cost>
        </Space>
    );
};

export const StreetSpace = memo(StreetSpaceComponent);
