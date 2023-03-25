import React from 'react';
import { Card } from '../card/card';
import ContactImg from '../../assets/img/contacts.png';
import './contacts.css';
import { formStateInitial, warningsInitial } from '../../data/initial_data';
import { isValidDate, isValidFile, isValidName } from '../../utils/validation';

export class Contacts extends React.Component<Record<string, never>, IFormState> {
  state: IFormState;
  fieldsRefs: IFormFieldsRef;

  constructor(props: Record<string, never>) {
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
    this.handleFixFilePath = this.handleFixFilePath.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleSubmit(e: React.FormEvent<HTMLButtonElement> | React.ChangeEvent) {
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
      this.setState({ isValid: false });
      return;
    }

    this.setState({ isValid: true });

    this.setState({
      fields: data,
      fixedFilePath: this.state.fixedFilePath,
    });
    this.state.cardsStore.push({ ...data, fixedFilePath: this.state.fixedFilePath });
  }

  validation(data: IFormFields) {
    this.setState({
      warnings: {
        inputBirthday: `${isValidDate(data.inputBirthday)}`,
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
        const files = e.target.files;
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
          if (e.target) {
            this.setState({
              fixedFilePath: e.target.result,
              warnings: {
                ...this.state.warnings,
                inputFile: isValidFile(e.target.result),
              },
            });
          }
        };
      } catch (error) {
        console.warn('file fath failed');
        this.setState({
          fixedFilePath: null,
        });
      }
    }
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
              <form className="form">
                <label className="form-label">
                  Name:
                  <input
                    className="form-input_text"
                    data-testid="input-name"
                    type="text"
                    ref={this.fieldsRefs.inputName}
                    required
                  />
                  {this.state.warnings.inputName && (
                    <span className="warning-message">{this.state.warnings.inputName}</span>
                  )}
                </label>
                <label className="form-label">
                  Birthday:
                  <input
                    className="form-input_date"
                    type="date"
                    ref={this.fieldsRefs.inputBirthday}
                    required
                  />
                  {this.state.warnings.inputBirthday && (
                    <span className="warning-message">{this.state.warnings.inputBirthday}</span>
                  )}
                </label>
                <label className="form-label">
                  Select country:
                  <select
                    className="form-input_list"
                    name="countries"
                    ref={this.fieldsRefs.inputCountry}
                  >
                    <option value="Turkey">Turkey</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Italy">Italy</option>
                    <option value="Slovenia">Slovenia</option>
                  </select>
                </label>
                <div>
                  Gender:
                  <label className="form-label">
                    <input
                      className="form-input_radio"
                      type="radio"
                      name="gender"
                      value="Male"
                      ref={this.fieldsRefs.inputMale}
                      defaultChecked
                    />
                    Male
                  </label>
                  <label className="form-label">
                    <input
                      className="form-input_radio"
                      type="radio"
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
                    ref={this.fieldsRefs.inputFile}
                    onChange={this.handleFixFilePath}
                    name=""
                    id="inputFile"
                    accept="image/jpeg, image/png, image/jpg, image/*"
                    required
                  />
                  <button
                    type="button"
                    className="upload-btn"
                    onClick={() => this.fieldsRefs.inputFile?.current?.click()}
                  >
                    Select file
                  </button>
                  {this.state.warnings.inputFile && (
                    <span className="warning-message">{this.state.warnings.inputFile}</span>
                  )}
                </label>
                <label className="form-label checkbox-container">
                  <input
                    className="form-input_checkbox"
                    type="checkbox"
                    name=""
                    id=""
                    ref={this.fieldsRefs.inputNotification}
                  />
                  <span className="notification-rule-text">
                    I want to receive notifications about promo and sales
                  </span>
                </label>
                <button type="submit" className="submit-btn" onClick={(e) => this.handleSubmit(e)}>
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
      </div>
    );
  }
}
