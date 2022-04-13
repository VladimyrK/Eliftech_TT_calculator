import React, { useState, useEffect } from 'react';

import CalculatorForm from 'components/CalculatorForm/CalculatorForm';
import BanksList from '../../components/BanksList';

import './Calculator.module.css';

export default function Calculator({ banks }) {
  const [editedBank, setEditedBank] = useState('');
  const [myBanks, setMyBanks] = useState(
    () => JSON.parse(window.localStorage.getItem('myBanks')) ?? []
  );

  useEffect(() => {
    window.localStorage.setItem('myBanks', JSON.stringify(myBanks));
  }, [myBanks]);

  const addBankData = data => {
    editedBank &&
      setMyBanks(myBanks => myBanks.filter(bank => bank.id !== editedBank.id));
    setMyBanks(myBanks => [...myBanks, data]);
    setEditedBank('');
  };

  const formSubmitHandler = data => {
    if (
      myBanks.find(
        bank => bank.bankName.toLowerCase() === data.bankName.toLowerCase()
      ) &&
      !editedBank
    ) {
      alert('This bank name already in banks');
    } else if (+data.maxLoan < +data.initialLoan) {
      alert(
        `Your initial loan is higher then maximum loan (${data.maxLoan}$) of this bank`
      );
    } else if (+data.minPayment > +data.downPayment) {
      alert(
        `Your down payment is lower then minimum down payment (${data.minPayment}$) of this bank`
      );
    } else {
      addBankData(data);
    }
  };

  const formCancelHandler = reset => {
    setEditedBank('');
    reset();
  };

  const onDeleteBank = id =>
    setMyBanks(myBanks => myBanks.filter(bank => bank.id !== id));

  const onEditBank = id => setEditedBank(myBanks.find(bank => bank.id === id));

  return (
    <>
      <h1>Mortgage calculator page</h1>
      <CalculatorForm
        banks={banks}
        onCancel={formCancelHandler}
        onSubmit={formSubmitHandler}
        editedBank={editedBank}
      />
      <h2>My banks</h2>
      <BanksList
        items={myBanks}
        onDeleteBank={onDeleteBank}
        onEditBank={onEditBank}
      />
    </>
  );
}
