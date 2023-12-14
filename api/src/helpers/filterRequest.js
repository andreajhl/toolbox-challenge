const filterFulfilledRequests = (data) => {
  const STATUS_FULFILLED = 'fulfilled';

  return data.reduce((acc, item) => {
    if(item.status === STATUS_FULFILLED) acc.push(item.value);
    return acc;
  }, []);
};

export { filterFulfilledRequests };
