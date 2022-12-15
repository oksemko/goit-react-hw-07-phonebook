import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filter-selectors';
import { filterContacts } from 'redux/filter/filter-slice';


import { Container, Label, Input } from './Filter.styled';


export const Filter = ({ title }) => {
  const value = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    const action = filterContacts(value);
    dispatch(action);
  }

  return (
    <Container>
    <Label>
      <span>{title}</span>
        <Input
          onChange={handleChange}
          placeholder="Searching ... "
          type="text"
          name="filter"
          value={value}
      />
      </Label>
      </Container>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
