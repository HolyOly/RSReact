export const warningsInitial = {
  inputBirthday: '',
  inputName: '',
  inputFile: '',
};

export const formStateInitial: IFormState = {
  fields: {
    inputBirthday: '',
    inputName: '',
    inputFile: '',
    inputCountry: '',
    inputMale: null,
    inputFemale: null,
    inputNotification: null,
  },
  fixedFilePath: null,
  cardsStore: [],
  isValid: false,
  isDisabledSubmitButton: false,
  warnings: warningsInitial,
  submitStatus: 'pending',
  fileName: '',
};
