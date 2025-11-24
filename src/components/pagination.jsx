import React from 'react'
import {ChevronsRight, ChevronRight, ChevronsLeft, ChevronLeft} from "lucide-react" 

const Pagination = ({currentPage, totalPage, onPageChange}) => {
  return (
    <>
    <div className='flex justify-center items-center m-4'>
        <button onClick={() => onPageChange(1)} disabled = {currentPage ===1} className='p-2 m-1 border rounded disabled:opacity-50'>
        <ChevronsLeft/>
    </button>
    <button onClick={() => onPageChange(currentPage - 1)} disabled = {currentPage === 1} className='p-2 m-1 border rounded disabled:opacity-50'>
        <ChevronLeft/>
    </button>
    <span>
        Page {currentPage} of {totalPage}
    </span>
    <button onClick={() => onPageChange(currentPage - 1)} disabled = {currentPage === totalPage} className='p-2 m-1 border rounded disabled:opacity-50'>
        <ChevronRight/>
    </button>
    <button onClick={() => onPageChange(currentPage - 1)} disabled = {currentPage === totalPage} className='p-2 m-1 border rounded disabled:opacity-50'>
        <ChevronsRight/>
    </button>
    </div>
    </>
  )
}

export default Pagination
