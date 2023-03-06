export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("rdtc");
        if (serializedState === null) {
            return true;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return false;
    }
};

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("rdtc", serializedState);
        return true;
    } catch (e) {
        return false;
    }
};
