import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './CalculatorForm.module.css';

import Input from '../Input';

function CalculatorForm({ banks, onSubmit, onCancel, editedBank }) {
  const [downPayment, setDownPayment] = useState('');
  const [initialLoan, setInitialLoan] = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  useEffect(() => {
    if (editedBank) {
      setDownPayment(editedBank.downPayment);
      setInitialLoan(editedBank.initialLoan);
      setSelectedBank(editedBank.bankName);
    }
  }, [editedBank]);

  const handleSubmit = e => {
    e.preventDefault();

    if (selectedBank) {
      const currentBank = banks.find(bank => bank.bankName === selectedBank);
      const { interestRate, loanTerm, bankName, maxLoan, minPayment, id } =
        currentBank;
      const monthPayment =
        (initialLoan *
          (interestRate / 100 / 12) *
          Math.pow(1 + interestRate / 100 / 12, loanTerm)) /
        (Math.pow(1 + interestRate / 100 / 12, loanTerm) - 1);

      onSubmit({
        bankName,
        interestRate,
        maxLoan,
        minPayment,
        loanTerm,
        id,
        monthPayment,
        downPayment,
        initialLoan,
      });
      reset();
    } else alert('Please, select bank from drop-down list in the form');
  };

  const reset = () => {
    setDownPayment('');
    setInitialLoan('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        required
        defaultValue="default"
        onChange={e => setSelectedBank(e.currentTarget.value)}
      >
        <option value="default" disabled>
          Select bank
        </option>
        {banks.map(bank => (
          <option key={bank.id} value={bank.bankName}>
            {bank.bankName}
          </option>
        ))}
      </select>
      <Input
        type="number"
        placeholder="$"
        name="Initial loan"
        value={initialLoan}
        onChange={e => setInitialLoan(e.currentTarget.value)}
      />
      <Input
        type="number"
        placeholder="$"
        name="Down payment"
        value={downPayment}
        onChange={e => setDownPayment(e.currentTarget.value)}
      />
      {editedBank ? (
        <>
          <button type="button" onClick={() => onCancel(reset)}>
            Cancel
          </button>
          <button type="submit">Edit</button>
        </>
      ) : (
        <button type="submit">Calculate</button>
      )}
    </form>
  );
}

CalculatorForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  banks: PropTypes.array,
};

export default CalculatorForm;
