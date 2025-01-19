import React from "react";
import { AppRouter } from "./routers/AppRouter";
import { setupI18n } from "@app/config/i18n";
import { ThemeProvider } from "@entities/theme";

import "./styles/global.css";
import "./styles/colors.css";
import "./styles/theme.css";
import "./styles/fonts.css";

setupI18n();

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <AppRouter />
        </ThemeProvider>
    );
};

export default App;
