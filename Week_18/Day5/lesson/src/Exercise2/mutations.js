const state = { value: 1 };

function badUpdate() {
    state.value = 2;
    return state;
}

function goodUpdate() {
    const newState = { ...state, value: 2 };
    return newState;
}

