import './Filter.css';

/**
 * Component which manage 
 * filter input in table
 * 
 * @param {String} globalFilter 
 * @param {Function} setGlobalFilter 
 * @param {Object} pagination 
 * @param {Function} setPagination 
 * 
 * @returns filter component
 */
function Filter({globalFilter, setGlobalFilter, pagination, setPagination}) {
    return (
        <div className="filter">
            <div className="filter-input-group">
                <span>Search: </span>
                <input 
                    type="text" 
                    placeholder="Search" 
                    defaultValue={globalFilter}
                    onChange={(e) => {
                        setGlobalFilter(e.target.value);
                        setPagination({...pagination, pageIndex: 0});
                    }}
                />
            </div>
        </div>
    )
}

export default Filter;