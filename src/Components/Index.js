import React, { useEffect, useState } from 'react';
import './index.css';

const Index = () => {
  const [users, setUsers] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const finalData = await response.json();
    setUsers(finalData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSearch = () => {
    const result = users.filter((user) => user.id === parseInt(searchId));
    setSearchResults(result);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container">
   
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="cardContainer">
        {searchResults.length > 0 ? (
          searchResults.map((curElem) => (
            <div className="card_item" key={curElem.id}>
              <div className="userUrl">ID: {curElem.id}</div>
              <div className="userName">Name: {curElem.name}</div>
              <div className="userUrl">Username: {curElem.username}</div>
              <div className="userUrl">Email: {curElem.email}</div>
              <div className="userUrl">Phone: {curElem.phone}</div>
              <div className="userUrl">Address: {curElem.address.street}</div>
            </div>
          ))
          ) : (
            users.map((curElem) => (
              <div className="card_item" key={curElem.id}>
              <div className="userUrl">ID: {curElem.id}</div>
              <div className="userName">Name: {curElem.name}</div>
              <div className="userUrl">Username: {curElem.username}</div>
              <div className="userUrl">Email: {curElem.email}</div>
              <div className="userUrl">Phone: {curElem.phone}</div>
              <div className="userUrl">Address: {curElem.address.street}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Index;
