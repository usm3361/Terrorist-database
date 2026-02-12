import "./TableRow.css";
import { v4 as uuidv4 } from "uuid";

const TableRow = ({ terrorist }) => {
  const { name, organization, attacks, status, summary, imageUrl } = terrorist;
  return (
    <div className="TableRow">
      <td className="dataName">
        <img className="data-img" src={imageUrl} alt="" />
        {name}
      </td>
      <td className="organiz">{organization}</td>
      <td className="attacks">{attacks}</td>
      <td className="status">{status}</td>
      <td className="summary">{summary}</td>
    </div>
  );
};

export default TableRow;

import "../css/CardStudent.css";
