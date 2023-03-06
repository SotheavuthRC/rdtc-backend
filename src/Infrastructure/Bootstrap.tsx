import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { useInjectReducer } from "Infrastructure/Utility/InjectReducer";
// import { useInjectSaga } from "Infrastructure/Utility/InjectSaga";

// import SnackMessage from "Components/SnackMessage/";
import RootRouter from "Infrastructure/Routes";

import ApplicationReducer from "Modules/Applications/Reducer";
// import ApplicationSaga from "Modules/Application/Saga";

const key = "application";
export default function Bootstrap() {
    useInjectReducer({ key, reducer: ApplicationReducer });
    // useInjectSaga({ key, saga: ApplicationSaga });

    // fields

    return (
        <>
            <Helmet titleTemplate="%s - CGMC" defaultTitle="CGMC">
                <meta name="description" content="CGMC" />
            </Helmet>

            <BrowserRouter>
                {/* <SnackMessage /> */}
                <RootRouter />
            </BrowserRouter>
        </>
    );
}
