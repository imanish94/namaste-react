import { useState } from "react";
import RestaurantCard from "./RestraurantCard";
import restoList from "../utils/mockData";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(restoList);
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button className="button">Search</button>
        <button
          className="button"
          onClick={() => {
            const topRatedRestaurants = restaurantsList.filter(
              (restaurant) => restaurant.card.card.info.avgRating >= 4.5,
            );
            setRestaurantsList(topRatedRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-list">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            restoList={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
