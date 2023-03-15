import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";

const storedJwt = localStorage.getItem("token");

export const NewHotel = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState([]);
  const [featured, setFeatured] = useState(false);
  const [rooms, setRooms] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      name,
      type,
      city,
      address,
      distance,
      title,
      desc,
      rating,
      image,
      featured,
      rooms
    );
    if (
      !name ||
      !type ||
      !city ||
      !address ||
      !distance ||
      !title ||
      !desc ||
      !rating ||
      !image ||
      !rooms
    ) {
      alert("fill all");
    } else {
      console.log("send request");

      await fetch("http://localhost:5000/admin/hotels/add", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          Authentication: `Bearer ${storedJwt}`,
        },
        body: JSON.stringify({
          name: name,
          type: type,
          city: city,
          address: address,
          distance: distance,
          photos: image,
          desc: desc,
          title: title,
          rating: rating,
          featured: featured,
          rooms: rooms,
        }),
      }).then((res) => {
        return res.json();
      });
      window.location.href = "/hotels";
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add Hotel</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput" key="name">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="My Hotel"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="formInput" key="type">
                <label>Type</label>
                <input
                  type="text"
                  placeholder="hotel"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                />
              </div>
              <div className="formInput" key="city">
                <label>City</label>
                <input
                  type="text"
                  placeholder="New York"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>
              <div className="formInput" key="address">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="elton st, 216"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="formInput" key="Distance">
                <label>Distance from City Center</label>
                <input
                  type="number"
                  placeholder="500"
                  onChange={(e) => {
                    setDistance(e.target.value);
                  }}
                />
              </div>
              <div className="formInput" key="title">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="The best Hotel"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="formInput" key="desc">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Description"
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
              <div className="formInput" key="rating">
                <label>Rating</label>
                <input
                  type="money"
                  placeholder="100"
                  onChange={(e) => {
                    setRating(e.target.value);
                  }}
                />
              </div>

              <div className="formInput" id="image">
                <label htmlFor="image">Images</label>
                <textarea
                  type="image"
                  style={{ border: "1.2px solid" }}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="formInput" id="featured">
                <label htmlFor="featured">Featured</label>
                <select
                  onChange={(e) => setFeatured(e.target.value)}
                  style={{ border: "1.2px solid" }}
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
              <div className="roomInput" id="rooms">
                <label htmlFor="rooms">Rooms</label>
                <select
                  multiple={true}
                  cols="100"
                  rows="10"
                  style={{ border: "1.2px solid" }}
                  onChange={(e) =>
                    setRooms(
                      Array.from(
                        e.target.selectedOptions,
                        (option) => option.value
                      )
                    )
                  }
                >
                  <option value={"6310dd998cfecfd90b30ca28"}>2 Bed Room</option>
                  <option value={"6310e01a8cfecfd90b30ca30"}>1 Bed Room</option>
                  <option value={"6311b2a24a642f01423490d6"}>
                    Basement Double Room
                  </option>
                  <option value={"6311b3944a642f01423490df"}>
                    Superior basement Room
                  </option>
                  <option value={"6311b47b4a642f01423490f4"}>
                    Deluxe Room
                  </option>
                  <option value={"6311be30f2fce6ea18172fa8"}>
                    Deluxe Window
                  </option>
                  <option value={"6311be52f2fce6ea18172faf"}>
                    Premier City View Room
                  </option>
                  <option value={"6311c083f2fce6ea18172fba"}>
                    Budget Double Room
                  </option>
                  <option value={"6311c0a8f2fce6ea18172fc3"}>
                    Budget Twin Room
                  </option>
                </select>
              </div>
              <button onClick={handleSubmit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewRoom = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [maxPeople, setMaxPeople] = useState(0);
  const [roomNumbers, setRoomNumbers] = useState([]);
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const hotels = await (
        await fetch("http://localhost:5000/admin/hotels/list", {
          headers: { Authentication: `Bearer ${storedJwt}` },
        })
      ).json();
      setHotels(hotels);
    };
    dataFetch();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(title, desc, price, maxPeople, roomNumbers);
    if (!title || !desc || !price || !maxPeople || !roomNumbers) {
      alert("fill all");
    } else {
      console.log("send request");

      await fetch("http://localhost:5000/admin/rooms/add", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          Authentication: `Bearer ${storedJwt}`,
        },
        body: JSON.stringify({
          title: title,
          desc: desc,
          price: price,
          maxPeople: maxPeople,
          roomNumbers: roomNumbers,
        }),
      }).then((res) => {
        console.log(res.json);
        return res.json();
      });
      window.location.href = "/rooms";
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add Room</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput" key="title">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="2 bed room"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="formInput" key="desc">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Description"
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
              <div className="formInput" key="price">
                <label>Price</label>
                <input
                  type="number"
                  placeholder="100"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="formInput" key="maxPeople">
                <label>Max People</label>
                <input
                  type="number"
                  placeholder="2"
                  onChange={(e) => {
                    setMaxPeople(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label htmlFor="image">Rooms</label>
                <textarea
                  type="image"
                  id="image"
                  style={{ border: "1.2px solid" }}
                  placeholder="give comma between room numbers"
                  onChange={(e) => {
                    const roomArr = e.target.value.split(".").map((str) => {
                      return Number(str);
                    });
                    setRoomNumbers(roomArr);
                  }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="feature">Choose a hotel</label>
                <select style={{ border: "1.2px solid" }}>
                  {hotels?.map((hotel) => {
                    return <option key={hotel._id}>{hotel.name}</option>;
                  })}
                </select>
              </div>
              <div className="roomInput"></div>
              <button onClick={handleSubmit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
