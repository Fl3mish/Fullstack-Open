import ListItem from "./ListItem";

const List = ({ name, number, onDelete }) => {
  return (
    <div>
      <ListItem name={name} number={number} onDelete={onDelete} />
    </div>
  );
};
export default List;
