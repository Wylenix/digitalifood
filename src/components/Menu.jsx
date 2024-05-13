const Menu = ({ filters, currentFilter, onFilterChange }) => {
  return (
    <nav className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <button
        key="all"
        className={`text-left rounded-md px-2 py-1 transition-colors hover:bg-gray-200 capitalize`}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`text-left rounded-md px-2 py-1 transition-colors hover:bg-gray-200 capitalize ${
            filter === currentFilter ? "font-bold" : ""
          }`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </nav>
  );
};

export default Menu;
