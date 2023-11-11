import { toast } from "react-toastify";
import { useState } from "react";

const Form = props => {
  const { addItem } = props;

  const [itemName, setItemName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!itemName) {
      toast.warning("Please enter a value");
      return;
    }

    addItem(itemName);
    setItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          value={itemName}
          className="form-input"
          onChange={e => setItemName(e.target.value)}
          placeholder="Enter an item"
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
