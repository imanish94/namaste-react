import { CLOUDINARY_IMAGE_URL } from "../utils/constant";

const RestaurantCard = ({ restoList }) => {
  const info = restoList.card.card.info;
  const { name, cuisines, avgRating, locality } = info;
  const imageUrl = info.cloudinaryImageId;
  const slaString = info.sla.slaString;
  return (
    <div className="w-[250px] h-[400px] m-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        src={imageUrl ? `${CLOUDINARY_IMAGE_URL}${imageUrl}` : ""}
        alt="Restaurant"
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="font-bold py-4">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>Rating: {avgRating}</p>
      <p>Address: {locality}</p>
      <p>{slaString}</p>
    </div>
  );
};

export default RestaurantCard;

export const RestraurantCardPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-black text-white rounded-b-lg p-2 m-2 ">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
