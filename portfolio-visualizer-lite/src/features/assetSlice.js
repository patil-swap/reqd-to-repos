import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    assets: [],
}

const assetSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        addAsset: (state, action) => {
        state.assets.push(action.payload);
        },
        deleteAsset: (state, action) => {
          state.assets.splice(action.payload, 1);
        },
        updateAsset: (state, action) => {
          const { index, updatedAsset } = action.payload;
          if (index >= 0 && index < state.assets.length) {
            state.assets[index] = updatedAsset;
          }
        }
    },
});

export const { addAsset, deleteAsset, updateAsset } = assetSlice.actions;
export default assetSlice.reducer;