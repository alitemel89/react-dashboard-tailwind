import React from "react";
import Topbar from "../global/Topbar";
import { mockDataContacts } from "../../data/mockData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Contacts = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];
  return (
    <div className="flex-1">
      <Topbar />
      <div className="dark:bg-slate-800 h-screen">
        <div className="dark:bg-slate-700 p-2 mx-4 rounded-md">
          <h1 className="text-2xl dark:text-emerald-400 text-slate-800 my-4">
            TEAM
          </h1>
          <h4 className="dark:text-gray-200 text-md text-emerald-900 mb-4">
            Managing the team members
          </h4>
          <div className="max-w-full h-96 dark:bg-slate-700 bg-slate-100">
            <DataGrid
              rows={mockDataContacts}
              columns={columns}
              slots={{
                toolbar: GridToolbar,
              }}
              sx={{
                border: "none",
                borderRadius: "0",
                color: "rgb(16 185 129)",
                fontWeight: 600                
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
