import { useSelector } from "react-redux";

function Favourites() {
  let favouriteProducts = useSelector((state) => state);

  return (
    <>
      <ul>
        {favouriteProducts &&
          favouriteProducts.map((item) => (
            <>
              <li>
                {item.id} - {item.name}
              </li>
            </>
          ))}
      </ul>
    </>
  );
}

export default Favourites;
