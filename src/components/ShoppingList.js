import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("Filter by category")

  const filtered = items.filter(function(item) {
    return item.category == selectedCategory || selectedCategory == "Filter by category"
  })

  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(event) => setSelectedCategory(event.target.value)} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
