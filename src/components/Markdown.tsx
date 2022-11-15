import React from 'react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atelierDuneDark} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import rehypeRaw from 'rehype-raw';

interface IMarkdown {
  children: string;
}

const Markdown: React.FC<IMarkdown> = ({ children }) => {
  return (
    <ReactMarkdown components={{
      code({ node, inline, className, children, ...props }) {
        console.log(SyntaxHighlighter.supportedLanguages);
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
          <SyntaxHighlighter
            language={match[1]}
            PreTag='div'
            style={atelierDuneDark}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
    }} remarkPlugins={[[remarkGfm, { singleTilde: false }]]} rehypePlugins={[rehypeRaw]}>
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;