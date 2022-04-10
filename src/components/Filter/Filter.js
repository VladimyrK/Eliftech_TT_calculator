import PropTypes from 'prop-types';

import './Filter.module.css';

const Filter = ({ value, onFilter }) => {
  return (
    <label>
      Find banks by name
      <input type="text" name="filter" value={value} onChange={onFilter} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func,
};

export default Filter;
