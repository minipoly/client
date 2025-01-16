import React from "react";
import { useTranslation } from "react-i18next";

import { StreetSpace } from "@entities/street-space";
import { ServiceSpace } from "@entities/service-space";
import { Train } from "@shared/assets/icons/Train";

const Game: React.FC = () => {
    const { t } = useTranslation("game");
    return (
        <div className="flex h-screen items-center bg-board-bg p-10 font-game text-[20px] font-medium">
            {/* {t("welcome")} */}
            <StreetSpace color="red" name="NAME" cost={350} />
            <StreetSpace color="red" name="NAME" cost={350} />
            <ServiceSpace
                name="NAME"
                cost={350}
                image={<Train className="text-board-text" />}
            />
            <StreetSpace color="yellow" name="NAME" cost={350} />
            <StreetSpace color="yellow" name="NAME" cost={350} />
            <ServiceSpace name="NAME" cost={350} image={<>gg</>} />
            <StreetSpace color="yellow" name="NAME" cost={350} />
        </div>
    );
};

export { Game };
