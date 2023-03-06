import React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import { useStore, ReactReduxContext } from "react-redux";

import getInjectors from "Infrastructure/Utility/ReducerInjectors";

/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ key, reducer }: any) =>
    (WrappedComponent: any) => {
        class ReducerInjector extends React.Component {
            static WrappedComponent = WrappedComponent;

            // eslint-disable-next-line react/static-property-placement
            static contextType = ReactReduxContext;

            // eslint-disable-next-line react/static-property-placement
            static displayName = `withReducer(${WrappedComponent.displayName ||
                WrappedComponent.name ||
                "Component"
                })`;

            constructor(props: any, context: any) {
                super(props, context);

                getInjectors(context.store).injectReducer(key, reducer);
            }

            render() {
                // eslint-disable-next-line
                return <WrappedComponent {...this.props} />;
            }
        }

        return hoistNonReactStatics(ReducerInjector, WrappedComponent);
    };

const useInjectReducer = ({ key, reducer }: any) => {
    const store = useStore();

    React.useEffect(() => {
        getInjectors(store).injectReducer(key, reducer);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export { useInjectReducer };
