import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import createReducer from "Infrastructure/Reducers";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export default function ConfigureStore(
    initialState = {},
    additionalMiddleware = []
) {
    let composeEnhancers =
        (typeof window !== "undefined" &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        compose;
    let reduxSagaMonitorOption = {};

    if (process.env.NODE_ENV !== "production" && typeof window === "object") {
        // if (
        //     (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        //     (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        // ) {
        //     composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION__({});
        // }
        // if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        //     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        // }
        // if ((window as any).__SAGA_MONITOR_EXTENSION__()) {
        //     reduxSagaMonitorOption = (
        //         window as any
        //     ).__SAGA_MONITOR_EXTENSION__();
        // }
    }

    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOption);

    const middlewares = [sagaMiddleware];
    const enhancers = [
        applyMiddleware(...additionalMiddleware, ...middlewares),
    ];
    let store: any = createStore(
        createReducer(),
        initialState,
        composeEnhancers(...enhancers)
    );

    // // Extensions
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {}; // Reducer Rregistry
    store.injectedSagas = {}; // Saga registry

    return store;
}
