import './ShowEntries.css';

function ShowEntries({pagination, setPagination}) {
    const handleChange = (e) => {
        setPagination({...pagination, pageSize: e.target.value});
    };

    return (
        <div className="show-entries-container">
            <span>Show </span>
            <select
                name="show-entries"
                id="show-entries" 
                defaultValue="10" 
                onChange={handleChange}
            >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <span> entries</span>
        </div>
    )
}

export default ShowEntries;