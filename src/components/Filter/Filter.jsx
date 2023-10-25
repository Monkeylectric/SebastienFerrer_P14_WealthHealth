import './Filter.css';

function Filter({columnFilters, setColumnFilters}) {
    const columnValue = columnFilters.find(filter => filter.id === "lastName")?.value || "";

    const onFilterChange = (id, value) => {
        return setColumnFilters(prev => prev.filter(filter => filter.id).concat({id, value}));
    }

    return (
        <div className="filter">
            <div className="filter-input-group">
                <span>Search: </span>
                <input 
                    type="text" 
                    placeholder="Search" 
                    defaultValue={columnValue}
                    onChange={(e) => onFilterChange("lastName", e.target.value)}
                />
            </div>
        </div>
    )
}

export default Filter;