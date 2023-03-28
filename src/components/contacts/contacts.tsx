import React from 'react';
import { Card } from '../card/card';
import ContactImg from '../../assets/img/contacts.png';
import './contacts.css';
import { formStateInitial, warningsInitial } from '../../data/initial_data';
import { getShortFileName, isValidDate, isValidFile, isValidName } from '../../utils/validation';
import { Modal } from '../modal/modal';

export class Contacts extends React.Component<IFormState, IFormState> {
  state: IFormState;
  fieldsRefs: IFormFieldsRef;
  formRef: React.RefObject<HTMLFormElement> | undefined;

  constructor(props: IFormState) {
    super(props);
    this.fieldsRefs = {
      inputBirthday: React.createRef(),
      inputName: React.createRef(),
      inputFile: React.createRef(),
      inputCountry: React.createRef(),
      inputMale: React.createRef(),
      inputNotification: React.createRef(),
      inputFemale: React.createRef(),
    };
    this.state = formStateInitial;
    this.formRef = React.createRef();
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.handleFixFilePath = this.handleFixFilePath.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleChangeEvent() {
    this.setState({ isDisabledSubmitButton: false });
  }

  handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    const data = {
      inputName: this.fieldsRefs.inputName?.current?.value.trim(),
      inputBirthday: this.fieldsRefs.inputBirthday?.current?.value,
      inputCountry: this.fieldsRefs.inputCountry?.current?.value,
      inputMale: this.fieldsRefs.inputMale?.current?.checked,
      inputFemale: this.fieldsRefs.inputFemale?.current?.checked,
      inputNotification: this.fieldsRefs.inputNotification?.current?.checked,
      inputFile: this.fieldsRefs.inputFile?.current?.value,
    };

    if (!this.validation(data)) {
      this.setState({ isValid: false, isDisabledSubmitButton: true });
      return;
    }

    this.setState({
      fields: data,
      fixedFilePath: this.state.fixedFilePath,
      cardsStore: [...this.state.cardsStore, { ...data, fixedFilePath: this.state.fixedFilePath }],
      isValid: true,
      isDisabledSubmitButton: false,
    });

    this.successSubmission();
  }

  validation(data: IFormFields) {
    this.setState({
      warnings: {
        inputBirthday: isValidDate(data.inputBirthday),
        inputName: isValidName(data.inputName),
        inputFile: isValidFile(this.state.fixedFilePath, data.inputFile),
      },
    });

    if (
      isValidName(data.inputName) ||
      isValidDate(data.inputBirthday) ||
      isValidFile(this.state.fixedFilePath, data.inputFile)
    ) {
      return false;
    }

    this.setState({
      warnings: { ...warningsInitial },
    });
    return true;
  }

  handleFixFilePath(e: { target: { files: FileList | null } }) {
    if (e.target.files) {
      try {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          this.setState({
            fixedFilePath: e.target?.result,
            fileName: getShortFileName(file.name),
          });
        };
      } catch (error) {
        this.setState({
          fixedFilePath: null,
          fileName: '',
        });
      }
    }
  }

  successSubmission() {
    this.setState({
      submitStatus: 'success',
      fileName: '',
    });
    setTimeout(
      () =>
        this.setState({
          submitStatus: 'pending',
        }),
      2000
    );
    this.formRef?.current?.reset();
  }

  render() {
    return (
      <div className="contacts-wrapper">
        <div className="content-wrapper">
          <h2 className="contacts-title">Contact us</h2>
          <div className="contacts-layout">
            <div className="contacts-img">
              <img src={ContactImg} alt="Contacts" className="contacts-img" />
            </div>
            <div className="contacts-form">
              <form className="form" ref={this.formRef} onChange={this.handleChangeEvent}>
                <label className="form-label">
                  Name:
                  <input
                    type="text"
                    data-testid="name-input"
                    name="name"
                    ref={this.fieldsRefs.inputName}
                  />
                  {this.state.warnings.inputName && (
                    <span className="warning-message">{this.state.warnings.inputName}</span>
                  )}
                </label>
                <label className="form-label">
                  Birthday:
                  <input
                    type="date"
                    data-testid="date-input"
                    placeholder="yyyy-mm-dd"
                    name="birthday"
                    ref={this.fieldsRefs.inputBirthday}
                  />
                  {this.state.warnings.inputBirthday && (
                    <span className="warning-message">{this.state.warnings.inputBirthday}</span>
                  )}
                </label>
                <label className="form-label">
                  Select country:
                  <select
                    name="country"
                    data-testid="select-element"
                    defaultValue="Turkey"
                    ref={this.fieldsRefs.inputCountry}
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
                      ref={this.fieldsRefs.inputMale}
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
                      ref={this.fieldsRefs.inputFemale}
                    />
                    Female
                  </label>
                </div>
                <label className="form-label">
                  Choose profile picture
                  <input
                    type="file"
                    name="file"
                    ref={this.fieldsRefs.inputFile}
                    onChange={this.handleFixFilePath}
                    accept="image/jpeg, image/png, image/jpg, image/*"
                  />
                  <button
                    type="button"
                    className="upload-btn"
                    onClick={() => this.fieldsRefs.inputFile?.current?.click()}
                  >
                    Select file
                  </button>
                  {this.state.fileName ? (
                    <div className="file-name" data-testid="selectedInfo">
                      selected:
                      <br />
                      {this.state.fileName}
                    </div>
                  ) : (
                    ''
                  )}
                  {this.state.warnings.inputFile && !this.state.fileName && (
                    <span className="warning-message">{this.state.warnings.inputFile}</span>
                  )}
                </label>
                <label className="form-label checkbox-container">
                  <input
                    type="checkbox"
                    data-testid="checkbox-input"
                    name="notification"
                    className="form-input_checkbox"
                    ref={this.fieldsRefs.inputNotification}
                  />
                  <span className="notification-rule-text">
                    I want to receive notifications about promo and sales
                  </span>
                </label>
                <button
                  type="submit"
                  className="submit-btn"
                  data-testid="submit-btn-test"
                  onClick={(e) => this.handleSubmit(e)}
                  disabled={this.state.isDisabledSubmitButton ? true : false}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="form-cards">
            {this.state.cardsStore.map((card, index) => (
              <Card cardData={card} key={index} />
            ))}
          </div>
        </div>
        {this.state.submitStatus === 'success' && (
          <Modal mode="success" text="Your data has been successfully saved" />
        )}
      </div>
    );
  }
}
