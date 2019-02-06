const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

// Dispatch the "INCREMENT5" action every time the +5 button is pressed
const increment5Button = document.getElementById('increment5');
increment5Button.addEventListener('click', e => dispatch({ type: "INCREMENT5" }));

// Dispatch the "DECREMENT" action every time the -1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

// Dispatch the "color" action every time a color is selected
const colorMenu = document.getElementById('color');
colorMenu.addEventListener('change', e => dispatch({ type: "COLOR" }));

// Dispatch the "anyValue" action every time a value is submitted
const customValue = document.getElementById('customValue');
const setCustomValue = document.getElementById('setCustomValue');
setCustomValue.addEventListener('click', e => dispatch({ type: "SET_CUSTOM_VALUE" }));