import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Navbar, Container } from 'react-bootstrap';
import { clearFileItem, getFileByName, getFileNameList } from '../../store/files';
import wordings from '../../wordings';
import Select from '../ui/select';

const Nav = () => {
  const { title } = wordings;
  const ALL_FILES = 'ALL';

  const dispatch = useDispatch();
  const { fileNameList } = useSelector(state => state.file);

  useEffect(() => { dispatch(getFileNameList()) }, []);

  const onSubmit = (value) => {
    value === ALL_FILES 
      ? dispatch(clearFileItem())
      : dispatch(getFileByName(value));
  };

  return (
    <Navbar className='bg-danger-subtle container-fluid'>
      <Container fluid>
        <Navbar.Brand href='#'>{title}</Navbar.Brand>
        <Select
          handleSelect={onSubmit}
          defaultValue={ALL_FILES}
          optionsSelect={fileNameList}
        />
      </Container>
    </Navbar>
  );
};

export default Nav;
