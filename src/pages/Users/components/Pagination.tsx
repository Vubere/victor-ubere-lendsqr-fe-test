



const Pagination = ({ usersLength, pagination, setPagination }: paginationProps) => {

  const {
    start,
    end,
    amountOfPages,
    currentPage,
    usersPerPage
  } = pagination

  const next = () => {
    if (currentPage < amountOfPages) {
      setPagination({ ...pagination, currentPage: currentPage + 1 })
    }
  }
  const previous = () => {
    if (currentPage > 1) {
      setPagination({ ...pagination, currentPage: currentPage - 1 })
    }
  }
  const goToPage = (page: number | string) => {
    if (typeof page !== 'number') {
      return
    }
    if (page > 0 && page <= amountOfPages) {
      setPagination({ ...pagination, currentPage: page })
    }
  }
  const Pagination = () => (
    <>
      {
        paginationArray(amountOfPages, currentPage).map((page) => <button className={`paginationButton ${page === currentPage ? 'active' : ''}`} key={page} onClick={() => goToPage(page)}>{page}</button>)
      }
    </>
  )

  return (
    <div className='pagination'>
      <div className='paginationLeft'>
        <p>Showing
          {usersLength > usersPerPage ? <select name="pagination" id="pagination" value={usersPerPage} onChange={(e) => setPagination({ ...pagination, usersPerPage: parseInt(e.target.value) })}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="15">20</option>
            <option value="25">25</option>
          </select> : usersLength}
          out of {usersLength}</p>
      </div>
      <div className='paginationRight'>
        <div className='paginationButtons'>
          <button className='paginationButton' onClick={previous}>&lt;</button>
          {<Pagination/>}
          <button className='paginationButton' onClick={next}>&gt;</button>
        </div>
      </div>
    </div>
  )
}
const paginationArray = (amountOfPages: number, currentPage: number) => {
  if (typeof amountOfPages !== 'number' || typeof currentPage !== 'number') {
    return []
  }
  if (amountOfPages <= 0) {
    return []
  } else if (amountOfPages <= 6) {
    return [...Array(amountOfPages).keys()].map((num) => num + 1)
  } else {
    if (currentPage < 4) {
      return [1, 2, 3, '...', amountOfPages - 1, amountOfPages]
    }
    if (currentPage > amountOfPages - 3) {
      return [1, 2, '...', amountOfPages - 2, amountOfPages - 1, amountOfPages]
    }
    if (currentPage >= 4 && currentPage <= amountOfPages - 3) {
      return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', amountOfPages]
    }
  }
  return []
}
type paginationProps = {
  usersLength: number,
  pagination: {
    start: number,
    end: number,
    amountOfPages: number,
    currentPage: number,
    usersPerPage: number
  },
  setPagination: React.Dispatch<React.SetStateAction<{
    currentPage: number;
    usersPerPage: number;
  }>>,
}


export default Pagination