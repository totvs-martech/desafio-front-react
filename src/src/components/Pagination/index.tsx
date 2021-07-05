
const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;


export default function Pagination({ limit, total, offset, setOffset }:any) {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page:any){
    setOffset((page - 1) * limit);
  }

  return(
    <>
      {(total > limit) ? (
        <div className="container-fluid d-flex justify-content-center bg-light">
        <nav aria-label="Page navigation">
          <ul className="pagination">
          
            {current !== 1 && (
              <li className="page-item">
                <button className="page-link" aria-label="Previous"
                  onClick={() => onPageChange(current - 1)}
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
            ) }
  
            {Array.from({ length: Math.min(MAX_ITEMS, pages) })
              .map((_, index) => index + first)
              .map((page) => (
                <li key={page} className="page-item">
                  <button className={page === current ? "page-link active" : "page-link"} 
                  onClick={() => onPageChange(page)}>
                    {page}
                  </button>
                </li>
              ))}

            {current !== pages && (
              <li className="page-item">
                <button className="page-link" aria-label="Next"
                  onClick={() => onPageChange(current + 1)}
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            )}
            
          </ul>
        </nav>
      </div>
      ) : (
        <></>
      )}
    </>
  );
}