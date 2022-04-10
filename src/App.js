import React, { useState, useEffect } from 'react';

import BankForm from './components/BankForm';
import BanksList from './components/BanksList';
import Filter from './components/Filter';

function App() {
  const [banks, setBanks] = useState(
    () => JSON.parse(window.localStorage.getItem('banks')) ?? []
  );
  const [filter, setFilter] = useState('');

  console.log(banks);

  useEffect(() => {
    window.localStorage.setItem('banks', JSON.stringify(banks));
  }, [banks]);

  const formSubmitHandler = data => {
    banks.find(
      bank => bank.bankName.toLowerCase() === data.bankName.toLowerCase()
    )
      ? alert('This bank name already in banks')
      : setBanks(banks => [...banks, data]);
  };

  const filterbanks = () => {
    const filterToLowerCase = filter.toLowerCase();
    return banks.filter(bank =>
      bank.bankName.toLowerCase().includes(filterToLowerCase)
    );
  };

  const filteredbanks = filterbanks();

  return (
    <div className="App">
      <h1>Mortgage calculator</h1>
      <BankForm onSubmit={formSubmitHandler} />
      <h2>banks</h2>
      <Filter value={filter} onFilter={e => setFilter(e.currentTarget.value)} />
      <BanksList
        items={filteredbanks}
        onDeleteContact={id => {
          setBanks(banks => banks.filter(bank => bank.id !== id));
        }}
      />
    </div>
  );
}

export default App;
