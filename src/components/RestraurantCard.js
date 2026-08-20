import { CLOUDINARY_IMAGE_URL } from "../utils/constant";

const RestaurantCard = ({ restoList }) => {
  const info = restoList.card.card.info;
  const { name, cuisines, avgRating, locality } = info;
  const imageUrl = info.cloudinaryImageId;
  const slaString = info.sla.slaString;
  return (
    <div className="restaurant-card">
      <img
        src={imageUrl ? `${CLOUDINARY_IMAGE_URL}${imageUrl}` : ""}
        alt="Restaurant"
        className="restaurant-image"
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>Rating: {avgRating}</p>
      <p>Address: {locality}</p>
      <p>{slaString}</p>
    </div>
  );
};

export default RestaurantCard;
