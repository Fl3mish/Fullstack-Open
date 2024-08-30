const SearchFilter = ({ searchquery, handleChange }) => {
  return (
    <div>
      <label htmlFor="countries">Find countries:</label>
      <input value={searchquery} onChange={handleChange} id="countries" />
    </div>
  );
};
export default SearchFilter;
