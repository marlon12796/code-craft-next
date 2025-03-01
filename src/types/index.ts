import { Monaco } from '@monaco-editor/react';
import { Id } from '@api/_generated/dataModel';
import * as monaco from 'monaco-editor';

export interface Theme {
	id: string;
	label: string;
	color: string;
}

export interface Language {
	id: string;
	label: string;
	logoPath: string;
	monacoLanguage: string;
	defaultCode: string;
	pistonRuntime: LanguageRuntime;
}

export interface LanguageRuntime {
	language: string;
	version: string;
}

export interface ExecuteCodeResponse {
	compile?: {
		output: string;
	};
	run?: {
		output: string;
		stderr: string;
	};
}

export interface ExecutionResult {
	code: string;
	output: string;
	error: string | null;
}

export type CodeEditorState = {
	language: string;
	fontSize: number;
	theme: string;
	output: string;
	isRunning: boolean;
	error: string | null;
	editor: monaco.editor.IStandaloneCodeEditor | null; // Correct type for the editor instance
	executionResult: {
		code: string;
		output: string;
		error: string | null;
	} | null;

	getCode: () => string;
	setEditor: (editor: monaco.editor.IStandaloneCodeEditor) => void;
	setTheme: (theme: string) => void;
	setFontSize: (fontSize: number) => void;
	setLanguage: (language: string) => void;
	runCode: () => Promise<void>;
};

export interface Snippet {
	_id: Id<'snippets'>;
	_creationTime: number;
	userId: string;
	language: string;
	code: string;
	title: string;
	userName: string;
}
