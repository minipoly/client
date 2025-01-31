import { createHashRouter, RouterProvider } from "react-router-dom";

import { Home } from "@pages/home";
import { Error } from "@pages/error";
import { Game } from "@pages/game";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/game",
        element: <Game />,
    },
    {
        path: "*",
        element: <Error />,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
