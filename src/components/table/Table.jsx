import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

const List = () => {
  const storedJwt = localStorage.getItem("token");

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const transactions = await (
        await fetch("http://localhost:5000/admin/transactions/lastest", {
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
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">User</TableCell>
            <TableCell className="tableCell">Hotel</TableCell>
            <TableCell className="tableCell">Room</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.user}</TableCell>
              <TableCell className="tableCell">{row.hotel}</TableCell>
              <TableCell className="tableCell">
                {row.room &&
                  row.room.reduce((acc, cur) => {
                    return acc + "," + cur;
                  })}
              </TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
