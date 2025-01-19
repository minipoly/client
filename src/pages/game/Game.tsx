import React from "react";

import { Board } from "@widgets/board";

const Game: React.FC = () => {
    return (
        <div className="box-border flex h-screen w-screen bg-background">
            <div className="m-auto h-screen">
                <Board />
            </div>
        </div>
    );
};

export { Game };
