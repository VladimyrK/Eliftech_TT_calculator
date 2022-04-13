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
  downPayment,
  initialLoan,
  monthPayment,
}) {
  return (
    <li>
      <p>
        {bankName} - Interest rate: {interestRate}%; Maximum loan: {maxLoan}$;
        Minimum payment: {minPayment}$; Loan term: {loanTerm} months;
      </p>
      {downPayment && (
        <p>
          ----- My credit - Down payment: {downPayment}$; Initial loan:{' '}
          {initialLoan}
          $; Month payment: {monthPayment}$
        </p>
      )}
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
  interestRate: PropTypes.string,
  maxLoan: PropTypes.string,
  minPayment: PropTypes.string,
  loanTerm: PropTypes.string,
  downPayment: PropTypes.string,
  initialLoan: PropTypes.string,
  monthPayment: PropTypes.number,
  onDeleteBank: PropTypes.func,
  onEditBank: PropTypes.func,
};

export default BanksListItem;
