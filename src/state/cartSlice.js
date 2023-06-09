import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload.item;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.count += 1;
            } else {
                state.items.push(newItem);
            }
            // state.items = [...state.items, action.payload.item];
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);

        },
        increaseCount: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item.count += 1;
                }
                return item;
            });
        },
        decreaseCount: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    if(item.count > 1) {
                        item.count -= 1;
                    }
                }
                return item;
            });
        },
    }
})
export const {
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
} = cartSlice.actions;
export default cartSlice.reducer;