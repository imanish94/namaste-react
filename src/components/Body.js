import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { RestraurantCardPromoted } from "./RestraurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserInfo } from "../context/UserContext";
const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);
  const onlineStatus = useOnlineStatus();
  const PromotedRestaurant = RestraurantCardPromoted(RestaurantCard);
  const { userName, setUserName } = useContext(UserInfo);

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

  if (!onlineStatus) {
    return (
      <h1>Ahh... Got Offline. Please check your Internet connectivity!!</h1>
    );
  }

  return restaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex m-4 p-2">
        <input
          type="text"
          placeholder="Search..."
          className="border border-solid px-2"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-gray-400 px-2-lg p-2"
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
          className=" bg-green-500 rounded-lg mx-2 p-2"
          onClick={() => {
            const topRatedRestaurants = restaurantsList.filter(
              (restaurant) => restaurant.card.card.info.avgRating >= 4.5,
            );
            setFilterRestaurantList(topRatedRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>

        <p>
          Uesr Name :{" "}
          <input
            className="border border-black my-2"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </p>
      </div>

      <div className="container flex flex-wrap">
        <div className="grid grid-cols-5 gap-5">
          {filterRestaurantList.map((restaurant) => (
            <Link
              key={restaurant.card.card.info.id}
              to={`/restaurant/${restaurant.card.card.info.id}`}
            >
              {restaurant.card.card.info.promoted ? (
                <PromotedRestaurant restoList={restaurant} />
              ) : (
                <RestaurantCard restoList={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
