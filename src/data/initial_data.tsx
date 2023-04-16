import { defaultCountry } from '../components/contacts/constants';

export const warningsInitial: IFormWarnings = {
  inputName: '',
  inputBirthday: '',
  inputCountry: '',
  inputGender: '',
  inputNotification: '',
  inputFile: '',
};

export const cardsFieldsInitial = {
  name: '',
  birthday: '',
  file: undefined,
  country: defaultCountry,
  gender: '',
  terms: '',
};

export const formStateInitial: IFormState = {
  isValid: false,
  submitStatus: 'pending',
};
