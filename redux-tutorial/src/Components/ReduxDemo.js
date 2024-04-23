// import React from 'react';
import { createStore } from 'redux';

export default function ReduxDemo(){

const reducer =(state = 0, action)=>{
    if(action.type === 'INCREMENT'){
        return state + 1;
    }else if(action.type === 'DECREMENT'){
        return state - 1;
    }
    return state;
}

const store = createStore(reducer);

store.subscribe(()=>{
    console.log('currentState', store.getState());
});

store.dispatch({
    type:'INCREMENT'
});

store.dispatch({
    type:'DECREMENT'
});

}

// export default store;