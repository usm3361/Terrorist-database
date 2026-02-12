import "./TableRow.css";

const imageUrlDefault = "terrorist.png";

const TableRow = ({ terrorist }) => {
  const {
    name,
    organization,
    attacksCount,
    status,
    relationToIsraelSummary,
    imageUrl,
  } = terrorist;
  return (
    <>
      <td className="dataName">
        <img className="data-img" src={imageUrl || imageUrlDefault} alt="" />
        {name}
      </td>
      <td className="organiz">{organization}</td>
      <td className="attacks">{attacksCount}</td>
      <td className="status">{status}</td>
      <td className="summary">{relationToIsraelSummary}</td>
    </>
  );
};

export default TableRow;
