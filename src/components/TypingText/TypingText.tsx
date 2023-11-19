import { FC, HTMLAttributes, useEffect, useState } from 'react';
import cl from './TypingText.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { parseTypingText } from './utils/parseTypingText';
import { wait } from '@/utils/wait';

type Props = HTMLAttributes<HTMLSpanElement> & {
  text: string | Array<string | number>;
  defaultDelay?: number;
  containerClassName?: string;
  onEnd?: () => void;
};

type RenderedWord = {
  id: number;
  text: string;
};

export const TypingText: FC<Props> = ({
  text,
  defaultDelay = 500,
  containerClassName = '',
  onEnd = () => {},
  ...props
}) => {
  const [renderedWords, setRenderedWords] = useState<RenderedWord[]>([]);

  const renderWords = async () => {
    const formattedText = parseTypingText(text);

    for (const obj of formattedText) {
      await wait(obj.delay ?? defaultDelay);

      if (obj.text !== undefined) {
        setRenderedWords((prevState) => [
          ...prevState,
          { id: obj.id, text: obj.text! },
        ]);
      }
    }

    onEnd();
  };

  useEffect(() => {
    void renderWords();
  }, []);

  return (
    <motion.div
      layout={'position'}
      className={classNames(cl.typingTextContainer, containerClassName)}
    >
      {renderedWords.map((obj) => (
        <span {...props} key={obj.id}>
          {obj.text}
        </span>
      ))}
    </motion.div>
  );
};
