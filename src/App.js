import './App.css';
import React from 'react';
import Sidebar from './sidebar';
import SearchBar from './searchBar';
import SummaryGrid from './SummaryGrid';

function App() {
  const handleSearch = (query) => {
    // Perform your search logic with the 'query' parameter
    console.log('Searching for:', query);
  };

  return (
    <div className="App">
     
      <SearchBar onSearch={handleSearch} />
      <SummaryGrid />
      <Sidebar />
      {/* Display search results here */}
    </div>
  );
}

export default App;
