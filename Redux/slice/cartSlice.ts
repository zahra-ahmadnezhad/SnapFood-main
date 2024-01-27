import {createSlice} from "@reduxjs/toolkit";

const initialState: any[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItems: (state, action) => {
            const {payload} = action
            const index = state.findIndex((item) => item.name === payload.name)
            if (index === -1) {
                state.push({...payload, count: 1})
            } else {
                state[index].count = state[index].count + 1
            }
        },
        decreaseItem: (state, action) => {
            const {payload} = action
            const index = state.findIndex((item) => item.name === payload)
            state[index].count = state[index].count - 1
        },
        increaseItem: (state, action) => {
            const {payload} = action
            const index = state.findIndex((item) => item.name === payload)
            state[index].count = state[index].count + 1
        },
        deleteItem: (state, action) => {
            const {payload} = action
            const index = state.findIndex((item) => item.name === payload)
            state.splice(index, 1)
        },
        deleteAll: (state, action) => {
            state.splice(0, state.length)
        },
    }
})

export const {deleteAll, deleteItem, decreaseItem, increaseItem, addItems} = cartSlice.actions

export default cartSlice.reducer