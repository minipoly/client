import React from "react";

import { Board } from "@widgets/board";

const Game: React.FC = () => {
    return (
        <div>
            <div className="min-w-screen flex min-h-screen items-end bg-board-bg p-10 font-game text-[20px] font-medium">
                <Board />
            </div>
        </div>
    );
};

export { Game };
