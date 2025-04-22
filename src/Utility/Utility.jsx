import { Slide, toast } from "react-toastify";

const getDataFromDB = () => {
  const bookingData = localStorage.getItem("booking");
  return bookingData ? JSON.parse(bookingData) : [];
};

const setDataToDB = (id) => {
  const bookData = getDataFromDB();

  if (bookData.includes(id)) {
    toast.warning("You already booked appointment before!", {
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
    toast.success("Your appointment booked successfully!", {
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
  }
};

export { getDataFromDB, setDataToDB };
