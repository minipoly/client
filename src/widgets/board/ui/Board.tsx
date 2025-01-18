import React from "react";
import "./Board.css";

import { StreetSpace } from "@entities/street-space";
import { SquareSpace } from "@shared/ui/square-space";

export interface BoardProps {}

export const Board: React.FC<BoardProps> = () => {
    return (
        <div className="board bg-board-bg">
            <div className="bottom">
                <SquareSpace />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
            </div>
            <div className="left">
                <SquareSpace />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
            </div>
            <div className="top">
                <SquareSpace />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
            </div>
            <div className="right">
                <SquareSpace />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
                <StreetSpace cost={350} name={"CUSTOM"} color={"blue"} />
            </div>
        </div>
    );
};
