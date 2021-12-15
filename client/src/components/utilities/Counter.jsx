import React, { useState, useEffect } from "react";
import { getLikes, addLike } from "../utilities/AxiosCalls";
import Empty from "../../assets/icons/empty.svg";
import Full from "../../assets/icons/full.svg";

const Counter = ({ data }) => {
  const [count, setCount] = useState(0);
  const [img, setImg] = useState(Empty);

  useEffect(() => {
    getLikes(data.id).then((resp) => {
      setCount(resp.data.likes);
    });
  }, []);

  const handleIncrement = () => {
    addLike(data.id).then((resp) => {
      setCount(resp.data.likes);
      flipImg();
    });
  };

  const flipImg = () => {
    setImg(Full);
  };

  return (
    <div className="counter__container">
      <button className="counter__button" onClick={handleIncrement}>
        <img className="counter__buttonimg" src={img} />
      </button>
      <h5 className="counter__header">{count}</h5>
    </div>
  );
};

export default Counter;
