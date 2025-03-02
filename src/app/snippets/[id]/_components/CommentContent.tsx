import CodeBlock from './CodeBlock';

interface CommentContentProps {
	content: string;
}

const parseCodeBlock = (part: string): { language: string; code: string } | null => {
	// Expresión regular para extraer el lenguaje y el código
	const match = part.match(/```([\w-]*)\n([\s\S]*?)\n```/);
	if (!match) return null;

	const [, language, code] = match;
	return { language, code };
};

const PlainText = ({ text }: { text: string }) => {
	// Divide el texto por líneas y renderiza cada línea como un párrafo
	return text.split('\n').map((line, lineIdx) => (
		<p key={lineIdx} className='mb-4 text-gray-300 last:mb-0'>
			{line}
		</p>
	));
};

const CommentContent = ({ content }: CommentContentProps) => {
	// Divide el contenido en partes basadas en bloques de código
	const parts = content.split(/(```[\w-]*\n[\s\S]*?\n```)/g);

	return (
		<div className='max-w-none text-white'>
			{parts.map((part, index) => {
				if (!part.startsWith('```')) return <PlainText text={part} key={index} />;
				const parsedBlock = parseCodeBlock(part);
				if (!parsedBlock) return;
				const { language, code } = parsedBlock;
				return <CodeBlock language={language} code={code} key={index} />;
			})}
		</div>
	);
};

export default CommentContent;
