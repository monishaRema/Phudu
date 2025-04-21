const getDataFromDB = () => {
    const bookingData = localStorage.getItem('booking')
    return bookingData ? JSON.parse(bookingData) : []
}

const setDataToDB = (id) => {

 const bookData = getDataFromDB()
 
     if(bookData.includes(id)){
         alert(id  + ' Data already exists')
     }else{
         bookData.push(id)
         const data = JSON.stringify(bookData)
         localStorage.setItem('booking',data)
     }

}

export { getDataFromDB, setDataToDB }