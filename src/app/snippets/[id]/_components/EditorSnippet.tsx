'use client';
import { Editor } from '@monaco-editor/react';
import { defineMonacoThemes, LANGUAGE_CONFIG } from '@/app/(root)/_constants';
import { GetSnippetsType } from '@api/snippets';
export const EditorSnippet = ({ snippet }: { snippet: GetSnippetsType[0] }) => {
	return (
		<Editor
			height='600px'
			language={LANGUAGE_CONFIG[snippet.language].monacoLanguage}
			value={snippet.code}
			theme='vs-dark'
			beforeMount={defineMonacoThemes}
			options={{
				minimap: { enabled: false },
				fontSize: 16,
				readOnly: true,
				automaticLayout: true,
				scrollBeyondLastLine: false,
				padding: { top: 16 },
				renderWhitespace: 'selection',
				fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
				fontLigatures: true,
			}}
		/>
	);
};
