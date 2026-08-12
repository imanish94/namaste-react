import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id: resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo);

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
        {itemCards.map((item, i) => (
          <li key={i}>
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
