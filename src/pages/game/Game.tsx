import React from "react";
import { useTranslation } from "react-i18next";

const Game: React.FC = () => {
    const { t } = useTranslation("game");
    return (
        <div className="font-game tracking-2 tracking-2 text-[20px] font-medium">
            {t("welcome")}
        </div>
    );
};

export { Game };
