import { Dispatch, FC, SetStateAction, useState } from 'react';
import cl from './Select.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowUp } from 'react-icons/io';
import { useOutsideClick } from '@/hooks/useOutsideClick';

type Props = {
  currentState: string;
  setCurrentState: Dispatch<SetStateAction<Props['currentState']>>;
  variants: string[];
};

export const Select: FC<Props> = ({
  currentState,
  setCurrentState,
  variants,
}) => {
  const [variantsVisible, setVariantsVisible] = useState<boolean>(false);
  const containerRef = useOutsideClick<HTMLDivElement>(() => {
    setVariantsVisible(false);
  });

  const filteredVariants = variants.filter((v) => v !== currentState);

  return (
    <div ref={containerRef} className={cl.selectContainer}>
      <div
        onClick={() => setVariantsVisible(!variantsVisible)}
        className={cl.selectedVariant}
      >
        <span>{currentState}</span>
        <IoIosArrowUp className={cl.arrowIcon} data-active={variantsVisible} />
      </div>
      <AnimatePresence>
        {variantsVisible && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            onClick={() => setVariantsVisible(false)}
            className={cl.selectVariantsContainer}
          >
            {filteredVariants.map((variant, key) => (
              <span onClick={() => setCurrentState(variant)} key={key}>
                {variant}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
