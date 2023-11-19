import { FC, JSXElementConstructor, PropsWithChildren } from 'react';

type Props = {
  components: JSXElementConstructor<PropsWithChildren>[];
};

export const Compose: FC<PropsWithChildren<Props>> = ({
  children,
  components,
}) => {
  return (
    <>
      {components.reduceRight(
        (acc, Comp) => (
          <Comp>{acc}</Comp>
        ),
        children,
      )}
    </>
  );
};
