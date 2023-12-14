import React from 'react';
import TableBT from 'react-bootstrap/Table';

const Table = ({ headers, data }) => {
  return (
    <TableBT
      striped
      bordered
      hover
      className='container text-center'
    >
      <thead className='d-none d-md-block text-start'>
        <tr className='row'>
          {
            headers?.map(head => (
              <th className='col-md-3' key={head}>{head}</th>
            ))
          }
        </tr>
      </thead>
      <tbody className='text-break text-start'>
        {
          data?.map((row, index) => (
            <tr key={index} className='row p-0'>
              {
                row.map(cell => (
                  <td
                    key={cell}
                    className='col-12 col-md-3'
                  >
                    <p className='d-flex'>
                      <span className='me-1 d-md-none'>-</span>
                    {cell}
                    </p>
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </TableBT>
  );
};

export default Table;
