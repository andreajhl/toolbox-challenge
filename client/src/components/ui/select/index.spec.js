import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { FILE_NAME_LIST } from "../../../mocks/store";
import Select from ".";

const basicProps = {
  handleSelect: jest.fn(),
  optionsSelect: FILE_NAME_LIST,
}

const renderSelect = (newProps = {}) => {
  const props = { ...basicProps, ...newProps };

  return render(<Select {...props} />)
};

describe('<Select />', () => {
  it('basic render', () => {
    const { getByRole } = renderSelect();

    const select = getByRole('combobox');
    expect(select).toBeDefined();
  });

  it('calls handleSelect when an item is selected', async() => {
    const { getByRole } = renderSelect();

    const select = getByRole('combobox');
    fireEvent.change(select, { target: { value: 'test2.csv' } });

    expect(basicProps.handleSelect).toHaveBeenCalled();
  });

  it('when default Value is sent it starts with this default value', () => {
    const defaultValue = 'test3.csv';
    const item = 'test1.csv';

    const { getByRole } = renderSelect({ defaultValue });

    const select = getByRole('combobox');
    expect(select.value).toEqual(defaultValue);
    
    fireEvent.change(select, { target: { value: item } });
    expect(select.value).toEqual(item);
  });
});
