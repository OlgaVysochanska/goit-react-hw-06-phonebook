import { useSelector, useDispatch } from 'react-redux';

import styles from './Filter.module.css';

import { setFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const filter = useSelector(store => store.filter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    const action = setFilter(e.target.value);
    dispatch(action);
  };

  return (
    <label className={styles.filter}>
      Find contacts by name
      <input type="text" value={filter} onChange={handleFilter} />
    </label>
  );
};
