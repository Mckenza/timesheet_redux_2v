import { CHANGE_ACTION, CHANGE_HOURS, CHANGE_TYPE_WORK, LOAD_ALL_DATA } from "../types";

const initState = {
    infoEmpl: {},
    dataMonth: {},
    times: {},
    manage: {
        typeWork: 'normal',
        action: 'init',
    },
};

export default (state = initState, action) => {
    switch (action.type) {

        case LOAD_ALL_DATA:
            return { ...state, ...action.payload };
        case CHANGE_HOURS:
            return { ...state, times: action.payload };
        case CHANGE_TYPE_WORK:
            return { ...state, manage: { ...state.manage, typeWork: action.payload } };
        case CHANGE_ACTION:
            return { ...state, manage: { ...state.manage, action: action.payload } };

        default:
            return state;
    }
}