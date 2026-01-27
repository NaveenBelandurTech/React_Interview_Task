import { useEffect, useState } from "react";
import { TextDesign } from "./Animate";
import Loader from "./Loader";
import "./animateloader.css";

const AnimateLoader = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let result = setInterval(() => {
      setData(TextDesign);
    }, 5000);

    if (data?.length) {
      return clearInterval(result);
    }
  }, []);

  if (data.length == 0) {
    return <Loader />;
  }

  return (
    <>
      <div className="container">
        <div className="container-box">
          {data?.map(({ title, para, id }) => {
            return (
              <div className="item" key={id}>
                <li>{title}</li>
                <li>{para}</li>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnimateLoader;
