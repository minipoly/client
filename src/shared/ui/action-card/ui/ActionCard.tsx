import React from "react";

export type ActionCardType = "chance" | "community-chest";

export interface ActionCardProps extends React.HTMLAttributes<HTMLDivElement> {
    type: ActionCardType;
}

const ActionCardComponent: React.FC<ActionCardProps> = ({
    className,
    type,
    ...props
}) => {
    const bg =
        type === "chance"
            ? "bg-border-gradient-chance"
            : "bg-border-gradient-community-chest";

    return (
        <div
            className={`${className} ${bg} h-[84.8%] [aspect-ratio:0.64]`}
            {...props}
        ></div>
    );
};

export const ActionCard = React.memo(ActionCardComponent);
