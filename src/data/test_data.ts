export const cardTestDataForm = {
  name: 'Mary Ann',
  birthday: '1998-10-29',
  file: null,
  country: 'Italy',
  gender: 'Male',
  terms: 'accepted',
  fixedFilePath: 'somepath',
};

export const testFormState: IFormState = {
  isValid: true,
  submitStatus: 'success',
};

export const apiCardData = {
  mode: 'info',
  description: 'Hello world my dear',
  likes: 257,
  alt_description: 'Hello world my home',
  created_at: '2009-12-03',
  urls: { small: 'https://images.app.goo.gl/REUc6MxAFLdVQCwV8' },
};

export const apiCardData1 = {
  mode: 'info',
  likes: 257,
  alt_description: 'Hello world my home',
  created_at: '2009-12-03',
  urls: { small: 'https://images.app.goo.gl/REUc6MxAFLdVQCwV8' },
  tags: [{ title: 'Caaat' }],
};

export const apiCardData2 = {
  mode: 'info',
  likes: 0,
  alt_description: 'Hello world my home',
  created_at: '2009-12-03',
  urls: { small: 'https://images.app.goo.gl/REUc6MxAFLdVQCwV8' },
  tags: [{ title: 'Caaat' }],
};

export const modalTestData: IModal = {
  mode: 'info',
  text: 'hello world',
  isCloseBtn: true,
  img: 'https://images.app.goo.gl/REUc6MxAFLdVQCwV8',
  date: '2043-20-12',
};
