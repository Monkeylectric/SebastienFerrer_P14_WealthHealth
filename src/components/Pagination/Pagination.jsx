import './Pagination.css';

function Pagination({table, pagination, setPagination}) {
    const currentPage = table.getState().pagination.pageIndex;

    return (
        <div className="pagination">
            <button 
                onClick={() => {
                    setPagination({...pagination, pageIndex: currentPage - 1});
                    return table.previousPage();
                }} 
                disabled={!table.getCanPreviousPage()}
            >{"<"}</button>
            <span>
                Page {currentPage + 1} / {table.getPageCount()}
            </span>
            <button
                onClick={() => {
                    setPagination({...pagination, pageIndex: currentPage + 1});
                    return table.nextPage();
                }} 
                disabled={!table.getCanNextPage()}
            >{">"}</button>
        </div>
    )
}

export default Pagination;