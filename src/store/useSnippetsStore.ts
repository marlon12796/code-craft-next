import { type GetSnippetsType } from '@api/snippets';
import { create } from 'zustand';
type ViewModeTye = 'grid' | 'list';
type SnippetsState = {
	snippets: GetSnippetsType;
	searchQuery: string;
	selectedLanguage: string | null;
	view: ViewModeTye;
	searchSnippets: (query: string) => void;
	chooseLanguage: (language: string | null) => void;
	changeView: (mode: ViewModeTye) => void;
	loadSnippets: (snippets: GetSnippetsType) => void;
};
const useSnippetsStore = create<SnippetsState>((set) => ({
	snippets: [],
	searchQuery: '',
	selectedLanguage: null,
	view: 'grid',
	searchSnippets: (query) => set({ searchQuery: query }),
	chooseLanguage: (language) => set({ selectedLanguage: language }),
	changeView: (mode) => set({ view: mode }),
	loadSnippets: (snippets) => set({ snippets }),
}));

export default useSnippetsStore;
