const ListItem = ({ name, number, onDelete }) => {
  return (
    <div>
      {name} {number}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
export default ListItem;
