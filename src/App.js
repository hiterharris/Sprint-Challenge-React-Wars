import React, {useState} from 'react';
import Characters from './components/Characters';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');

   const updateSearch = (event) => {
      setSearch(event.target.value);
   }

  return (
    <div className='app'>
      <h1 className='header'>React Wars</h1>
      <div>
          <input value={search} onChange={updateSearch.bind(this)} placeholder='Search' />
      </div>
      <Characters search={search} />
    </div>
  );
}

export default App;
