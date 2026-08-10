import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const { id: resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER",
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

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

  return (
    <div className="menu-page">
      <h1>{name}</h1>
      <p className="menu-meta">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.name}>
            <span className="item-name">{item.card.info.name}</span>
            <span className="item-price">
              Rs.
              {(item.card.info.price || item.card.info.defaultPrice) / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
