import { Icon_Loader } from "../icons";
import propTypes from "prop-types";

function Table({ tableData = [], loader = false }) {
  return (
    <div className="max-w-[800px] bg-white overflow-x-scroll rounded-lg mt-[25px] ml-auto mr-auto max-h-[600px]">
      {tableData.length > 0 ? (
        <table className="w-full relative">
          <thead className="sticky top-0 z-[5]">
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Temperature</th>
              <th className="py-3 px-6 text-center">Location</th>
              <th className="py-3 px-6 text-center">Date and Time</th>
              <th className="py-3 px-6 text-center">Icon</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {tableData.map((data, idx) => (
              <tr key={idx}>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="mr-2">{idx + 1}</div>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  {data?.current?.temp_c || `-`}
                  <sup>°</sup>
                </td>
                <td className="py-3 px-6 text-center">
                  {data?.location?.country || `-`}
                </td>
                <td className="py-3 px-6 text-center">
                  {data?.current?.last_updated || `-`}
                </td>
                <td className="py-3 px-6 text-center">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={`https:${data?.current?.condition?.icon}`}
                    alt="Icon"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex justify-center items-center h-40">
          {loader ? (
            <Icon_Loader color={"black"} />
          ) : (
            <p className="text-gray-600 text-sm">Data not found!</p>
          )}
        </div>
      )}
    </div>
  );
}

Table.propTypes = {
  tableData: propTypes.string,
  loader: propTypes.string,
};

export default Table;
