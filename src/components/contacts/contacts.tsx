/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ContactImg from '../../assets/img/contacts.png';
import './contacts.css';

export class Contacts extends React.Component {
  fields: IFormFields;
  photoPath: string | ArrayBuffer | null;

  constructor(props: any) {
    super(props);
    this.fields = {
      inputBirthday: React.createRef(),
      inputName: React.createRef(),
      inputFile: React.createRef(),
      inputCountry: React.createRef(),
      inputMale: React.createRef(),
      inputNotification: React.createRef(),
      inputFemale: React.createRef(),
    };
  }

  handleFixFilePath(e: { target: { files: FileList | null } }) {
    if (e.target.files) {
      const files = e.target.files;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      return (reader.onload = (e) => {
        if (e.target) {
          this.photoPath = e.target.result;
        }
      });
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
                    ref={this.fields.inputName}
                    required
                  />
                </label>
                <label className="form-label">
                  Birthday:
                  <input
                    className="form-input_date"
                    type="date"
                    ref={this.fields.inputBirthday}
                    required
                  />
                </label>
                <label className="form-label">
                  Select country:
                  <select
                    className="form-input_list"
                    name="countries"
                    id=""
                    ref={this.fields.inputCountry}
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
                      ref={this.fields.inputMale}
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
                      ref={this.fields.inputFemale}
                    />
                    Female
                  </label>
                </div>
                <label className="form-label">
                  <input
                    className="form-input_checkbox"
                    type="checkbox"
                    name=""
                    id=""
                    ref={this.fields.inputNotification}
                  />
                  I want to receive notifications about promo and sales
                </label>
                <label className="form-label">
                  Choose profile picture
                  <input
                    type="file"
                    ref={this.fields.inputFile}
                    onChange={this.handleFixFilePath}
                    name=""
                    id="inputFile"
                    accept="image/jpeg, image/png, image/jpg"
                    required
                  />
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
