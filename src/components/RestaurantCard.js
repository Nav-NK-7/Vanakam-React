import { resLogo } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-4 w-[200] bg-gray-200 rounded-lg hover:bg-gray-300">
      <img
        className="rounded-lg"
        src={resLogo + resData.info.cloudinaryImageId}
        alt={resData.info.name}
      />
      <h4 className="font-bold py-2 text-lg">{resData.info.name}</h4>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
    </div>
  );
};
export default RestaurantCard;
