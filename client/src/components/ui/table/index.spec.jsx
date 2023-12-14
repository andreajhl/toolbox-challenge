import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Table from ".";

const props = {
  headers: [
    'test1',
    'test2',
    'test3'
  ],
  data: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
};

const renderTable = () => render(<Table {...props} />);

describe('<Table />', () => {
  it('basic render', () => {
    renderTable();
  });

  it('should render headers correctly', () => {
    const { getAllByRole } = renderTable();
    const headers = getAllByRole('columnheader');

    expect(headers).toHaveLength(3);
    expect(headers[0].textContent).toEqual('test1');
  });
  
  it('should render cell table correctly', () => {
    const { getAllByRole } = renderTable();
    const cells = getAllByRole('cell');

    expect(cells).toHaveLength(9);
    expect(cells[0].textContent).toEqual('1');
  });
});
