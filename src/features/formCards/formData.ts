import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ICardStore } from 'components/contacts/contacts';

export interface IFormData {
  formCards?: ICardStore[];
  curFormFields?: ICardStore;
}

const initialState: IFormData = {
  formCards: [],
  curFormFields: {
    name: '',
    birthday: '',
    file: undefined,
    country: '',
    gender: '',
    terms: '',
    fixedFilePath: '',
  },
};

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    updateFormCards: (state, action: PayloadAction<ICardStore[]>) => {
      state.formCards = [...(action.payload as ICardStore[])];
    },
    updateFormFields: (state, action: PayloadAction<ICardStore>) => {
      state.curFormFields = action.payload;
    },
  },
});

export const { updateFormCards, updateFormFields } = formDataSlice.actions;
export const selectFormData = (state: RootState) => state.formData;

export default formDataSlice.reducer;
