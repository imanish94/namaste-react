import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestraurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=26.9720543&lng=75.7628783&str=pizza&trackingId=undefined&submitAction=ENTER&queryUniqueId=a741218c-9918-2012-ed8c-83a8edfada6d&selectedPLTab=RESTAURANT",
      );

      const data = await response.json();
      const pizzaRestaurants =
        data?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
      setRestaurantsList(pizzaRestaurants);
      setFilterRestaurantList(pizzaRestaurants);
      console.log(pizzaRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // condtional Rending
  // if (restaurantsList.length === 0) {
  //   return (
  //     <div className="loading">
  //       <Shimmer />
  //     </div>
  //   );
  // }

  return restaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="button"
          onClick={() => {
            const searchFilterRestaurant = restaurantsList.filter(
              (restaurant) =>
                restaurant.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
            );
            setFilterRestaurantList(searchFilterRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="button"
          onClick={() => {
            const topRatedRestaurants = restaurantsList.filter(
              (restaurant) => restaurant.card.card.info.avgRating >= 4.5,
            );
            setFilterRestaurantList(topRatedRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-list">
        {filterRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.card.card.info.id}
            to={`/restaurant/${restaurant.card.card.info.id}`}
          >
            <RestaurantCard restoList={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
