// import { createState } from 'redux';
const { createStore } = require('redux');

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

store.dispatch({type: 'INCREMENT'}); // 1
store.dispatch({type: 'INCREMENT'}); // 2
store.dispatch({type: 'DECREMENT'}); // 1

// const xxx = () => {
//     this
//     console.log('xxx');
//     return 1;
// };

// const x2 = () => 1;

// const x3 = function() {
//     jthis
// }