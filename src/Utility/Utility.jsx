
import { Slide, toast } from "react-toastify";



const getDataFromDB = () => {
  const bookingData = localStorage.getItem("booking");
  return bookingData ? JSON.parse(bookingData) : [];
};

const setDataToDB = (id, name = '', navigation) => {
  
  const bookData = getDataFromDB();

  if (bookData.includes(id)) {
    toast.warning(`You already have an appointment with ${name}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
      transition: Slide,
    });
  } else {
    bookData.push(id);
    const data = JSON.stringify(bookData);
    localStorage.setItem("booking", data);
    toast.success(`You have successfully booked an appointment with ${name} !`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
      transition: Slide,
    });
    navigation("/my-bookings");
  }
};

export { getDataFromDB, setDataToDB };
