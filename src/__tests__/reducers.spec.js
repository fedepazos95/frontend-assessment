import pageReducer from 'reducers/page';
import gnomesReducer from 'reducers/gnomes';

describe('page reducer', () => {
  it('should return the initial state', () => {
    expect(pageReducer(1, {})).toEqual(1);
  });
  it('should handle set_page', () => {
    expect(
      pageReducer(1, {
        type: 'set_page',
        payload: 12,
      }),
    ).toEqual(12);
  });
});

describe('gnomes reducer', () => {
  it('should return the initial state', () => {
    expect(gnomesReducer([], {})).toEqual([]);
  });
  it('should handle fetch_data', () => {
    expect(
      gnomesReducer(1, {
        type: 'fetch_data',
        payload: { Brastlewark: [{ id: 1 }] },
      }),
    ).toEqual({ Brastlewark: [{ id: 1 }] });
  });
});
