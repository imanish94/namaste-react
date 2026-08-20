import { CLOUDINARY_IMAGE_URL } from "./../utils/constant";

const ItemList = ({ list }) => {
  return (
    <div>
      {list.map((item) => {
        const info = item?.card?.info;

        return (
          <div
            key={info?.id}
            className="flex justify-between items-start p-4 border-b border-gray-200"
          >
            {/* Item Details */}
            <div className="w-9/12 text-left">
              <p className="font-medium text-gray-800">
                {info?.name} - ₹{(info?.price || info?.defaultPrice) / 100}
              </p>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {info?.description}
              </p>
            </div>

            {/* Item Image */}
            <div className="w-3/12">
              <img
                src={CLOUDINARY_IMAGE_URL + info?.imageId}
                alt={info?.name}
                className="w-32 h-24 object-cover rounded-lg"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
