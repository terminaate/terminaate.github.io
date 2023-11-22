export type ParsedTypingText = {
  id: number;
  text?: string;
  delay?: number;
};

const generateId = () => {
  return Math.random() * Date.now();
};

const getTextAndDelay = (textArray: Array<string | number>, i: number) => {
  if (
    typeof textArray[i] === 'number' &&
    typeof textArray[i + 1] === 'string'
  ) {
    return {
      id: generateId(),
      text: textArray[i + 1] as string,
      delay: textArray[i] as number,
    };
  }
};

const getOnlyText = (textArray: Array<string | number>, i: number) => {
  if (
    typeof textArray[i] === 'string' &&
    typeof textArray[i - 1] !== 'number'
  ) {
    return {
      id: generateId(),
      text: textArray[i] as string,
    };
  }
};

const getOnlyDelay = (textArray: Array<string | number>, i: number) => {
  if (
    typeof textArray[i] === 'number' &&
    typeof textArray[i + 1] !== 'string'
  ) {
    return {
      id: generateId(),
      delay: textArray[i] as number,
    };
  }
};

export const parseTypingText = (
  text: string | (string | number)[],
): ParsedTypingText[] => {
  const parsedText: ParsedTypingText[] = [];
  let textArray: Array<string | number>;

  if (Array.isArray(text)) {
    textArray = text;
  } else {
    textArray = text.split(' ').map((obj) => (Number.isNaN(+obj) ? obj : +obj));
  }

  for (let i = 0; i < textArray.length; i++) {
    const textAndDelay = getTextAndDelay(textArray, i);
    const text = getOnlyText(textArray, i);
    const delay = getOnlyDelay(textArray, i);

    const res = textAndDelay ?? text ?? delay;
    if (!res) {
      continue;
    }

    parsedText.push(res);
  }

  return parsedText;
};
