import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../card/card';
import ContactImg from '../../assets/img/contacts.png';
import { cardsFieldsInitial } from '../../data/initial_data';

import { Modal } from '../modal/modal';
import { handleFixFilePath } from '../../utils/form';
import { defaultCountry, successMode, successText } from './constants';
import './contacts.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { hasNumber, isFutureDate } from '../../utils/validation';

const schema = yup
  .object({
    name: yup
      .string()
      .required()
      .min(3)
      .max(30)
      .test('is digit', "name mustn't contain numbers", (value) => {
        return hasNumber(value) ? false : true;
      }),
    birthday: yup
      .string()
      .required()
      .test('is future date', 'birthday cannot be in the future', (value) => {
        return isFutureDate(value) ? false : true;
      }),
    country: yup
      .string()
      .required()
      .test('is country', 'choose the country', (value) => {
        return value === defaultCountry ? false : true;
      }),
    gender: yup.string().required(),
    terms: yup.string().required(),
    file: yup
      .mixed<FileList>()
      .test('is file', 'file not selected', (value: FileList | null | undefined) => {
        return value && value.length > 0 ? true : false;
      }),
  })
  .required();

export type FormData = yup.InferType<typeof schema>;
export interface ICardStore extends FormData, IPath {}

export function Contacts(props: IFormState) {
  const [form, setStateForm] = useState(props);
  const [cards, setCardStore] = useState<ICardStore[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: cardsFieldsInitial,
  });

  const fileInput = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register('file');

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ ...cardsFieldsInitial, file: undefined });
    }
  }, [formState, isSubmitSuccessful, reset, resetField]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    handleFixFilePath(data.file).then((path: string | null | undefined) => {
      setCardStore([...cards, { ...data, fixedFilePath: path as string }]);
      successSubmission();
    });
  };

  const successSubmission = () => {
    setStateForm({
      ...form,
      submitStatus: 'success',
    });
    setTimeout(() => setStateForm({ ...props }), 2000);
    resetField('file');
  };

  return (
    <div className="contacts-wrapper">
      <div className="content-wrapper">
        <h2 className="contacts-title">Contact us</h2>
        <div className="contacts-layout">
          <div className="contacts-img">
            <img src={ContactImg} alt="Contacts" className="contacts-img" />
          </div>
          <div className="contacts-form">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <label className="form-label">
                Name:
                <input type="text" data-testid="name-input" {...register('name')} />
                {errors && <span className="warning-message">{errors.name?.message}</span>}
              </label>
              <label className="form-label">
                Birthday:
                <input type="date" data-testid="date-input" {...register('birthday')} />
                {errors && <span className="warning-message">{errors.birthday?.message}</span>}
              </label>
              <label className="form-label">
                Select country:
                <select
                  data-testid="select-element"
                  defaultValue={defaultCountry}
                  {...register('country')}
                >
                  <option value="Turkey" data-testid="select-option">
                    Turkey
                  </option>
                  <option value="Montenegro" data-testid="select-option">
                    Montenegro
                  </option>
                  <option value="New Zealand" data-testid="select-option">
                    New Zealand
                  </option>
                  <option value="Italy" data-testid="select-option">
                    Italy
                  </option>
                  <option value="Slovenia" data-testid="select-option">
                    Slovenia
                  </option>
                  <option value={defaultCountry} data-testid="select-option">
                    {defaultCountry}
                  </option>
                </select>
                {errors && <span className="warning-message">{errors.country?.message}</span>}
              </label>
              <div>
                Gender:
                <label className="form-label">
                  <input
                    type="radio"
                    data-testid="male-input"
                    value="Male"
                    {...register('gender')}
                  />
                  Male
                </label>
                <label className="form-label">
                  <input
                    type="radio"
                    data-testid="female-input"
                    value="Female"
                    {...register('gender')}
                  />
                  Female
                </label>
                {errors && <span className="warning-message">{errors.gender?.message}</span>}
              </div>
              <label className="form-label">
                Choose profile picture
                <input
                  type="file"
                  {...rest}
                  ref={(e) => {
                    ref(e);
                    fileInput.current = e;
                  }}
                  name="file"
                  accept="image/jpeg, image/png, image/jpg, image/*"
                />
                <button
                  type="button"
                  className="upload-btn"
                  onClick={() => fileInput.current?.click()}
                >
                  Select file
                </button>
                {errors && <span className="warning-message">{errors.file?.message}</span>}
              </label>
              <label className="form-label checkbox-container">
                <input
                  type="checkbox"
                  data-testid="checkbox-input"
                  className="form-input_checkbox"
                  value="accepted"
                  {...register('terms')}
                />
                <span className="notification-rule-text">I accept terms of use</span>
                {errors && <span className="warning-message terms">{errors.terms?.message}</span>}
              </label>
              <input type="submit" className="submit-btn" value="Submit" />
            </form>
          </div>
        </div>
        <div className="form-cards">
          {cards.map((card, index) => (
            <Card cardData={card} key={index} />
          ))}
        </div>
      </div>
      {form.submitStatus === successMode && (
        <Modal mode={successMode} text={successText} isCloseBtn={false} />
      )}
    </div>
  );
}
