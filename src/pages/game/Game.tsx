import React from "react";
import { useTranslation } from "react-i18next";

const Game: React.FC = () => {
    const { t } = useTranslation("game");
    return <div>{t("welcome")}</div>;
};

export { Game };
