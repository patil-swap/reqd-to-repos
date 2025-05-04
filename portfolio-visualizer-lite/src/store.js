import { configureStore } from '@reduxjs/toolkit';
import assetReducer from './features/assetSlice';

const store = configureStore({
  reducer: {
    assets: assetReducer,
  },
});

export default store;