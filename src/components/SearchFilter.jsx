import './SearchFilter.css'

export default function SearchFilter({
  searchText,
  setSearchText,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
}) {
  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  }

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
  }

  const handlePriorityChange = (event) => {
    setPriorityFilter(event.target.value);
  }

  return (
    <div className="search-filter">
      <h2>Search & Filter</h2>
      <div className="filter-row">
        <input
          type="text"
          id="searchInput"
          placeholder="Search tasks..."
          value={searchText}
          onChange={handleSearchText}
        />
        <select value={statusFilter} id="filterStatus" onChange={handleStatusChange}>
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <select value={priorityFilter} id="filterPriority" onChange={handlePriorityChange}>
          <option value="all">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
}
