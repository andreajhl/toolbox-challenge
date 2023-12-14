import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { getFileNameList, getFileByName, clearFileItem } from '../../store/files';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { STORE_MOCK } from "../../mocks/store";
import Nav from ".";

jest.mock('../../store/files', () => ({
  getFileNameList: jest.fn(),
  getFileByName: jest.fn(),
  clearFileItem: jest.fn(),
}));

const store = configureStore([])(STORE_MOCK);
store.dispatch = jest.fn();

const renderNav = () => (
  render (
    <Provider store={store}>
      <Nav />     
    </Provider>
  )
);

describe('<Nav />', () => {

  beforeEach(() => jest.clearAllMocks());

  it('basic render', () => {
    const { getByRole } = renderNav();
  
    const navbar = getByRole('navigation')
    expect(navbar).toBeDefined();
  });

  it('dispatches getFileNameList action on mount', () => {
    renderNav();
    expect(store.dispatch).toHaveBeenCalledWith(getFileNameList());
  });

  it('dispatches getFileByName when options is selected', () => {
    const { getByRole } = renderNav();

    const select = getByRole('combobox');
    fireEvent.change(select, { target: { value: 'test1.csv' } });

    expect(store.dispatch).toHaveBeenCalledWith(getFileByName());
  });

  it('dispatches clearFileItem when ALL_OPTIONS is selected', () => {
    const { getByRole } = renderNav();

    const select = getByRole('combobox');
    fireEvent.change(select, { target: { value: 'test1.csv' } });
    fireEvent.change(select, { target: { value: 'ALL' } });

    expect(store.dispatch).toHaveBeenCalledWith(clearFileItem());
  });
});