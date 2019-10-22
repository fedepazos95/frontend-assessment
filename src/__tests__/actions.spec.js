import axios from 'axios';
import MockAdaptar from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from 'actions';
import fetchMock from 'fetch-mock';
import config from 'config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdaptar(axios);

describe('Redux async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fetch_data', () => {
    mock.onGet(config.dataUrl).reply(200, {
      Brastlewark: [{ id: 0 }],
    });

    const expectedActions = [
      {
        type: 'fetch_data',
        payload: {
          Brastlewark: [{ id: 0 }],
        },
      },
    ];
    const store = mockStore({ gnomes: [] });

    return store.dispatch(actions.fetchData()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
