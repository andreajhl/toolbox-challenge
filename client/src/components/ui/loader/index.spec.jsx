import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Loader from ".";

const renderLoading = () => render(<Loader text='Loading' />);

describe('<Loader />', () => {
  it('basic render', () => {
    const { getByText } = renderLoading();

    const text = getByText('Loading');
    expect(text).toBeDefined();
  });
});
