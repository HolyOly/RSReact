import React, { useState } from 'react';
import { Card } from '../card/card';
import ContactImg from '../../assets/img/contacts.png';
import './contacts.css';
import { cardsFieldsInitial, formStateInitial, warningsInitial } from '../../data/initial_data';
import { getShortFileName, isValidDate, isValidFile, isValidName } from '../../utils/validation';
import { Modal } from '../modal/modal';

export function Contacts(props: IFormState) {
  const [stateForm, setStateForm] = useState(formStateInitial);
  const [stateFields, setFields] = useState(cardsFieldsInitial);
  const [stateWarn, setWarn] = useState(warningsInitial);
  const [cards, setCardStore] = useState([{ ...cardsFieldsInitial, fixedFilePath: '' }]);
  const fieldsRefs: IFormFieldsRef | undefined = {
    inputBirthday: React.createRef(),
    inputName: React.createRef(),
    inputFile: React.createRef(),
    inputCountry: React.createRef(),
    inputMale: React.createRef(),
    inputNotification: React.createRef(),
    inputFemale: React.createRef(),
  };
  const formRef: React.RefObject<HTMLFormElement> = React.createRef();

  const getData = () => {
    return {
      inputName: fieldsRefs.inputName?.current?.value.trim(),
      inputBirthday: fieldsRefs.inputBirthday?.current?.value,
      inputCountry: fieldsRefs.inputCountry?.current?.value,
      inputMale: fieldsRefs.inputMale?.current?.checked,
      inputFemale: fieldsRefs.inputFemale?.current?.checked,
      inputNotification: fieldsRefs.inputNotification?.current?.checked,
      inputFile: fieldsRefs.inputFile?.current?.value,
      fileName: getShortFileName((fieldsRefs.inputFile?.current?.files as FileList)[0].name),
      fixedFilePath: handleFixFilePath(fieldsRefs.inputFile?.current?.files),
    };
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log('data', getData());

    if (!validation(getData())) {
      console.log('invalid');
      setStateForm({ ...stateForm, isValid: false });
      return;
    }

    setFields(getData());
    setCardStore([
      { ...getData(), fixedFilePath: handleFixFilePath(fieldsRefs.inputFile?.current?.files) },
    ]);
    setStateForm({
      ...stateForm,
      isValid: true,
    });

    console.log('cards', cards);

    console.log('state', stateForm);

    successSubmission();
  };

  const validation = (data: IFormFields) => {
    setWarn({
      inputBirthday: isValidDate(data.inputBirthday),
      inputName: isValidName(data.inputName),
      inputFile: isValidFile(data.fixedFilePath, data.inputFile),
    });

    if (
      isValidName(data.inputName) ||
      isValidDate(data.inputBirthday) ||
      isValidFile(data.fixedFilePath, data.inputFile)
    ) {
      return false;
    }

    setWarn({
      ...warningsInitial,
    });
    return true;
  };

  const handleFixFilePath = (files: FileList | null | undefined) => {
    if (files) {
      try {
        const file = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          return e.target?.result;
        };
      } catch (error) {
        // TODO
      }
    }
    return '';
  };

  const successSubmission = () => {
    setStateForm({
      ...stateForm,
      submitStatus: 'success',
    });
    setTimeout(
      () =>
        setStateForm({
          ...stateForm,
          submitStatus: 'pending',
        }),
      2000
    );
    formRef?.current?.reset();
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
            <form className="form" ref={formRef} /* onChange={handleChangeEvent} */>
              <label className="form-label">
                Name:
                <input
                  type="text"
                  data-testid="name-input"
                  name="name"
                  ref={fieldsRefs.inputName}
                />
                {stateWarn.inputName && (
                  <span className="warning-message">{stateWarn.inputName}</span>
                )}
              </label>
              <label className="form-label">
                Birthday:
                <input
                  type="date"
                  data-testid="date-input"
                  placeholder="yyyy-mm-dd"
                  name="birthday"
                  ref={fieldsRefs.inputBirthday}
                />
                {stateWarn.inputBirthday && (
                  <span className="warning-message">{stateWarn.inputBirthday}</span>
                )}
              </label>
              <label className="form-label">
                Select country:
                <select
                  name="country"
                  data-testid="select-element"
                  defaultValue="Turkey"
                  ref={fieldsRefs.inputCountry}
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
                </select>
              </label>
              <div>
                Gender:
                <label className="form-label">
                  <input
                    type="radio"
                    data-testid="male-input"
                    name="gender"
                    value="Male"
                    ref={fieldsRefs.inputMale}
                    defaultChecked
                  />
                  Male
                </label>
                <label className="form-label">
                  <input
                    type="radio"
                    data-testid="female-input"
                    name="gender"
                    value="Female"
                    ref={fieldsRefs.inputFemale}
                  />
                  Female
                </label>
              </div>
              <label className="form-label">
                Choose profile picture
                <input
                  type="file"
                  name="file"
                  ref={fieldsRefs.inputFile}
                  // onChange={handleFixFilePath}
                  accept="image/jpeg, image/png, image/jpg, image/*"
                />
                <button
                  type="button"
                  className="upload-btn"
                  onClick={() => fieldsRefs.inputFile?.current?.click()}
                >
                  Select file
                </button>
                {stateFields.fileName ? (
                  <div className="file-name" data-testid="selectedInfo">
                    selected:
                    <br />
                    {stateFields.fileName}
                  </div>
                ) : (
                  ''
                )}
                {stateWarn.inputFile && !stateFields.fileName && (
                  <span className="warning-message">{stateWarn.inputFile}</span>
                )}
              </label>
              <label className="form-label checkbox-container">
                <input
                  type="checkbox"
                  data-testid="checkbox-input"
                  name="notification"
                  className="form-input_checkbox"
                  ref={fieldsRefs.inputNotification}
                />
                <span className="notification-rule-text">
                  I want to receive notifications about promo and sales
                </span>
              </label>
              <button
                type="submit"
                className="submit-btn"
                data-testid="submit-btn-test"
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="form-cards">
          {cards.map((card, index) => (
            <Card cardData={card} key={index} />
          ))}
        </div>
      </div>
      {stateForm.submitStatus === 'success' && (
        <Modal mode="success" text="Your data has been successfully saved" />
      )}
    </div>
  );
}
