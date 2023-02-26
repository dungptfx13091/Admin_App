import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { hotelInputs, roomInputs } from "../../formSource";

export const NewHotel = () => {
  const inputs = hotelInputs;
  const title = "Add Hotel";

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <div className="formInput">
                <label htmlFor="image">Images</label>
                <textarea
                  type="image"
                  id="image"
                  style={{ border: "1.2px solid" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="feature">Featured</label>
                <select
                  onChange={(e) => console.log("onchange")}
                  style={{ border: "1.2px solid" }}
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
              <div className="roomInput">
                <label htmlFor="rooms">
                  Rooms
                  {/* <span className="thinText">
                    Hold down the Ctrl (windows) or Command (Mac) button to
                    select multiple options
                  </span> */}
                </label>
                <select
                  id="room"
                  multiple={true}
                  cols="100"
                  rows="10"
                  style={{ border: "1.2px solid" }}
                  onChange={(e) => console.log("onchange")}
                >
                  <option>2 Bed Room</option>
                  <option>1 Bed Room</option>
                  <option>Basement Double Room</option>
                  <option>Superior basement Room</option>
                  <option>Deluxe Room</option>
                  <option>Deluxe Window</option>
                  <option>Premier City View Room</option>
                  <option>Budget Double Room</option>
                  <option>Budget Twin Room</option>
                </select>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewRoom = () => {
  const inputs = roomInputs;
  const title = "Add Room";

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <div className="formInput">
                <label htmlFor="image">Rooms</label>
                <textarea
                  type="image"
                  id="image"
                  style={{ border: "1.2px solid" }}
                  placeholder="give comma between room numbers"
                />
              </div>
              <div className="formInput">
                <label htmlFor="feature">Choose a hotel</label>
                <select
                  onChange={(e) => console.log("onchange")}
                  style={{ border: "1.2px solid" }}
                >
                  <option>HANOI ROYAL PALACE HOTEL 2</option>
                  <option>La Sinfonia del Rey Hotel and Spa</option>
                  <option>May De Ville Legend Hotel & Spa</option>
                  <option>Alagon Saigon Hotel & Spa</option>
                </select>
              </div>
              <div className="roomInput"></div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
