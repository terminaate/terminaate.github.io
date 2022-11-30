import React, { useLayoutEffect, useState } from 'react';
import cl from './CodeFragment.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface ICodeFragment {
  text: string;
}

const CodeFragment: React.FC<ICodeFragment> = ({ text }) => {
  return (
    <div className={cl.codeContainer}>
      <SyntaxHighlighter
        language={'javascript'}
        style={atelierDuneDark}
        PreTag={'span'}
        customStyle={{background: "none", padding: 0}}
      >
        {text}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeFragment;
