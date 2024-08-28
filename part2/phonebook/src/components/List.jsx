import ListItem from "./ListItem";

const List = ({ onDelete, searchPerson }) => {
  return (
    <div>
      {searchPerson.map((person) => (
        <ListItem key={person.id} data={person} onDelete={onDelete} />
      ))}
    </div>
  );
};
export default List;
