import PropTypes from 'prop-types';

import './ContactListItem.module.css';

function ContactListItem({
  id,
  bankName,
  interestRate,
  maxLoan,
  minPayment,
  loanTerm,
  onDeleteContact,
}) {
  return (
    <li>
      <p>
        {bankName} - Interest rate: {interestRate}%; Maximum loan: {maxLoan}$;
        Minimum payment: {minPayment}%; Loan term: {loanTerm} months
      </p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string,
  bankName: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactListItem;
