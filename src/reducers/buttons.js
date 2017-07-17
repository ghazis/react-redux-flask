import { InitialButtonsState, swStateOn, swStateOff } from './states';

export function buttonToggle(state = InitialButtonsState, action) {
    switch (action.type) {
        case 'BUTTON_TOGGLE_ON_BUTTON_1':
            return {
                ...state,
                    button1:swStateOn
            }
        case 'BUTTON_TOGGLE_OFF_BUTTON_1':
            return {
                ...state,
                    button1: swStateOff
            }

        default:
            return state;

    }        
}