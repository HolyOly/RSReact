export function hasNumber(name: string) {
  return /\d/.test(name);
}

export function tooLong(name: string) {
  return name.length > 30;
}

export function tooShort(name: string) {
  return name.length < 3;
}

export function isFutureDate(date: string) {
  const now = new Date();
  const selected = new Date(date);
  return selected > now;
}

export function isValidName(name: string | undefined) {
  if (!name) {
    return 'field cannot be empty';
  }

  if (hasNumber(name)) {
    return "name mustn't contain numbers";
  }

  if (tooLong(name) || tooShort(name)) {
    return 'name must be of adequate length';
  }

  return '';
}

export function isValidDate(date: string | undefined) {
  if (!date) {
    return 'field cannot be empty';
  }

  if (isFutureDate(date)) {
    return 'invalid date';
  }

  return '';
}

export function isValidGender(male: boolean, female: boolean) {
  if (!male && !female) {
    return 'select gender please';
  }

  return '';
}

export function isValidCheckboxTerm(checked: boolean) {
  if (!checked) {
    return 'Prerequisite for receiving our services';
  }

  return '';
}

export function isValidFile(
  point1: string | undefined | null | ArrayBuffer | undefined,
  point2?: string | undefined | null | ArrayBuffer | undefined
) {
  if (point2 !== undefined && (!point1 || !point2)) {
    return 'file not selected';
  } else {
    if (!point1) {
      return 'file not selected';
    }
  }

  return '';
}

export function getFileExtension(fileName: string) {
  const re = /(?:\.([^.]+))?$/;
  const ext = (re.exec(fileName) as RegExpExecArray)[1];
  return ext ? ext : '';
}

export function getShortFileName(fileName: string | undefined | null) {
  if (!fileName) {
    return '';
  }
  if (fileName.length < 15) {
    return fileName;
  }
  return fileName.substring(0, 7) + '...' + getFileExtension(fileName);
}
