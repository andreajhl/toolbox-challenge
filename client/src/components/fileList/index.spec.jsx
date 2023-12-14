import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { FILE_LIST } from '../../mocks/store'
import FileList from ".";

const renderFileList = props => render(<FileList {...props} />);

describe('<FileList />', () => {
  it('basic render', () => {
    const { getByRole } = renderFileList();

    const table = getByRole('table');
    expect(table).toBeDefined();
  });

  it('correctly renders the items within the table', () => {
    const { file, lines } = FILE_LIST[0];
    const { getAllByRole } = renderFileList({ data: FILE_LIST });

    const [fileName,,, hex] = getAllByRole('cell');

    expect(fileName.textContent).toContain(file)
    expect(hex.textContent).toContain(lines[0].hex);
  });

  it('when the data is empty it renders only the headers', () => {
    const { queryAllByRole } = renderFileList({ data: undefined });
    expect(queryAllByRole('cell')).toHaveLength(0);
  });
});
