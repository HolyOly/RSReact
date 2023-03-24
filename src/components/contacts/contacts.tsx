import React from 'react';
import ContactImg from '../../assets/img/contacts.png';
import './contacts.css';

interface IFormState {
  fields: IFormFields;
  fixedFilePath: string | ArrayBuffer | null;
}

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
    this.state = {
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
    };
    this.handleFixFilePath = this.handleFixFilePath.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.setState({
      fields: {
        inputName: this.fieldsRefs.inputName?.current?.value,
        inputBirthday: this.fieldsRefs.inputBirthday?.current?.value,
        inputCountry: this.fieldsRefs.inputCountry?.current?.value,
        inputMale: this.fieldsRefs.inputMale?.current?.checked,
        inputFemale: this.fieldsRefs.inputFemale?.current?.checked,
        inputNotification: this.fieldsRefs.inputNotification?.current?.checked,
        inputFile: this.fieldsRefs.inputFile?.current?.name,
      },
      fixedFilePath: this.state.fixedFilePath,
    });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleFixFilePath(e: { target: { files: FileList | null } }) {
    if (e.target.files) {
      const files = e.target.files;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        if (e.target) {
          this.setState({ fixedFilePath: e.target.result });
        } else {
          this.setState({ fixedFilePath: null });
        }
      };
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
              <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                <label className="form-label">
                  Name:
                  <input
                    className="form-input_text"
                    data-testid="input-name"
                    type="text"
                    ref={this.fieldsRefs.inputName}
                    required
                  />
                </label>
                <label className="form-label">
                  Birthday:
                  <input
                    className="form-input_date"
                    type="date"
                    ref={this.fieldsRefs.inputBirthday}
                    required
                  />
                </label>
                <label className="form-label">
                  Select country:
                  <select
                    className="form-input_list"
                    name="countries"
                    id=""
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
                </label>
                <label className="form-label">
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
                <input type="submit" value="Submit" className="submit-btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
