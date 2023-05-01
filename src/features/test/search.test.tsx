import reducer, { update, SearchTextState } from '../searchQuery/search';

describe('Search store', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ value: '' });
  });

  test('should handle a first value', () => {
    const previousState: SearchTextState = { value: 'Run the tests' };

    expect(reducer(previousState, update('Run the tests'))).toEqual({ value: 'Run the tests' });
  });

  test('should handle a new value', () => {
    const previousState: SearchTextState = { value: 'Run the tests' };

    expect(reducer(previousState, update('Use Redux'))).toEqual({ value: 'Use Redux' });
  });
});
