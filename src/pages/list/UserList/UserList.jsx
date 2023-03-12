import "./userList.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "../css/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const storedJwt = localStorage.getItem("token");

const Datatable = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const users = await (
        await fetch("http://localhost:5000/admin/users/list", {
          headers: { Authentication: `Bearer ${storedJwt}` },
        })
      ).json();
      setUserData(users);
    };
    dataFetch();
  }, []);

  const userRows = userData?.map((user) => {
    return {
      id: user._id,
      user: user.userName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      fullName: user.fullName,
      isAdmin: user.isAdmin,
    };
  });

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">Users List</div>
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
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
