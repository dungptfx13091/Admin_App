import { useEffect } from "react";

import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/login/Login";

import UserList from "./pages/list/UserList/UserList";
import HotelList from "./pages/list/HotelList/HotelList";
import RoomList from "./pages/list/RoomList/RoomList";
import TransactionList from "./pages/list/TransactionList/TransactionList";

import Single from "./pages/single/Single";

import { NewHotel, NewRoom } from "./pages/new/New";
import { EditHotel, EditRoom } from "./pages/edit/Edit";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const handleEdit = (props) => {
    console.log(props);
  };
  const storedJwt = window.localStorage.getItem("token");
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("http://localhost:5000/admin/auth", {
          headers: { Authentication: `Bearer ${storedJwt}` },
        })
      ).json();
      setAuth(data.authentication);
    };
    dataFetch();
  }, []);
  if (!auth)
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  else
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="login" element={<Login />} />
              <Route index element={<Dashboard />} />
              <Route path="users">
                <Route index element={<UserList />} />
                <Route path=":userId" element={<Single />} />
              </Route>
              <Route path="hotels">
                <Route index element={<HotelList />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<NewHotel />} />
                <Route
                  path="edit"
                  element={<EditHotel handleEdit={handleEdit} />}
                />
              </Route>
              <Route path="rooms">
                <Route index element={<RoomList />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<NewRoom />} />
                <Route path="edit" element={<EditRoom />} />
              </Route>
              <Route path="transactions">
                <Route index element={<TransactionList />} />
                <Route path=":productId" element={<Single />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
