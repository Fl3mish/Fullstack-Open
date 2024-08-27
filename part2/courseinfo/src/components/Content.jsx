import Part from "./Part";

const Content = ({ course }) => {
  const total = course.parts.reduce((acc, curr) => acc + curr.exercises, 0);

  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} parts={part} />
      ))}
      <h3>total of {total} exercises</h3>
    </div>
  );
};

export default Content;
