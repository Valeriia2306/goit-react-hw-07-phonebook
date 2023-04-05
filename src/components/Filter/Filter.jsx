import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../Redux/createFilterSlice';
import { getFilter } from '../../Redux/selectors';

import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterContacts(e.target.value.toLowerCase()));
  };

  return (
    <Label>
      <span>Find contacts by name</span>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
