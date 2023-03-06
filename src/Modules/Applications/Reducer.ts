/*
 *
 * AuthProvider reducer
 *
 */
import produce, { setAutoFreeze } from "immer";

// const device = / (iPhone | iPad | iPod | iOS | Android) / i.test(navigator.userAgent)
//     ? "MOBILE"
//     : "DESKTOP";
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const collapsed = device !== "DESKTOP";

export const initialState: any = {
};

setAutoFreeze(false);
/* eslint-disable default-case, no-param-reassign */
const ApplicationReducer = produce((draft, action) => {
    switch (action.type) {
        default:
            break;
    }
}, initialState);
export default ApplicationReducer;
