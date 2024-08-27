const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <label htmlFor="search">filter shown with</label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
export default SearchFilter;
