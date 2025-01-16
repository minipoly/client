import React from "react";

import { SpaceImage } from "./SpaceImage";
import { SpaceCost } from "./SpaceCost";
import { SpaceName } from "./SpaceName";

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Space: React.FC<SpaceProps> & {
    Image: typeof SpaceImage;
    Cost: typeof SpaceCost;
    Name: typeof SpaceName;
} = ({ children, className, ...props }) => {
    return (
        <div
            className={`${className ? className : ""} relative h-[182px] w-[112px] border-b-4 border-l-2 border-r-2 border-t-4 border-solid border-black`}
            {...props}
        >
            {children}
        </div>
    );
};

Space.Image = SpaceImage;
Space.Cost = SpaceCost;
Space.Name = SpaceName;

export { Space };
