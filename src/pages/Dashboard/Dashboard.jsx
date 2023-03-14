import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Dashboard.scss";
import Widget from "../../components/widget/Widget";

import Table from "../../components/table/Table";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const storedJwt = window.localStorage.getItem("token");

  const [widget, setWidget] = useState(false);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("http://localhost:5000/admin/dashboard", {
          headers: { Authentication: `Bearer ${storedJwt}` },
        })
      ).json();
      setWidget(data);
    };
    dataFetch();
  }, []);
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" amount={widget.user} />
          <Widget type="order" amount={widget.order} />
          <Widget type="earning" amount={widget.earnings} />
          <Widget type="balance" amount={widget.balance} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
