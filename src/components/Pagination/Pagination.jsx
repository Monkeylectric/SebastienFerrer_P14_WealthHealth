import './Pagination.css';

/**
 * Component which displays 
 * pagination in table
 * 
 * @param {Object} table 
 * @param {Object} pagination 
 * @param {Function} setPagination 
 * 
 * @returns pagination component
 */
function Pagination({table, pagination, setPagination}) {
    const currentPage = table.getState().pagination.pageIndex;

    return (
        <div className="pagination">
            <button 
                onClick={() => {
                    setPagination({...pagination, pageIndex: 0});
                    // return table.previousPage();
                }} 
                disabled={!table.getCanPreviousPage()}
            >{"<<"}</button>
            <button 
                onClick={() => {
                    setPagination({...pagination, pageIndex: currentPage - 1});
                    // return table.previousPage();
                }} 
                disabled={!table.getCanPreviousPage()}
            >{"<"}</button>
            <span>
                Page {currentPage + 1} / {table.getPageCount()}
            </span>
            <button
                onClick={() => {
                    setPagination({...pagination, pageIndex: currentPage + 1});
                    // return table.nextPage();
                }} 
                disabled={!table.getCanNextPage()}
            >{">"}</button>
            <button
                onClick={() => {
                    setPagination({...pagination, pageIndex: table.getPageCount() - 1});
                    // return table.nextPage();
                }} 
                disabled={!table.getCanNextPage()}
            >{">>"}</button>
        </div>
    )
}

export default Pagination;