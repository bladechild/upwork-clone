export const talentDataReducer = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case "USER_DATA":
            return action.payload;
        default:
            return state;
    }
};