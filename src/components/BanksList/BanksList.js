import PropTypes from 'prop-types';

import BanksListItem from '../BanksListItem';
import './BanksList.module.css';

const BanksList = ({ items, onDeleteBank, onEditBank }) => {
  return (
    <ul>
      {items.map(
        ({ id, bankName, interestRate, maxLoan, minPayment, loanTerm }) => (
          <BanksListItem
            key={id}
            id={id}
            bankName={bankName}
            interestRate={interestRate}
            maxLoan={maxLoan}
            minPayment={minPayment}
            loanTerm={loanTerm}
            onDeleteBank={onDeleteBank}
            onEditBank={onEditBank}
          />
        )
      )}
    </ul>
  );
};

BanksList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDeleteContact: PropTypes.func,
};

export default BanksList;
