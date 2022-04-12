import PropTypes from 'prop-types';

import './BanksListItem.module.css';

function BanksListItem({
  id,
  bankName,
  interestRate,
  maxLoan,
  minPayment,
  loanTerm,
  onDeleteBank,
  onEditBank,
}) {
  return (
    <li>
      <p>
        {bankName} - Interest rate: {interestRate}%; Maximum loan: {maxLoan}$;
        Minimum payment: {minPayment}%; Loan term: {loanTerm} months
      </p>
      <button type="button" onClick={() => onDeleteBank(id)}>
        Delete
      </button>
      <button type="button" onClick={() => onEditBank(id)}>
        Edit
      </button>
    </li>
  );
}

BanksListItem.propTypes = {
  id: PropTypes.string,
  bankName: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default BanksListItem;
