import { useContext } from 'react';

import { SearchContext } from 'core/contexts/searchContext';

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('hook must be used within an SearchProvider');
  }
  return context;
};
