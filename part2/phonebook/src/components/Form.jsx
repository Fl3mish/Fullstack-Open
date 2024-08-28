const Form = ({ name, number, onSubmit, setNewName, setNewNumber }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          autoComplete="on"
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="number">Number: </label>
        <input
          autoComplete="on"
          id="number"
          type="text"
          required
          value={number}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
export default Form;
