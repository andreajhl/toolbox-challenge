import { createSlice } from '@reduxjs/toolkit';
import { getFileByName, getFileList, getFileNameList } from './thunk';

export const fileSlice = createSlice({
  name: 'files',
  initialState: {
    files: [],
    fileNameList: [],
    fileItem: null,
    isLoading: false,
    isError: false,
  },
  reducers: {
    clearFileItem: (state) => {
      state.isLoading = false;
      state.fileItem = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFileNameList.fulfilled, (state, action) => {
        state.fileNameList = action.payload;
      })
      .addCase(getFileList.fulfilled, (state, action) => {
        state.files = action.payload;
      })
      .addCase(getFileByName.fulfilled, (state, action) => {
        state.fileItem = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/succeeded'),
        (state) => {
          state.isLoading = false;
        },
      );
  },
});

export const { clearFileItem } = fileSlice.actions;
export default fileSlice.reducer;
