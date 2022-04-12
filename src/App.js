import React, { useState, useEffect } from 'react';

import BankForm from './components/BankForm';
import BanksList from './components/BanksList';
import Filter from './components/Filter';

function App() {
  const [banks, setBanks] = useState(
    () => JSON.parse(window.localStorage.getItem('banks')) ?? []
  );
  const [filter, setFilter] = useState('');
  const [editedBank, setEditedBank] = useState('');

  useEffect(() => {
    window.localStorage.setItem('banks', JSON.stringify(banks));
  }, [banks]);

  const addBankData = (data, reset) => {
    editedBank &&
      setBanks(banks => banks.filter(bank => bank.id !== editedBank.id));
    setBanks(banks => [...banks, data]);
    reset();
    setEditedBank('');
  };

  const formSubmitHandler = (data, reset) => {
    banks.find(
      bank => bank.bankName.toLowerCase() === data.bankName.toLowerCase()
    ) && !editedBank
      ? alert('This bank name already in banks')
      : addBankData(data, reset);
  };

  const formCancelHandler = reset => {
    setEditedBank('');
    reset();
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
      <BankForm
        onSubmit={formSubmitHandler}
        onCancel={formCancelHandler}
        editedBank={editedBank}
      />
      <h2>Banks</h2>
      <Filter value={filter} onFilter={e => setFilter(e.currentTarget.value)} />
      <BanksList
        items={filteredbanks}
        onDeleteBank={id => {
          setBanks(banks => banks.filter(bank => bank.id !== id));
        }}
        onEditBank={id => {
          setEditedBank(banks.find(bank => bank.id === id));
        }}
      />
    </div>
  );
}

export default App;
