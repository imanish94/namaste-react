import { useState, useEffect } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [restId]);

  const fetchData = async () => {
    const response = await fetch(
      MENU_API + restId + "&catalog_qa=undefined&submitAction=ENTER",
    );
    const json = await response.json();
    setRestInfo(json.data);
  };

  return restInfo;
};

export default useRestaurantMenu;
