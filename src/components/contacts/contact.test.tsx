import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Contacts } from './contacts';

describe('Form', () => {
  test('the existence of input text element', () => {
    render(<Contacts />);

    const inputEl = screen.getByTestId('name-input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'text');
  });

  test('the existence of input date element', () => {
    render(<Contacts />);

    const inputEl = screen.getByTestId('date-input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'date');
  });

  test('the existence of select element', () => {
    render(<Contacts />);

    const inputEl = screen.getByTestId('select-element');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('name', 'country');
  });

  test('the existence of input checkox and radio input elements', () => {
    render(<Contacts />);

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
    render(<Contacts />);

    const inputfile = screen.getByTestId('file-input');
    expect(inputfile).toBeInTheDocument();
    expect(inputfile).toHaveAttribute('type', 'file');
  });

  test('pass valid value to test input name field', async () => {
    render(<Contacts />);

    const inputEl = screen.getByTestId('name-input');
    await userEvent.type(inputEl, 'John Doe');
    const myTextAreaVal = (inputEl as HTMLInputElement).value;
    expect(myTextAreaVal.includes('John')).toBe(true);
  });

  test('pass valid value to test input date field', async () => {
    render(<Contacts />);

    const inputEl = screen.getByTestId('date-input');
    await userEvent.type(inputEl, '1996-12-04');
    const myTextAreaVal = (inputEl as HTMLInputElement).value;
    expect(myTextAreaVal.includes('1996-12-04')).toBe(true);
  });

  test('pass valid value to test select field', async () => {
    render(<Contacts />);
    const selectElem = screen.queryByTestId('select-element') as HTMLSelectElement;
    await userEvent.selectOptions(selectElem, 'Turkey');
    expect((screen.getByText('Turkey') as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByText('Montenegro') as HTMLOptionElement).selected).toBeFalsy();
  });
});
