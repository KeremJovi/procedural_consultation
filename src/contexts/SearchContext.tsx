import React, {
	ReactNode,
	createContext,
	useContext,
	useMemo,
	useState,
} from 'react';
import { Result } from './typesConfig';

interface SearchContextType {
	searchResults: Result[];
	setSearchResults: React.Dispatch<React.SetStateAction<Result[]>>;
}

const SearchContext = createContext<SearchContextType>({
	searchResults: [],
	setSearchResults: () => {},
});

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [searchResults, setSearchResults] = useState<Result[]>([]);

	const value = useMemo(
		() => ({ searchResults, setSearchResults }),
		[searchResults, setSearchResults]
	);

	return (
		<SearchContext.Provider value={value}>{children}</SearchContext.Provider>
	);
};
