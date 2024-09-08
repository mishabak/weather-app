import { Paper } from "@mui/material";
import propTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";

function Table({ tableData = [], loader = false, columns = [] }) {
  const paginationModel = { page: 0, pageSize: 5 };
  const localText = { noRowsLabel: " Data not found" };

  return (
    <Paper
      className="ml-auto mr-auto mt-[25px]"
      sx={{ height: 400, maxWidth: "800px" }}
    >
      <DataGrid
        rows={loader ? [] : tableData.map((e, idx) => ({ id: idx + 1, ...e }))}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
        disableColumnMenu={true}
        disableColumnResize={true}
        loading={loader}
        localeText={localText}
      />
    </Paper>
  );
}

Table.propTypes = {
  tableData: propTypes.string,
  loader: propTypes.string,
  columns: propTypes.array,
};

export default Table;
