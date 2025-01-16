import React from "react";

export interface CurrencyProps extends React.SVGProps<SVGSVGElement> {
    size?: "small" | "medium";
}

export const Currency: React.FC<CurrencyProps> = ({
    size = "medium",
    ...props
}) => {
    if (size === "small") {
        return (
            <svg
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M1.52656 0H1.54456L3.64156 5.031L5.72056 0H5.73856L6.98056 6.318L6.42256 6.39L5.54056 1.818H5.52256L3.65056 6.462H3.63256L1.68856 1.818H1.67056L0.824559 6.39L0.266559 6.318L1.52656 0Z"
                    fill="currentColor"
                />
                <path
                    d="M6.9085 2.61781H0.342127L0.23794 3.1178H7.01268L6.9085 2.61781Z"
                    fill="currentColor"
                />
                <path
                    d="M7.14644 3.75969H0.104187L0 4.25969H7.25062L7.14644 3.75969Z"
                    fill="currentColor"
                />
            </svg>
        );
    }

    return (
        <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M2.32341 0H2.34941L5.37841 7.267L8.38141 0H8.40741L10.2014 9.126L9.39541 9.23L8.12141 2.626H8.09541L5.39141 9.334H5.36541L2.55741 2.626H2.53141L1.30941 9.23L0.50341 9.126L2.32341 0Z"
                fill="currentColor"
            />
            <path
                d="M10.2502 4.126H0.458423L0.312561 4.826H10.3961L10.2502 4.126Z"
                fill="currentColor"
            />
            <path
                d="M10.5628 5.626H0.145862L0 6.326H10.7086L10.5628 5.626Z"
                fill="currentColor"
            />
        </svg>
    );
};
