import { INCREMENT } from "../constants";
const initialState = 1;

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            const newState = state + 1;
            return newState;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return (state = 0);
        default:
            return state;
    }
};
export default counterReducer;