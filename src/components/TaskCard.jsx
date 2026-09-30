// Task 2: reusable component that receives task data through props
function TaskCard({ title, category }) {
  const categoryClass = "card-" + category.toLowerCase().replaceAll(" ", "-");

  return (
    <article className={"task-card " + categoryClass}>
      <span className="pin" aria-hidden="true"></span>
      <h2 className="task-title">{title}</h2>
      <p className="task-category">{category}</p>
    </article>
  );
}

export default TaskCard;