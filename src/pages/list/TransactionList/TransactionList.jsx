import "./transactionList.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "../css/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { transactionColumns, transactionRows } from "../../../datatablesource";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(transactionRows);

  return (
    <div className="datatable">
      <div className="datatableTitle">Transactions List</div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={transactionColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
