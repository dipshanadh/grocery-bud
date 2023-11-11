import SingleItem from "./SingleItem";

const Items = props => {
  const { items, removeItem, toggleItem } = props;

  return (
    <div className="items">
      {items.map(item => (
        <SingleItem
          {...item}
          key={item.id}
          removeItem={removeItem}
          toggleItem={toggleItem}
        />
      ))}
    </div>
  );
};

export default Items;
