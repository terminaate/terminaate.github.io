import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import cl from './ContextMenu.module.scss';
import useOutsideClick from '@/hooks/useOutsideClick';

interface IContextMenu {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
}

const ContextMenu: FC<IContextMenu> = ({ children, setState, state }) => {
  const contextMenuRef = useRef(null);
  const location = useLocation();
  const oldState = useRef<boolean>(state);

  useEffect(() => {
    oldState.current = state;
  }, [state]);

  useEffect(() => {
    setState(oldState.current);
  }, [location.pathname]);

  const hideMenu = () => {
    setState(false);
    oldState.current = false;
  };

  useOutsideClick(contextMenuRef, hideMenu);

  return (
    <div ref={contextMenuRef} onClick={hideMenu} data-active={state} className={cl.contextMenuContainer}>
      {children}
    </div>
  );
};

export default ContextMenu;