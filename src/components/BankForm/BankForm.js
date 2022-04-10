import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import './BankForm.module.css';

import Input from '../Input';

function ContactForm({ onSubmit }) {
  const [bankName, setBankName] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [maxLoan, setMaxLoan] = useState('');
  const [minPayment, setMinPayment] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [id, setId] = useState(() => nanoid());

  const handleSubmit = e => {
    e.preventDefault();

    setId(nanoid());
    onSubmit({ bankName, interestRate, maxLoan, minPayment, loanTerm, id });
    reset();
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
        name="Bank name"
        value={bankName}
        onChange={e => setBankName(e.currentTarget.value)}
      />
      <Input
        name="Interest rate"
        value={interestRate}
        onChange={e => setInterestRate(e.currentTarget.value)}
      />
      <Input
        name="Maximum loan"
        value={maxLoan}
        onChange={e => setMaxLoan(e.currentTarget.value)}
      />
      <Input
        name="Minimum down payment"
        value={minPayment}
        onChange={e => setMinPayment(e.currentTarget.value)}
      />
      <Input
        name="Loan term"
        value={loanTerm}
        onChange={e => setLoanTerm(e.currentTarget.value)}
      />
      <button>Add bank</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
