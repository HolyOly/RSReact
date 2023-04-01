declare interface IProductCard {
  src: string;
  alt: string;
  title: string | undefined;
  description: string | undefined;
  like: boolean;
}

declare interface ICard {
  cardData: IProductCard | IFormCardStore;
}

declare interface IIcon {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  color?: string;
}

declare interface IFormFieldsRef {
  inputName: React.RefObject<HTMLInputElement> | undefined;
  inputBirthday: React.RefObject<HTMLInputElement> | undefined;
  inputFile: React.RefObject<HTMLInputElement> | undefined;
  inputCountry: React.RefObject<HTMLSelectElement> | undefined;
  inputMale: React.RefObject<HTMLInputElement> | undefined;
  inputFemale: React.RefObject<HTMLInputElement> | undefined;
  inputNotification: React.RefObject<HTMLInputElement> | undefined;
}

declare interface IFormFields {
  inputName: string | undefined;
  inputBirthday: string | undefined;
  inputFile: string | undefined;
  inputCountry: string | undefined;
  inputMale: boolean;
  inputFemale: boolean;
  inputNotification: boolean;
}

declare interface IFormCardStore extends IFormFields {
  fixedFilePath: string | null | undefined;
}

declare interface IFormWarnings {
  inputName: string;
  inputBirthday: string;
  inputCountry: string;
  inputGender: string;
  inputNotification: string;
  inputFile: string;
}

declare interface IFormState {
  isValid: boolean;
  submitStatus: 'success' | 'error' | 'pending';
}

declare type CardType = 'product' | 'form';
