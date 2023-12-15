import React from 'react';
import { Form } from 'react-bootstrap';

const Select = ({
  handleSelect,
  optionsSelect,
  defaultValue,
}) => {
  const handleChange = ({ target: { value }}) => handleSelect(value);

  return (
    <Form className='w-md-25'>
      <Form.Select
        defaultValue={defaultValue}
        onChange={handleChange}
      >
        {
          optionsSelect?.map(item => (
            <option key={item} value={item}>{item}</option>
          ))
        }
        <option value={defaultValue}>{defaultValue}</option>
      </Form.Select>
    </Form>
  );
};

export default Select;
