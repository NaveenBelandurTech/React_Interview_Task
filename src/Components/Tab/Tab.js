import { useState } from "react";
import InsideTab from "./InsideTab";
import "./tab.css";
const data = [
  {
    title: "tab1",
    content: "This is the content of tab1",
  },
  {
    title: "tab2",
    content: "This is the content of tab2",
  },
  {
    title: "tab3",
    content: "This is the content of tab3",
  },
];

const Tab = () => {
  const [dataFlow, setData] = useState();

  const handleClick = (tab) => {
    const result = data.filter((data) => {
      return data.title == tab;
    });
    setData(result);
  };

  return (
    <section className="container_">
      <div className="tab_container">
        {data?.map((data, i) => {
          return (
            <div key={i + 1}>
              <InsideTab data={data} clicked={handleClick} dataFlow={dataFlow}  />
            </div>
          );
        })}
      </div>
      {dataFlow?.length == 0 ? dataFlow[0] : dataFlow?.map((data, i) => {
        return (
          <div key={i + 1}>
            <p>{data.content}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Tab;
