export const userColumns = [
  { field: "id", headerName: "ID", width: 170 },
  {
    field: "user",
    headerName: "User",
    width: 150,
  },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 190,
  },
  {
    field: "email",
    headerName: "Email",
    width: 220,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 150,
  },

  {
    field: "isAdmin",
    headerName: "Admin",
    width: 110,
  },
];

//Room List data
export const userRows = [
  {
    id: "5njfdh4793nj3",
    user: "Dan",
    email: "2snow@gmail.com",
    age: 42,
    status: "passive",
  },
  {
    id: "5n5jf9dh843j53",
    user: "John",
    email: "3snow@gmail.com",
    age: 45,
    status: "pending",
  },
  {
    id: "5nf8djfh7w35t4",
    user: "John",
    email: "4snow@gmail.com",
    age: 16,
    status: "active",
  },
  {
    id: "5n5jf9d54j23b7",
    user: "David",
    email: "5snow@gmail.com",
    age: 32,
    status: "passive",
  },
  {
    id: "5n5jmeru43i6n3",
    user: "John",
    email: "6snow@gmail.com",
    age: 44,
    status: "passive",
  },
  {
    id: "5n543nfenu50m",
    user: "John",
    email: "7snow@gmail.com",
    age: 36,
    status: "active",
  },
  {
    id: "5n54n8k65n203v",
    user: "Peter",
    email: "8snow@gmail.com",
    age: 65,
    status: "pending",
  },
  {
    id: "5n4i92n8jb83f",
    user: "David",
    email: "2snow@gmail.com",
    age: 65,
    status: "active",
  },
];

export const hotelColumns = [
  { field: "id", headerName: "ID", width: 190 },
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },
  {
    field: "type",
    headerName: "Type",
    width: 90,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
  },

  {
    field: "title",
    headerName: "Title",
    width: 250,
  },
];

export const roomColumns = [
  { field: "id", headerName: "ID", width: 190 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 400,
  },
  {
    field: "price",
    headerName: "Price",
    width: 90,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];

//Room List data
export const roomRows = [
  {
    id: "6311a54g54nb36n31",
    title: "2 Bed Room",
    desc: "King size bed",
    price: 200,
    maxPeople: 3,
  },
  {
    id: "6311a54g54mr7882j",
    title: "1 Bed Room",
    desc: "1 Bathroom",
    price: 150,
    maxPeople: 2,
  },
  {
    id: "6311a54g5959hfd45",
    title: "Basement Double Room",
    desc: "Welcome drink, Coffee &tea, Express check-in, Free Prem...",
    price: 600,
    maxPeople: 2,
  },
  {
    id: "6311a54gui3h45hufn3",
    title: "Superior basement Room",
    desc: "Free breakfast for 2",
    price: 700,
    maxPeople: 2,
  },
  {
    id: "6311a54gui459jfy23",
    title: "Deluxe Room",
    desc: "Welcome drink, Coffee &tea, Express check-in, Free Prem...",
    price: 700,
    maxPeople: 2,
  },
  {
    id: "6311a54gui3h5huu33",
    title: "Deluxe Window",
    desc: "Welcome drink, Coffee &tea, Express check-in, Free Wifi,...",
    price: 300,
    maxPeople: 2,
  },
  {
    id: "6311a54gufjd39592",
    title: "Premier City View Room",
    desc: "Extra low price!(non-refundable)",
    price: 425,
    maxPeople: 2,
  },
  {
    id: "6311a54gujjr834",
    title: "Budget Double Room",
    desc: "Pay nothing until September 04, 2022",
    price: 350,
    maxPeople: 2,
  },
  {
    id: "6311a54gt49jfj3",
    title: "Budget Twin Room",
    desc: "Free cancellation before September 06, 2022",
    price: 350,
    maxPeople: 2,
  },
];

export const transactionColumns = [
  { field: "id", headerName: "ID", width: 160 },
  {
    field: "user",
    headerName: "User",
    width: 140,
  },
  {
    field: "hotel",
    headerName: "Hotel",
    width: 240,
  },
  {
    field: "room",
    headerName: "Room",
    width: 110,
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 85,
  },
  {
    field: "method",
    headerName: "Payment method",
    width: 130,
  },
  {
    field: "status",
    headerName: "Status",
    width: 90,
    renderCell: (cellValues) => {
      switch (cellValues.value) {
        case "Booked": {
          return (
            <div
              style={{
                padding: "5px",
                borderRadius: "5px",
                color: "green",
                backgroundColor: "rgba(240, 152, 89, 0.5)",
              }}
            >
              {cellValues.value}
            </div>
          );
        }
        case "Checkin": {
          return (
            <div
              style={{
                padding: "5px",
                borderRadius: "5px",
                color: "green",
                backgroundColor: "rgba(0, 128, 0, 0.5)",
              }}
            >
              {cellValues.value}
            </div>
          );
        }
        case "Checkout": {
          return (
            <div
              style={{
                padding: "5px",
                borderRadius: "5px",
                color: "green",
                backgroundColor: "rgba(149, 142, 163, 0.5)",
              }}
            >
              {cellValues.value}
            </div>
          );
        }
        default:
          return <div></div>;
      }
    },
  },
];

//Room List data
export const transactionRows = [
  {
    id: "5njfdh4793nj3",
    user: "Dan",
    hotel: "May De Ville Legend Hotel & Spa",
    room: [304, 305],
    date: "12/09/2022-14/09/2022",
    price: 700,
    method: "Credit Card",
    status: "Booked",
  },
  {
    id: "5n5jf9dh843j53",
    user: "John",
    hotel: "Alagon Saigon Hotel & Spa",
    room: [101, 201],
    date: "1/10/2022-3/10/2022",
    price: 2100,
    method: "Credit Card",
    status: "Booked",
  },
  {
    id: "5nf8djfh7w35t4",
    user: "John",
    hotel: "La Sinfonia del Rey Hotel and Spa",
    room: [801],
    date: "1/09/2022-5/09/2022",
    price: 1500,
    method: "Cash",
    status: "Checkin",
  },
  {
    id: "5n5jf9d54j23b7",
    user: "David",
    hotel: "Alagon Saigon Hotel & Spa",
    room: [201],
    date: "2/09/2022-4/09/2022",
    price: 700,
    method: "Cash",
    status: "Checkin",
  },
  {
    id: "5n5jmeru43i6n3",
    user: "John",
    hotel: "Alagon Saigon Hotel & Spa",
    room: [201],
    date: "9/3/2022-13/3/2022",
    price: 1400,
    method: "Cash",
    status: "Checkout",
  },
  {
    id: "5n543nfenu50m",
    user: "John",
    hotel: "HANOI ROYAL PALACE HOTEL 2",
    room: [101, 103],
    date: "1/1/2020-3/1/2020",
    price: 300,
    method: "Credit Card",
    status: "Checkout",
  },
  {
    id: "5n54n8k65n203v",
    user: "Peter",
    hotel: "HANOI ROYAL PALACE HOTEL 2",
    room: [201],
    date: "9/2/2019-11/2/2019",
    price: 700,
    method: "Credit Card",
    status: "Checkout",
  },
  {
    id: "5n4i92n8jb83f",
    user: "David",
    hotel: "Alagon Saigon Hotel & Spa",
    room: [201],
    date: "9/2/2019-11/2/2019",
    price: 700,
    method: "Credit Card",
    status: "Checkout",
  },
];
