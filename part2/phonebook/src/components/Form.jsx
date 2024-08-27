const Form = ({ name, number, onSubmit, setNewName, setNewNumber }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name:{" "}
        <input
          required
          value={name}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <div>
        number:{" "}
        <input
          required
          value={number}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default Form;
