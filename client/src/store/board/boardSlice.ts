import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Board {
  id: number;
  title: string;
  createdAt: string;
  updateAt: string;
  column: {
    id: number;
    title: string;
    createdAt: string;
    updateAt: string;
    tasks?: {
      id: number;
      title: string;
      description: string;
      priority: string;
      dueDate: string;
      createdAt: string;
      updateAt: string;
    }[];
  }[];
}

interface IBoardData {
  allData: Board[];
  boardItemData: Board;
  isError: boolean;
}

const initialState: IBoardData = {
  allData: [],
  boardItemData: {} as Board,
  isError: false,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setAllBoardData: (state, action: PayloadAction<Board[]>) => {
      state.allData = action.payload;
    },
    setBoardItemData: (state, action: PayloadAction<Board>) => {
      state.boardItemData = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
  },
});

export const { setAllBoardData, setBoardItemData, setError } = boardSlice.actions;

export default boardSlice.reducer;
