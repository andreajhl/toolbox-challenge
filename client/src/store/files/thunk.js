import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFileByNameService, getFileListService, getFileNameListService } from "../../services";

export const getFileList = createAsyncThunk(
  'files/getFileList',
  async () => await getFileListService()
);

export const getFileNameList = createAsyncThunk(
  'files/getFileNameList',
  async () => await getFileNameListService()
);

export const getFileByName = createAsyncThunk(
  'files/getFileByName',
  async (name) => await getFileByNameService(name)
);
