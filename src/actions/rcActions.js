export function buttonToggleOn(name) {
    return {
        type: 'BUTTON_TOGGLE_ON_' + name
    };
}

export function buttonToggleOff(name) {
    return {
        type: 'BUTTON_TOGGLE_OFF_' + name
    };
}


export function sendCmd(url) {
    return (dispatch, getState) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
    };
}