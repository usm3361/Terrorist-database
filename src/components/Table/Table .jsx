import "./Table.css";

const Table = ({ terrorists }) => {
  return (
    <div className="table">
      <table>
        <tr>
          <th className="table-heder">Name</th>
          <th className="table-heder">Organization</th>
          <th className="table-heder">Attacks</th>
          <th className="table-heder">Status</th>
          <th className="table-heder">Summary</th>
        </tr>

        {terrorists.map((terrorist) => (
          <tr>
            <TableRow terrorist={terrorist} key={terrorists[index + 1]} />
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
