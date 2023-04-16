import { describe } from 'vitest';
import {
  getFileExtension,
  hasNumber,
  tooLong,
  tooShort,
  isFutureDate,
  getShortFileName,
  isValidFile,
  isValidGender,
  isValidCheckboxTerm,
  isValidName,
  isValidDate,
  isValidLocation,
} from '../validation';
import { createArrOfPages } from '../card';
import { handleFixFilePath } from '../form';
import assert from 'assert';
import { defaultCountry } from '../../components/contacts/constants';

describe('Validation functions', () => {
  it('test isValidName', () => {
    assert.equal(isValidName(undefined), 'field cannot be empty');
    assert.equal(isValidName('Ja5ne'), "name mustn't contain numbers");
    assert.equal(isValidName('j'), 'name must be of adequate length');
    assert.equal(isValidName('Jane'), '');
  });

  it('test hasNumber', () => {
    assert.equal(hasNumber('gjhs6'), true);
    assert.equal(hasNumber('Jane'), false);
  });

  it('test tooLong', () => {
    assert.equal(tooLong('dddds,hfghsjerlgjrltgjldrkjtgdrjtg,jdf,gjdhf'), true);
    assert.equal(tooLong('Jane'), false);
  });

  it('test tooShort', () => {
    assert.equal(tooShort('John Smith'), false);
    assert.equal(tooShort('J'), true);
  });

  it('test isFutureDate', () => {
    assert.equal(isFutureDate('fake date'), false);
    assert.equal(isFutureDate('1994-09-12'), false);
    assert.equal(isFutureDate('2110-09-12'), true);
  });

  it('test isValidDate', () => {
    assert.equal(isValidDate(undefined), 'field cannot be empty');
    assert.equal(isValidDate('3045-04-03'), 'invalid date');
    assert.equal(isValidDate('1994-09-12'), '');
  });

  it('test getShortFileName', () => {
    assert.equal(getShortFileName(undefined), '');
    assert.equal(getShortFileName('image.jpg'), 'image.jpg');
    assert.equal(getShortFileName('imageimageimageimage.png'), 'imageim...png');
    assert.equal(getShortFileName('im.age.jpg'), 'im.age.jpg');
  });

  it('test isValidFile', () => {
    assert.equal(isValidFile('image.jpg'), '');
    assert.equal(isValidFile('imageimageimageimage.png', 'text.jpeg'), '');
    assert.equal(isValidFile(undefined), 'file not selected');
    assert.equal(isValidFile(undefined, 'image.jpg'), 'file not selected');
  });

  it('test getFileExtension', () => {
    assert.equal(getFileExtension('thebestimage.tsx'), 'tsx');
    assert.equal(getFileExtension('hello'), '');
  });

  it('test isValidGender', () => {
    assert.equal(isValidGender(false, false), 'select gender please');
    assert.equal(isValidGender(true, false), '');
    assert.equal(isValidGender(false, true), '');
  });

  it('test isValidLocation', () => {
    assert.equal(isValidLocation(undefined), 'choose the country');
    assert.equal(isValidLocation('Turkey'), '');
    assert.equal(isValidLocation(defaultCountry), 'choose the country');
  });

  it('test isValidCheckboxTerm', () => {
    assert.equal(isValidCheckboxTerm(false), 'Prerequisite for receiving our services');
    assert.equal(isValidCheckboxTerm(true), '');
  });

  it('test isValidCheckboxTerm', () => {
    expect(handleFixFilePath(null)).resolves.toBe('');
    expect(handleFixFilePath(undefined)).resolves.toBe('');
  });

  it('test createArrOfPages', () => {
    assert.deepEqual(createArrOfPages(1, 834), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(createArrOfPages(11, 834), [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
    assert.deepEqual(createArrOfPages(1, 9), [0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
