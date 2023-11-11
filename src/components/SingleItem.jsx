const SingleItem = props => {
  const { id, name, completed, removeItem, toggleItem } = props;

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleItem(id)}
      />
      <p style={{ textDecoration: completed && "line-through" }}>{name}</p>
      <button
        type="button"
        className="btn btn-remove"
        onClick={() => removeItem(id)}>
        delete
      </button>
    </div>
  );
};

export default SingleItem;
