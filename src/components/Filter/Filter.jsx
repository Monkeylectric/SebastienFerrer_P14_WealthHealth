import './Filter.css';

function Filter({glonalFilter, setGlonalFilter, pagination, setPagination}) {
    return (
        <div className="filter">
            <div className="filter-input-group">
                <span>Search: </span>
                <input 
                    type="text" 
                    placeholder="Search" 
                    defaultValue={glonalFilter}
                    onChange={(e) => {
                        setGlonalFilter(e.target.value);
                        setPagination({...pagination, pageIndex: 0});
                    }}
                />
            </div>
        </div>
    )
}

export default Filter;