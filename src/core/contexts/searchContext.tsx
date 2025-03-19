import React, { createContext, ReactNode, useState } from 'react';

interface SearchContextProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchContextProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>('');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
