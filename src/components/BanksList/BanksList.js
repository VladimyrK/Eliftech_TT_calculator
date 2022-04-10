import PropTypes from 'prop-types';

import ContactListItem from '../ContactListItem';
import './BanksList.module.css';

const BanksList = ({ items, onDeleteContact }) => {
  return (
    <ul>
      {items.map(
        ({ id, bankName, interestRate, maxLoan, minPayment, loanTerm }) => (
          <ContactListItem
            key={id}
            id={id}
            bankName={bankName}
            interestRate={interestRate}
            maxLoan={maxLoan}
            minPayment={minPayment}
            loanTerm={loanTerm}
            onDeleteContact={onDeleteContact}
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
