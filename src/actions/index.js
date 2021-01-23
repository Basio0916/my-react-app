export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () =>({
    type: INCREMENT
})

export const decrement = () =>({
    type: DECREMENT
})

// export function increment(){
//     return {
//         type: 'INCREMENT'
//     }
// }

// export function decrement(){
//     return {
//         type: 'DECREMENT'
//     }
// }