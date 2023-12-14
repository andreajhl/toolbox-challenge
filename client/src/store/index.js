import { configureStore } from '@reduxjs/toolkit';
import { fileSlice } from './files/fileSlice';

const store = configureStore({
  reducer: {
    file: fileSlice.reducer
  }
});

export { store };
