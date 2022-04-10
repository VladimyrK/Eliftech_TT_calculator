import PropTypes from 'prop-types';

function Input({ name, value, onChange }) {
  return (
    <label>
      {name}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}

export default Input;

Input.propTypes = {
  name: PropTypes.string,
  bankName: PropTypes.string,
  onChange: PropTypes.func,
};
