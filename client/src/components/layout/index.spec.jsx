import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { STORE_MOCK } from "../../mocks/store";
import Layout from ".";

const store = configureStore([])(STORE_MOCK);
store.dispatch = jest.fn();

const renderLayout = () => (
  render (
    <Provider store={store}>
      <Layout>
        <p>Text test</p>
      </Layout>      
    </Provider>
  )
);

describe('<Layout />', () => {
  it('basic render', () => {
    const { getByRole } = renderLayout();
  
    const navbar = getByRole('navigation')
    expect(navbar).toBeDefined();
  });

  it('correctly renders the children', () => {
    const { getByText } = renderLayout();

    const children = getByText('Text test');
    expect(children).toBeDefined();
  });
});
