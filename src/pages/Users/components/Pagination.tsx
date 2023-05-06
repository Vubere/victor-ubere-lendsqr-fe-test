
/* images */
import lt from '../assets/lt.svg'
import gt from '../assets/gt.svg'



const Pagination = ({ usersLength, pagination, setPagination }: paginationProps) => {

  const {
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
        paginationArray(amountOfPages, currentPage).map((page) => <button className={`button ${page === currentPage ? 'active' : ''}`} key={page} onClick={() => goToPage(page)}>{page}</button>)
      }
    </>
  )

  return (
    <div className='pagination'>
      <div className='left'>
        <p>Showing
          {usersLength > usersPerPage ? <span> <select name="pagination" id="pagination" value={usersPerPage} onChange={(e) => setPagination({ ...pagination, usersPerPage: parseInt(e.target.value) })}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="15">20</option>
            <option value="25">25</option>
          </select> </span> : usersLength}
          out of {usersLength}</p>
      </div>
      <div className='right'>
        <div className='buttons'>
          <button className='button' onClick={previous}><img src={lt}/></button>
          {<Pagination />}
          <button className='button' onClick={next}><img src={gt}/></button>
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