const SearchBox = (props) => {
  return (
    <input
      className={props.className} 
      type="search"
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
    />
  );
};

export default SearchBox;
