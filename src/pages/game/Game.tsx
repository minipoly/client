import React from "react";
import { useTranslation } from "react-i18next";

import { StreetSpace } from "@entities/street-space";
import { ServiceSpace } from "@entities/service-space";
import { TaxSpace } from "@entities/tax-space";
import { DrawablesSpace } from "@entities/drawables-space";

const Game: React.FC = () => {
    // const { t } = useTranslation("game");
    return (
        <div className="flex h-screen items-center bg-board-bg p-10 font-game text-[20px] font-medium">
            {/* {t("welcome")} */}
            <StreetSpace color="red" name="NAME" cost={350} />
            <StreetSpace color="red" name="NAME" cost={350} />
            <ServiceSpace
                name="NAME"
                cost={350}
                image={"/images/board/train.png"}
            />
            <StreetSpace color="yellow" name="NAME" cost={350} />
            <StreetSpace color="yellow" name="NAME" cost={350} />
            <TaxSpace
                name="LUXURY TAX"
                cost={350}
                image={"/images/board/ring.png"}
            />
            <StreetSpace color="yellow" name="NAME" cost={350} />
            <DrawablesSpace
                name="COMMUNITY CHEST"
                image={"/images/board/chest.png"}
            />
        </div>
    );
};

export { Game };
