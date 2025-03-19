import { useSearchContext } from 'core/hooks/useSearch';
import { debounce, sanitizeInput } from 'core/utils/search/searchUtils';

export const SearchBar = () => {
  const { setQuery } = useSearchContext();

  const handleSearchChange = debounce((input: string) => {
    if (input.length === 0) {
      setQuery('');
    } else {
      setQuery(input.trim());
    }
  }, 700);

  return (
    <div>
      <input
        onChange={(e) => {
          const sanitizedValue = sanitizeInput(e.target.value);
          handleSearchChange(sanitizedValue);
        }}
      />
    </div>
  );
};
