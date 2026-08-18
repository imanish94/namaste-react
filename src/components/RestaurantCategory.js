import ItemList from "./ItemList";

const RestaurantCategory = ({ categories, showItems, setShowItems }) => {
  const handleClick = () => {
    setShowItems(showItems);
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {categories.title} ({categories.itemCards.length})
        </span>

        <span className="text-xl">{showItems ? "⬆️" : "⬇️"}</span>
      </div>

      {showItems && <ItemList list={categories.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
