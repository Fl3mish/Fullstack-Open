import ListItem from "./ListItem";

const List = ({ searchquery, countries }) => {
  const showDetails = countries.length === 1;

  return (
    <ul>
      {searchquery &&
        countries.map((c) => (
          <ListItem key={c.cca3} country={c} showDetails={showDetails} />
        ))}
    </ul>
  );
};
export default List;
