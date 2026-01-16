import { resLogo } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={resLogo + resData.info.cloudinaryImageId}
        alt={resData.info.name}
      />
      <h4>{resData.info.name}</h4>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
    </div>
  );
};
export default RestaurantCard;
