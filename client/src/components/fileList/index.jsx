import React from 'react';
import wordings from '../../wordings';
import Table from '../ui/table';

const FileList = ({ data }) => {
  const { table: { headers } } = wordings;

  const formatDataForTable  = () => (
    data?.reduce((acc, { file, lines }) => {
      lines?.forEach(line => { acc.push([file, ...Object.values(line)]) });
      return acc;
    }, [])
  );

  return (
    <Table
      headers={headers}
      data={formatDataForTable()}
    />
  );
};

export default FileList;
