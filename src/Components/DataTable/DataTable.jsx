import { TableData } from "../../../utils/TableData";
import { useState } from "react";
import "./DataTable.css";

const DataTable = () => {
  const [rows, setRow] = useState(5);
  const [firstRow, setFirstRow] = useState(0);
  const [page] = useState(2);

  const Filtered = TableData.filter((data) => data.id % 5 === 0);
  const [dropDown] = useState(Filtered);

  const handleNext = () => {
    setFirstRow(5);
    setRow(10);
  };

  const handlePrev = () => {
    setFirstRow(0);
    setRow(5);
  };

  const handleClicked = (id) => {
    setRow(Number(id));
  };

  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {TableData.slice(firstRow, rows).map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={handlePrev}
          disabled={rows <= 5}
          className="btn"
        >
          Previous
        </button>

        <span className="page-info">Page 1 / {page}</span>

        <button
          onClick={handleNext}
          disabled={rows >= 11}
          className="btn"
        >
          Next
        </button>
      </div>

      <select className="dropdown" onChange={(e) => handleClicked(e.target.value)}>
        {dropDown.map((data) => (
          <option value={data.id} key={data.id}>
            {data.id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DataTable;
