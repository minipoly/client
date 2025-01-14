import React from "react";
import { AppRouter } from "./routers/AppRouter";
import { setupI18n } from "@app/config/i18n";
import "./styles/global.css";

setupI18n();

const App: React.FC = () => {
    return <AppRouter />;
};

export default App;
