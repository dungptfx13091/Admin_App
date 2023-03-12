import "./hotelList.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "../css/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { hotelColumns } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const storedJwt = localStorage.getItem("token");

const Datatable = () => {
  const [hotelData, setHotelData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const hotels = await (
        await fetch("http://localhost:5000/admin/hotels/list", {
          headers: { Authentication: `Bearer ${storedJwt}` },
        })
      ).json();
      setHotelData(hotels);
    };
    dataFetch();
  }, []);

  const hotelRows = hotelData?.map((hotel) => {
    return {
      id: hotel._id,
      name: hotel.name,
      type: hotel.type,
      title: hotel.name,
      city: hotel.city,
    };
  });

  const handleEdit = (id) => {
    console.log(hotelRows.filter((item) => item.id === id));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure")) {
      fetch(`http://localhost:5000/admin/hotels/delete?id=${id}`, {
        method: "DELETE",
        headers: { Authentication: `Bearer ${storedJwt}` },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if (!data.canDelete) alert("Hotel is being booked");
          else if (!data.isDeleted) alert("Hotel Not Found!");
          else setHotelData(data.hotels);
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
            <Link to="/hotels/edit" style={{ textDecoration: "none" }}>
              <div
                className="viewButton"
                onClick={() => handleEdit(params.row.id)}
              >
                Edit
              </div>
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
        Hotels List
        <Link
          to={{
            pathname: `/hotels/new`,
          }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={hotelRows}
        columns={hotelColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

const HotelList = (handleEdit) => {
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

export default HotelList;
