import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Contacts } from './contacts';
import { testFormState } from '../../data/test_data';
import { Modal } from '../modal/modal';
import { formStateInitial, warningsInitial } from '../../data/initial_data';
import assert from 'assert';

describe('Form', () => {
  test('the existence of input text element', () => {
    render(<Contacts {...testFormState} />);

    const inputEl = screen.getByTestId('name-input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'text');
  });

  test('the existence of input date element', () => {
    render(<Contacts {...testFormState} />);

    const inputEl = screen.getByTestId('date-input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'date');
  });

  test('the existence of select element', () => {
    render(<Contacts {...testFormState} />);

    const inputEl = screen.getByTestId('select-element');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('name', 'country');
  });

  test('the existence of input checkox and radio input elements', () => {
    render(<Contacts {...testFormState} />);

    const inputNotification = screen.getByTestId('checkbox-input');
    const inputMale = screen.getByTestId('male-input');
    const inputfemale = screen.getByTestId('female-input');

    expect(inputNotification).toBeInTheDocument();
    expect(inputMale).toBeInTheDocument();
    expect(inputfemale).toBeInTheDocument();

    expect(inputNotification).toHaveAttribute('type', 'checkbox');
    expect(inputMale).toHaveAttribute('type', 'radio');
    expect(inputfemale).toHaveAttribute('type', 'radio');
  });

  test('the existence of input file element', () => {
    render(<Contacts {...testFormState} />);

    const inputfile = screen.getByLabelText('Choose profile picture');
    expect(inputfile).toBeInTheDocument();
    expect(inputfile).toHaveAttribute('type', 'file');
  });

  test('pass valid value to test input name field', async () => {
    render(<Contacts {...testFormState} />);

    const inputEl = screen.getByTestId('name-input');
    await userEvent.type(inputEl, 'John Doe');
    const myTextAreaVal = (inputEl as HTMLInputElement).value;
    expect(myTextAreaVal.includes('John')).toBe(true);
  });

  test('pass valid value to test input date field', async () => {
    render(<Contacts {...testFormState} />);

    const inputEl = screen.getByTestId('date-input');
    await userEvent.type(inputEl, '1996-12-04');
    const myTextAreaVal = (inputEl as HTMLInputElement).value;
    expect(myTextAreaVal.includes('1996-12-04')).toBe(true);
  });

  test('pass valid value to test select field', async () => {
    render(<Contacts {...testFormState} />);
    const selectElem = screen.queryByTestId('select-element') as HTMLSelectElement;
    await userEvent.selectOptions(selectElem, 'Turkey');
    expect((screen.getByText('Turkey') as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByText('Montenegro') as HTMLOptionElement).selected).toBeFalsy();
  });

  test('test submit click', async () => {
    render(<Contacts {...testFormState} />);
    const submitBtn = screen.getByText('Submit') as HTMLButtonElement;
    fireEvent.click(submitBtn);
  });

  test('test select file click', async () => {
    render(<Contacts {...testFormState} />);
    const submitBtn = screen.getByText('Select file') as HTMLButtonElement;
    fireEvent.click(submitBtn);
  });

  test('test photo upload', async () => {
    const file = new File(['hellomyfriend'], 'myimg.png', { type: 'image/png' });
    render(<Contacts {...testFormState} />);

    const fileInput = screen.getByLabelText('Choose profile picture');
    await userEvent.upload(fileInput, file).then(() => {
      expect(screen.queryByTestId('selectedInfo')?.textContent).toContain(/selected:/i);
    });
  });

  test('test', async () => {
    render(<Contacts {...testFormState} />);
    if (testFormState.submitStatus === 'success') {
      const { container } = render(<Modal mode={'success'} text={''} />);
      expect(container.firstChild).toHaveClass('overlay');
    }
  });

  it('test formStateInitial', () => {
    assert.equal(formStateInitial.warnings.inputName, '');
    assert.equal(formStateInitial.submitStatus, 'pending');
  });

  it('test warningsInitial', () => {
    assert.equal(warningsInitial.inputName, '');
    assert.equal(warningsInitial.inputBirthday, '');
    assert.equal(warningsInitial.inputFile, '');
  });
});
