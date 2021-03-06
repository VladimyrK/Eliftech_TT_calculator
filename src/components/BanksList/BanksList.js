import PropTypes from 'prop-types';

import BanksListItem from '../BanksListItem';
import './BanksList.module.css';

function BanksList({ items, onDeleteBank, onEditBank }) {
  return (
    <ul>
      {items.map(
        ({
          id,
          bankName,
          interestRate,
          maxLoan,
          minPayment,
          loanTerm,
          monthPayment,
          downPayment,
          initialLoan,
        }) => (
          <BanksListItem
            key={id}
            id={id}
            bankName={bankName}
            interestRate={interestRate}
            maxLoan={maxLoan}
            minPayment={minPayment}
            loanTerm={loanTerm}
            monthPayment={monthPayment}
            downPayment={downPayment}
            onDeleteBank={onDeleteBank}
            onEditBank={onEditBank}
            initialLoan={initialLoan}
          />
        )
      )}
    </ul>
  );
}

BanksList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onDeleteBank: PropTypes.func,
  onEditBank: PropTypes.func,
};

export default BanksList;
