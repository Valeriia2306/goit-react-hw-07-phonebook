import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../Redux/createFilterSlice';
import { selectFilter } from '../../Redux/selectors';

import { Input, Label } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterContacts(e.target.value));
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

export default Filter;
