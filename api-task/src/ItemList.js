import React, { useState, useEffect } from 'react';
// import Api from db.json

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'http://localhost:3000/employees'; // Replace with your actual API URL

    // Make a GET request to the API
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      })
    //   .catch((error) => {
    //     setError(error);
    //   });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Item List</h1>
      {items.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
