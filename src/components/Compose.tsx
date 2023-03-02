import { FC, JSXElementConstructor, PropsWithChildren } from 'react';

interface IContextsProviders {
  components: JSXElementConstructor<PropsWithChildren>[];
}

const Compose: FC<PropsWithChildren<IContextsProviders>> = ({
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

export default Compose;
