import React from "react";

export interface ActionAreaProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const ActionArea: React.FC<ActionAreaProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div
            className={`${className} relative h-full w-full origin-center`}
            {...props}
        >
            <div className="h-[125%] absolute inset-0">
                <div className="relative h-full w-full p-[7%_5%]">{children}</div>
                <div
                    className="absolute inset-0 h-full bg-cover bg-center bg-no-repeat [aspect-ratio:1.47]"
                    style={{
                        backgroundImage:
                            "url('/images/board/action_area_border.svg')",
                    }}
                ></div>
            </div>
        </div>
    );
};
