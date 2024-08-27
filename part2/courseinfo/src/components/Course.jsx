import Content from "./Content";
import Header from "./Header";

const Course = ({ course }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header course={course} />
      <Content key={course.id} course={course} />
    </div>
  );
};

export default Course;
