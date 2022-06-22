const getInitialValues = (itemList) => {
  const initialValues = {};
  itemList?.forEach((item) => { initialValues[item.name] = item.value; });
  return initialValues;
};

export default getInitialValues;