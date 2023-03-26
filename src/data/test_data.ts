export const cardTestDataForm: IFormCardStore = {
  inputName: 'Mary Ann',
  inputBirthday: '1998-10-29',
  inputFile: 'photo.png',
  inputCountry: 'Italy',
  inputMale: false,
  inputFemale: true,
  inputNotification: true,
  fixedFilePath: 'somepath',
};

export const testFormState: IFormState = {
  cardsStore: [
    {
      inputName: 'Sfjhzdg',
      inputBirthday: '2023-03-07',
      inputCountry: 'Turkey',
      inputMale: true,
      inputFemale: false,
      inputNotification: false,
      inputFile: 'C:\\fakepath\\photo_2023-01-28 01.42.24.jpeg',
      fixedFilePath: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAA',
    },
  ],
  fields: {
    inputName: 'Sfjhzdg',
    inputBirthday: '2023-03-07',
    inputCountry: 'Turkey',
    inputFemale: false,
    inputMale: true,
    inputNotification: false,
    inputFile: 'C:\\fakepath\\photo_2023-01-28 01.42.24.jpeg',
  },
  fixedFilePath: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAA',
  fileName: '',
  isDisabledSubmitButton: false,
  isValid: true,
  submitStatus: 'success',
  warnings: { inputBirthday: '', inputName: '', inputFile: '' },
};
