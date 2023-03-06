import ReactDOM from 'react-dom/client';
import 'Assets/global.scss';
import { Provider } from "react-redux";
import { saveState } from "Infrastructure/Storage/Persist.Storage";
import { throttle } from "lodash";
import { store } from "Infrastructure/Store";

import reportWebVitals from './reportWebVitals';
import Bootstrap from 'Infrastructure/Bootstrap';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.subscribe(
  throttle(() => {
    saveState({
      application: store.getState().application,
    });
  }, 1000)
);
root.render(
  <Provider store={store}>
    <Bootstrap />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
