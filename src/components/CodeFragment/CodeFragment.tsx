import React from 'react';
import cl from './CodeFragment.module.scss';
import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import { paraisoDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface ICodeFragment extends Partial<SyntaxHighlighterProps> {
  text: string;
}

const CodeFragment: React.FC<ICodeFragment> = ({ text, ...props }) => {
  return (
    <div className={cl.codeContainer}>
      <SyntaxHighlighter
        {...props}
        language={'javascript'}
        PreTag={'span'}
        wrapLines={true}
        style={paraisoDark}
        customStyle={{ background: 'none', opacity: 0.8 }}
      >
        {text}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeFragment;
