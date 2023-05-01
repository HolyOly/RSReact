declare interface IProductCard {
  src: string;
  alt: string;
  title: string | undefined;
  description: string | undefined;
  like: boolean;
}

declare interface ICard {
  cardData: IShortForm;
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

declare interface IForm1 {
  inputName: string;
  inputBirthday: string;
  inputFile?: FileList | null;
  inputCountry: string;
  inputGender: string;
  inputNotification: string;
}

declare interface IShortForm extends IPath {
  name: string;
  birthday: string;
  file?: FileList | null;
  country: string;
  gender: string;
  terms: string;
}

declare interface IPath {
  fixedFilePath: string | null | undefined;
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

declare interface IFetchData {
  alt_description?: string;
  blur_hash?: string;
  color?: string;
  created_at?: string;
  current_user_collections?: [];
  description?: string;
  height?: number;
  id?: string;
  liked_by_user?: boolean;
  likes?: number;
  links?: { [key: string]: string };
  promoted_at?: null;
  sponsorship?: null;
  tags?: { [key: string]: string }[];
  topic_submissions?: Record<string, never>;
  updated_at?: string;
  urls?: { [key: string]: string };
  user?: { [key: string]: string | boolean | number | null | { [key: string]: string } };
  width?: number;
}

declare interface IFullFetchData {
  results: IFetchData[];
  total: number;
  total_pages: number;
}

declare interface IModal {
  mode?: 'success' | 'error' | 'info' | 'default';
  title?: string;
  text?: string;
  position?: 'top' | 'center' | 'bottom';
  img?: string;
  date?: string;
  isCloseBtn?: boolean;
}

declare interface IModalState extends IModal {
  status: boolean;
}

declare interface IInitModalContext {
  changeModalStatus: (status: boolean, data?: IModal) => void;
}

declare interface ISearchParams {
  curPage: number;
  query: string;
  sorting: string;
}
