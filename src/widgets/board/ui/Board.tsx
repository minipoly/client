import React from "react";

import { Grid } from "./Grid";

export interface BoardProps {}

export const Board: React.FC<BoardProps> = () => {
    return (
        <div className="relative box-border aspect-square h-full bg-white p-[1vh]">
            <div className="relative box-border h-full border-2 border-black bg-board-bg">
                <Grid></Grid>
            </div>
        </div>
    );
};
