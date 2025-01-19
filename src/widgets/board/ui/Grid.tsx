import React from "react";

import { LargeLogo } from "@entities/large-logo";

import { SquareSpace } from "@shared/ui/square-space";
import { StreetSpace } from "@entities/street-space";
import { TaxSpace } from "@entities/tax-space";
import { ServiceSpace } from "@entities/service-space";

import { ActionCard } from "@shared/ui/action-card/ui/ActionCard";
import { ActionArea } from "@shared/ui/action-area";

export interface GridProps {}

export const Grid: React.FC<GridProps> = () => {
    return (
        <div className="box-border grid h-full w-full [grid-template-columns:1.625fr_repeat(9,_1fr)_1.625fr] [grid-template-rows:1.625fr_repeat(9,_1fr)_1.625fr]">
            {/* Bottom */}
            <SquareSpace className="col-start-11 row-start-11 border border-b-0 border-l border-r-0 border-t border-solid border-black bg-red-500" />
            <StreetSpace
                className="col-start-10 row-start-11 box-border"
                name="CUSTOM CUSTOM"
                color="brown"
                cost={24}
            />
            <TaxSpace
                className="col-start-9 row-start-11"
                name="CUSTOM TAX"
                image="/images/board/ring.png"
                cost={24}
            />
            <StreetSpace
                className="col-start-8 row-start-11"
                name="CUSTOM"
                color="brown"
                cost={24}
            />
            <StreetSpace
                className="col-start-7 row-start-11"
                name="CUSTOM"
                color="brown"
                cost={24}
            />
            <ServiceSpace
                className="col-start-6 row-start-11"
                name="CUSTOM"
                image="/images/board/train.svg"
                cost={24}
            />
            <StreetSpace
                className="col-start-5 row-start-11"
                name="CUSTOM"
                color="light-blue"
                cost={24}
            />
            <StreetSpace
                className="col-start-4 row-start-11"
                name="CUSTOM"
                color="light-blue"
                cost={24}
            />
            <ServiceSpace
                className="col-start-3 row-start-11"
                name="CUSTOM"
                image="/images/board/bulb.png"
                cost={24}
            />
            <StreetSpace
                className="col-start-2 row-start-11"
                name="CUSTOM"
                color="light-blue"
                cost={24}
            />
            <SquareSpace className="col-start-1 row-start-11 border border-b-0 border-l-0 border-r border-t border-solid border-black bg-red-500" />
            {/* Actions Area */}
            <ActionArea className="col-start-4 row-start-4 h-[60,5%] -translate-x-2/4 -translate-y-2/4 -rotate-45 transform">
                <ActionCard type="chance" />
            </ActionArea>
            <ActionArea className="col-start-8 row-start-8 h-[60,5%] translate-x-1/2 translate-y-1/2 -rotate-45 transform">
                gg
            </ActionArea>
            {/* Logo */}
            <div className="realtive col-start-6 col-end-7 row-start-6 row-end-7">
                <LargeLogo
                    height="18%"
                    className="absolute inset-0 m-auto origin-center -translate-y-1/4 -rotate-45 transform"
                />
            </div>
        </div>
    );
};
