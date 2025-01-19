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
            className={`${className ? className : ""} relative box-border h-full w-full overflow-hidden border-b-0 border-l border-r border-t-2 border-solid border-black`}
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
