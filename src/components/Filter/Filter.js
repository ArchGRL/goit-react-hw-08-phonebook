import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';
import { FilterWrapper } from './Filter.styled';
import { Label, Input } from '../ContactForm/ContactForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterWrapper>
      <Label>
        Search contact
        <br />
        <Input type="text" value={filter} onChange={handleFilterChange} />
      </Label>
    </FilterWrapper>
  );
};
