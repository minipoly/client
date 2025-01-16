import React, { memo } from "react";

import { SpaceName } from "@shared/ui/space-name";
import { StreetColor } from "./StreetColor";
import type { StreetColorProps } from "./StreetColor";
import { SpaceCost } from "@shared/ui/space-cost";

export interface StreetSpaceProps extends StreetColorProps {
    name: string;
    cost: number;
}

const StreetSpaceComponent: React.FC<StreetSpaceProps> = ({
    color,
    name,
    cost,
}) => {
    return (
        <div className="relative h-[182px] w-[112px] border-b-4 border-l-2 border-r-2 border-t-4 border-solid border-black">
            <StreetColor
                color={color}
                className="h-[42px] w-full border-b-[4px] border-solid border-black"
            />
            <SpaceName className="m-[21px_0_0]">{name}</SpaceName>
            <SpaceCost className="absolute bottom-4 w-full">{cost}</SpaceCost>
        </div>
    );
};

export const StreetSpace = memo(StreetSpaceComponent);
