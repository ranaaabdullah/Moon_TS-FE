import React from "react";

const Pagination = ({page,setPage}) => {
  return (
    <div className="py-5">
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <div
              onClick={()=>setPage(page-1)}
              
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight  text-gray-500 bg-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </div>
          </li>
          <li>
            <div
              onClick={()=>setPage(1)}
              
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white   dark:bg-gray-700 dark:text-white "
            >
              1
            </div>
          </li>
          <li>
            <div
              onClick={()=>setPage(2)}
              
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border-2 ml-2 border-primary-100 bg-white "
            >
              2
            </div>
          </li>
          <li>
            <div
              onClick={()=>setPage(3)}
              
              aria-current="page"
              className="z-10 flex items-center justify-center px-4 h-10 leading-tight"
            >
              3
            </div>
          </li>
          <li>
            <div
              onClick={()=>setPage(4)}
              
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white "
            >
              4
            </div>
          </li>

          <li>
            <div
            
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white "
            >
              <span className="sr-only">Next</span>
              <svg
              onClick={()=>setPage(page+1)}
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
