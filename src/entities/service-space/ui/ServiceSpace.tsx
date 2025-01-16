import React, { memo } from "react";

import { SpaceName } from "@shared/ui/space-name";
import { SpaceCost } from "@shared/ui/space-cost";
import { SpaceImage } from "@shared/ui/space-image";

export interface ServiceSpaceProps {
    name: string;
    cost: number;
    image: React.ReactNode;
}

const ServiceSpaceComponent: React.FC<ServiceSpaceProps> = ({
    name,
    cost,
    image,
}) => {
    return (
        <div className="relative h-[182px] w-[112px] border-b-4 border-l-2 border-r-2 border-t-4 border-solid border-black">
            <SpaceName className="m-[19px_0_0]">{name}</SpaceName>
            <SpaceImage>{image}</SpaceImage>
            <SpaceCost className="absolute bottom-4 w-full">{cost}</SpaceCost>
        </div>
    );
};

export const ServiceSpace = memo(ServiceSpaceComponent);
