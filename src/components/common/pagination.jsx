function Pagination() {
  return (
    <nav className="ml-auto mr-auto  mt-3" aria-label="Page navigation example">
      <ul className={`flex flex-nowrap justify-center text-center gap-1 `}>
        <li className="px-2 py-1 min-w-20 rounded-md bg-gray-600 cursor-pointer duration-200 text-gray- hover:bg-gray-800 hover:text-gray-300">
          Previous
        </li>
        <li className="px-2 py-1 min-w-15 rounded-md bg-gray-600 cursor-pointer duration-200 text-gray- hover:bg-gray-800 hover:text-gray-300">
          1
        </li>

        <li className="px-2 py-1 min-w-20 rounded-md bg-gray-600 cursor-pointer duration-200 text-gray- hover:bg-gray-800 hover:text-gray-300">
          Next
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
