import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import Box from "@mui/material/Box";

const stdWidth = 150;
const columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  {
    field: "functionName",
    headerName: "Function name",
    width: stdWidth,
    renderCell: (params) => (
      <a target="blank" href={`/function/${params.row.functionName}`}>
        {params.row.functionName}
      </a>
    ),
  },
  {
    field: "description",
    headerName: "Description",
    width: stdWidth,
  },
  { field: "packageType", headerName: "Package type", width: stdWidth },
  { field: "runtime", headerName: "Runtime", width: stdWidth },
  // Architecture
  { field: "codeSize", headerName: "Code Size", width: stdWidth },
  { field: "memory", headerName: "Memory (MB)", width: stdWidth },
  { field: "timeout", headerName: "Timeout (s)", width: stdWidth },
  // Last modified

  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  //   },
];

const rows = [
  {
    functionName: "helloWorld",
    id: 1,
    packageType: "zip",
    description: "my hello world function",
    runtime: "python",
    codeSize: "198427",
    memory: "128",
    timeout: 3,
  },
];

export default function FunctionList() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
