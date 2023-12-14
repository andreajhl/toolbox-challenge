import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileList from '../../../components/fileList';
import { getFileList } from '../../../store/files';
import Toast from '../../../components/ui/toast';
import wordings from '../../../wordings';
import Loader from '../../../components/ui/loader';
import Layout from '../../../components/layout';

const Home = () => {
  const { alerts: { error }, loading } = wordings;

  const dispatch = useDispatch();
  const { files, fileItem, isLoading, isError } = useSelector(state => state.file);

  useEffect(() => { dispatch(getFileList()) }, []);

  return (
    <Layout>
      <Fragment>
        {
          (isLoading && !files.length)
            ? <Loader text={loading}/>
            : <FileList data={fileItem ? [fileItem] : files}/>
        }
        {isError && <Toast variant='danger' {...error} />}                
      </Fragment>
    </Layout>
  );
};

export default Home;
