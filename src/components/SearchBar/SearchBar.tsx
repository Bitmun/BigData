import styles from './styles.module.scss';

import { setQuery } from 'core/store/features/searchSlice';
import { debounce, sanitizeInput } from 'core/utils/search/searchUtils';
import { useDispatch } from 'react-redux';

export const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = debounce((input: string) => {
    if (input.length === 0) {
      dispatch(setQuery(''));
    } else {
      dispatch(setQuery(input.trim()));
    }
  }, 700);

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.searchInput}
        onChange={(e) => {
          const sanitizedValue = sanitizeInput(e.target.value);
          handleSearchChange(sanitizedValue);
        }}
        placeholder="Search character..."
      />
    </div>
  );
};
