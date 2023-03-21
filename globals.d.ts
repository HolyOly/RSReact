declare interface ICard {
  src: string;
  alt: string;
  title: string | undefined;
  description: string | undefined;
  like: boolean;
}

declare interface IIcon {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  color?: string;
}

declare interface IFormFields {
  inputName: React.RefObject<HTMLInputElement> | undefined;
  inputBirthday: React.RefObject<HTMLInputElement> | undefined;
  inputFile: React.RefObject<HTMLInputElement> | undefined;
  inputCountry: React.RefObject<HTMLSelectElement> | undefined;
  inputMale: React.RefObject<HTMLInputElement> | undefined;
  inputFemale: React.RefObject<HTMLInputElement> | undefined;
  inputNotification: React.RefObject<HTMLInputElement> | undefined;
}
