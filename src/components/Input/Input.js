import PropTypes from 'prop-types';

function Input({ type, placeholder = '', name, value, onChange }) {
  return (
    <label>
      {name}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
