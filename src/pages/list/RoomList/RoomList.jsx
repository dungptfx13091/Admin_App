import "./roomList.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "../css/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { roomColumns } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const storedJwt = localStorage.getItem("token");

const Datatable = () => {
  const [roomData, setRoomData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const rooms = await (
        await fetch("http://localhost:5000/admin/rooms/list", {
          headers: { Authentication: `Bearer ${storedJwt}` },
        })
      ).json();
      setRoomData(rooms);
    };
    dataFetch();
  }, []);

  const roomRows = roomData?.map((room) => {
    return {
      id: room._id,
      title: room.title,
      desc: room.desc,
      price: room.price,
      maxPeople: room.maxPeople,
    };
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure")) {
      fetch(`http://localhost:5000/admin/rooms/delete?id=${id}`, {
        method: "DELETE",

        headers: { Authentication: `Bearer ${storedJwt}` },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setRoomData(data.rooms);
        });
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/rooms/edit" style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Rooms List
        <Link
          to={{
            pathname: `/rooms/new`,
          }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={roomRows}
        columns={roomColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

const RoomList = () => {
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

export default RoomList;
