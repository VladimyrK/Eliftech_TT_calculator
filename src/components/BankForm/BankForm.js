import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import './BankForm.module.css';

import Input from '../Input';

function ContactForm({ onSubmit, onCancel, editedBank }) {
  const [bankName, setBankName] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [maxLoan, setMaxLoan] = useState('');
  const [minPayment, setMinPayment] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [id, setId] = useState(() => nanoid());

  useEffect(() => {
    if (editedBank) {
      setBankName(editedBank.bankName);
      setInterestRate(editedBank.interestRate);
      setMaxLoan(editedBank.maxLoan);
      setMinPayment(editedBank.minPayment);
      setLoanTerm(editedBank.loanTerm);
    }
  }, [editedBank]);

  const handleSubmit = e => {
    e.preventDefault();

    setId(nanoid());
    onSubmit(
      { bankName, interestRate, maxLoan, minPayment, loanTerm, id },
      reset
    );
  };

  const reset = () => {
    setBankName('');
    setInterestRate('');
    setMaxLoan('');
    setMinPayment('');
    setLoanTerm('');
    setId(nanoid());
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="My bank"
        name="Bank name"
        value={bankName}
        onChange={e => setBankName(e.currentTarget.value)}
      />
      <Input
        type="number"
        placeholder="%"
        name="Interest rate"
        value={interestRate}
        onChange={e => setInterestRate(e.currentTarget.value)}
      />
      <Input
        type="number"
        placeholder="$"
        name="Maximum loan"
        value={maxLoan}
        onChange={e => setMaxLoan(e.currentTarget.value)}
      />
      <Input
        type="number"
        placeholder="$"
        name="Minimum down payment"
        value={minPayment}
        onChange={e => setMinPayment(e.currentTarget.value)}
      />
      <Input
        type="number"
        placeholder="Months"
        name="Loan term"
        value={loanTerm}
        onChange={e => setLoanTerm(e.currentTarget.value)}
      />

      {editedBank ? (
        <>
          <button type="button" onClick={() => onCancel(reset)}>
            Cancel
          </button>
          <button type="submit">Edit</button>
        </>
      ) : (
        <button type="submit">Add bank</button>
      )}
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
