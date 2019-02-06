const initialState = {
    value: 0,
    color: "black"
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1,
            color: state.color
        }
    }
    if (type === "INCREMENT5") {
        return {
            value: state.value + 5,
            color: state.color
        }
    }
    if (type === "DECREMENT") {
        return {
            value: state.value - 1,
            color: state.color
        }
    }
    if (type === "COLOR") {
        return {
            value: state.value,
            color: colorMenu.value
        }
    }
    if (type === "SET_CUSTOM_VALUE") {
        return {
            value: parseInt(customValue.value),
            color: state.color
        }
    }
    return state
}