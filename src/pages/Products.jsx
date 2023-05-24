/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => setData(res.data));
  }, []);

  let dispatch = useDispatch();

  const add = (item) => {
    dispatch({ type: "ADD", payload: item });
  };

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <ul>
        {data &&
          data.map((item) => (
            <>
              <li onClick={() => handleAdd(item)} style={{ cursor: "pointer" }}>
                {item.id} - {item.name}
              </li>
            </>
          ))}
      </ul>
    </>
  );
}

export default Products;
