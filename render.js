const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    console.assert(typeof state.value === 'number', 'uh-oh! state.value is not a number')
    console.assert(typeof state.color === 'string', 'state.color is not a valid color!')
    counterDOM.innerHTML = state.value;
    counterDOM.style.color = state.color
}