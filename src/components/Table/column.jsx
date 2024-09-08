const tableColumn = {
  weather: [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "icon",
      headerName: "Icon",
      valueGetter: (value, row) => `https:${row?.current?.condition?.icon}`,
      renderCell: ({ value }) => (
        <div className="h-full flex items-center">
          {value ? <img className="w-6 h-6" src={value} /> : <>🌫️</>}
        </div>
      ),
    },
    {
      field: "country",
      headerName: "Country",
      valueGetter: (value, row) => row?.location?.country || "",
      maxWidth: 400,
      width: 200,
    },
    {
      field: "lastName",
      headerName: "Timezone",
      width: 180,
      valueGetter: (value, row) => row?.location?.tz_id || "",
    },
    {
      field: "date",
      headerName: "Date",
      width: 160,
      valueGetter: (value, row) => row?.localDate || "",
    },
  ],
};
export default tableColumn;
