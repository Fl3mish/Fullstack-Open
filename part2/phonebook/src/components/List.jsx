import ListItem from "./ListItem";

const List = ({ name, number }) => {
  return (
    <div>
      <ListItem name={name} number={number} />
    </div>
  );
};
export default List;
