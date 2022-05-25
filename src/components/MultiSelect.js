import TableList from "./TableList/TableList";
const MultiSelect = ({valueList, onChange, options, maxLimit = 100}) => {
    return (
      <Select
        value={valueList}
        isMulti
        onChange={onChange}
        options={options}
        isOptionDisabled={(option) => valueList.length >= 3}
      />
    );
  };
  export default MultiSelect;