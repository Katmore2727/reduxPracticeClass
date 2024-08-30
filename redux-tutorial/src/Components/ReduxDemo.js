// import { createStore } from 'redux';

// export default function ReduxDemo(){

// const reducer =(state = 0, action)=>{
//     if(action.type === 'INCREMENT'){
//         return state + 1;
//     }else if(action.type === 'DECREMENT'){
//         return state - 1;
//     }
//     return state;
// }

// const store = createStore(reducer);

// store.subscribe(()=>{
//     console.log('currentState', store.getState());
// });

// store.dispatch({
//     type:'INCREMENT'
// });

// store.dispatch({
//     type:'DECREMENT'
// });

// }


import React, { useEffect, useState } from 'react';
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1;
    } else if (action.type === 'DECREMENT') {
        return state - 1;
    }
    return state;
};

const store = createStore(reducer); // Move store creation outside

export default function ReduxDemo() {
    const [currentState, setCurrentState] = useState(store.getState());

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setCurrentState(store.getState());
        });

        // Dispatch actions
        store.dispatch({ type: 'INCREMENT' });
        store.dispatch({ type: 'DECREMENT' });

        return () => unsubscribe();
    }, []); // No dependencies needed since store is outside

    return (
        <div>
            <h1>Redux State: {currentState}</h1>
        </div>
    );
}
