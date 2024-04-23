import { configureStore } from '@reduxjs/toolkit';
import transfers from './slices/transfers';

export const redux = configureStore({
  reducer: {
    transfers,
  },
});
