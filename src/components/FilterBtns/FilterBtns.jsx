import "./FilterBtns.css";

const FilterBtns = ({ setInput }) => {
  return (
    <div className="filters">
      <input type="search" onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default FilterBtns;
