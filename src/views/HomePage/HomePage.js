import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import BankForm from '../../components/BankForm';
import BanksList from '../../components/BanksList';
import Filter from '../../components/Filter';

import './HomePage.module.css';

function HomePage({ banks, banksSetter }) {
  const [filter, setFilter] = useState('');
  const [editedBank, setEditedBank] = useState('');

  const addBankData = (data, reset) => {
    editedBank &&
      banksSetter(banks => banks.filter(bank => bank.id !== editedBank.id));
    banksSetter(banks => [...banks, data]);
    reset();
    setEditedBank('');
  };

  const onDeleteBank = id =>
    banksSetter(banks => banks.filter(bank => bank.id !== id));

  const onEditBank = id => setEditedBank(banks.find(bank => bank.id === id));

  const formCancelHandler = reset => {
    setEditedBank('');
    reset();
  };

  useEffect(() => {
    window.localStorage.setItem('banks', JSON.stringify(banks));
  }, [banks]);

  const formSubmitHandler = (data, reset) => {
    banks.find(
      bank => bank.bankName.toLowerCase() === data.bankName.toLowerCase()
    ) && !editedBank
      ? alert('This bank name already in banks')
      : addBankData(data, reset);
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
      <h1>Banks management page</h1>
      <BankForm
        onSubmit={formSubmitHandler}
        onCancel={formCancelHandler}
        editedBank={editedBank}
      />
      <h2>Banks</h2>
      <Filter value={filter} onFilter={e => setFilter(e.currentTarget.value)} />
      <BanksList
        items={filteredbanks}
        onDeleteBank={onDeleteBank}
        onEditBank={onEditBank}
      />
    </div>
  );
}

HomePage.propTypes = {
  banks: PropTypes.arrayOf(PropTypes.object),
  banksSetter: PropTypes.func,
};

export default HomePage;
