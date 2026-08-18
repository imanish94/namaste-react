import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(null);
  const { id: resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <MenuShimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards?.find(
    (c) => c?.card?.card?.info,
  )?.card?.card?.info;

  const itemCards =
    resInfo?.cards
      ?.find((c) => c.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
        (c) => c.card?.card?.itemCards || [],
      ) || [];

  const cardsdata = resInfo?.cards?.find((c) => c.groupedCard);
  const regulardata = cardsdata?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = regulardata.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );

  return (
    <div className="text-center">
      <div className="container ">
        <h1 className=" font-bold text-3xl m-2">{name}</h1>
        <p className="menu-meta">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      <h2 className="font-bold text-2xl">Menu</h2>
      {categories.map((cat, i) => (
        <RestaurantCategory
          key={i}
          categories={cat.card.card}
          showItems={i === showItems ? true : false}
          setShowItems={() => setShowItems((prev) => (prev === i ? null : i))}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
