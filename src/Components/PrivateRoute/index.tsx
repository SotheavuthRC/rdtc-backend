/**
 *
 * Private Route
 *
 */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { createStructuredSelector } from "reselect";
// import { checkPermissionForComponent } from "Utility/Permission";

// import { PermissionDenied } from "Components/PermissionDenied";

// import {
//     MakeIsLoggedSelector,
//     UserProfileSelector,
//     MakePermissionSelector,
// } from "Modules/Application/Selectors";

// const stateSelector = createStructuredSelector({
//     user: UserProfileSelector(),
//     isLogged: MakeIsLoggedSelector(),
//     permissions: MakePermissionSelector(),
// });

const PrivateRoute = ({
    children,
    path = "",
    resource = "",
    method = "",
    defaultPermission = true,
    requirePermission = [],
}: PrivateRouteType) => {
    // const { isLogged, user, permissions } = useSelector(stateSelector);
    // const location = useLocation();
    // const [permitted, setPermitted] = useState(true);

    // useEffect(() => {
    //     if (isLogged && permissions && !defaultPermission) {
    //         setPermitted(
    //             checkPermissionForComponent(permissions, {
    //                 path,
    //                 resource,
    //                 method,
    //                 defaultPermission,
    //             },
    //                 requirePermission)
    //         );
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [user, location, permissions]);

    // if (isLogged === null || isLogged === false) {
    //     window.location.href = "https://cgmc-core-dev.sgx.bz/";
    // }

    // if (!permitted) {
    //     return <PermissionDenied />;
    // }
    const isLogged = true;

    return isLogged && <div className=" w-full min-h-screen">{children}</div>;
};
export interface PrivateRouteType {
    defaultPermission: boolean;
    path?: string;
    resource: string;
    method: string;
    requirePermission: any;
    children?: React.ReactNode;
}

export default PrivateRoute;
