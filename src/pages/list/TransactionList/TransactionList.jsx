import "./transactionList.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "../css/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { transactionColumns } from "../../../datatablesource";
import { useState, useEffect } from "react";

const storedJwt = localStorage.getItem("token");

const Datatable = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const transactions = await (
        await fetch("http://localhost:5000/admin/transactions/list", {
          headers: { Authentication: `Bearer ${storedJwt}` },
        })
      ).json();
      setTransactions(transactions);
    };
    dataFetch();
  }, []);

  const rows = transactions?.map((trans) => {
    return {
      id: trans._id,
      user: trans.user,
      hotel: trans.hotel,
      room: trans.room,
      date: trans.date,
      price: `$${trans.price}`,
      method: trans.payment,
      status: trans.status,
    };
  });

  return (
    <div className="datatable">
      <div className="datatableTitle">Transactions List</div>
      <DataGrid
        className="datagrid"
        rows={rows}
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
