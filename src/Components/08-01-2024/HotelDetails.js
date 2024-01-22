import { useParams, useLocation } from "react-router-dom";
import hotelsList from "../../static/hotelsList";

const HotelDetails = () => {
  // const params = useParams();
  // console.log(params);

  const location = useLocation();
  console.log(location.search);

  const urlParams = new URLSearchParams(location.search);
  console.log(urlParams.keys());

  // const hotelDetails = hotelsList.find((hotel) => hotel.id == params.hotelId);
  // axios.get("//ab.com?hotelId=")

  return (
    <>
      <h1>This is HotelDetails page</h1>
      {/* <h2>Hotel ID : {hotelDetails.id}</h2> */}
      {/* <h2>Hotel Name : {hotelDetails.name}</h2> */}
    </>
  );
};

export default HotelDetails;
