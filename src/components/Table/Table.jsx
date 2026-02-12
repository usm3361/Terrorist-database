import "./Table.css";

import TableRow from "../TableRow/TableRow";

const Table = ({ terrorists }) => {
  return (
    <table>
      <thead>
        <tr>
            <th className="table-header" id="name">Name</th>
            <th className="table-header" id="Organization">Organization</th>
          <th className="table-header" id="attacks">Attacks</th>
          <th className="table-header">Status</th>
          <th className="table-header">Summary</th>
        </tr>
      </thead>
      <tbody>
        {terrorists.map((terrorist, index) => (
          <tr key={index + 1}>
            <TableRow terrorist={terrorist} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
