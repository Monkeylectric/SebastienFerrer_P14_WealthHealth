import './Filter.css';

function Filter({glonalFilter, setGlonalFilter}) {
    return (
        <div className="filter">
            <div className="filter-input-group">
                <span>Search: </span>
                <input 
                    type="text" 
                    placeholder="Search" 
                    defaultValue={glonalFilter}
                    onChange={(e) => setGlonalFilter(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Filter;