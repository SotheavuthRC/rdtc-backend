import { useRoutes, Outlet } from "react-router-dom";
import { Dashboard } from "Modules/Applications/Dashboard";
import PrivateRoute from "Components/PrivateRoute";

const routes = [
    {
        key: "home",
        path: "/",
        element: (
            <PrivateRoute method="get" resource="root" requirePermission={[0]} defaultPermission>
                <Dashboard />
            </PrivateRoute>
        )
    },
];

const RootRouter = () => useRoutes(routes);

export default RootRouter;
