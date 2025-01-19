import React, { memo } from "react";

import style from "./LargeLogo.module.css";

export interface LargeLogoComponentProps
    extends React.HTMLAttributes<HTMLDivElement> {
    className: string;
    height: string;
}

const LargeLogoComponent: React.FC<LargeLogoComponentProps> = ({
    className,
    height,
    ...props
}) => {
    return (
        <div
            className={`${style.logo} ${className} pointer-events-none bg-cover bg-center`}
            style={{
                height,
                backgroundImage: `url(/images/board/large_logo.svg)`,
            }}
            {...props}
        />
    );
};

export const LargeLogo = memo(LargeLogoComponent);
