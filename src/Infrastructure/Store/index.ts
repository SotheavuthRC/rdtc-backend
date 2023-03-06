import { loadState } from "Infrastructure/Storage/Persist.Storage";
import ConfigureStore from "Infrastructure/Store/Store";

const initialState = loadState();
export const store = ConfigureStore(initialState);
