import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Toast from ".";

const props = {
  title: 'title test',
  content: 'text test',
};

const renderToast = () => render(<Toast {...props} />);

describe('<Toast />', () => {
  it('basic render', () => {
    const { getByRole } = renderToast();

    const Toast = getByRole('alert');
    expect(Toast).toBeDefined();
  });
});
