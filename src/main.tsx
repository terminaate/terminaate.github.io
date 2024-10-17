import { createRoot } from 'react-dom/client';
import { App } from '@/App';
import './index.scss';
import { Compose } from '@/components/Compose';
import { RoutingContextProvider } from '@/contexts/RoutingContext';
import { ConfigContextProvider } from '@/contexts/ConfigContext';
import { CursorContextProvider } from '@/contexts/CursorContext';

// @info: fixing touch hover event
document.addEventListener('touchstart', function () {}, true);

document.body.setAttribute('data-cursor', String(import.meta.env.DEV));

const root = createRoot(document.getElementById('root')!);

root.render(
  <Compose
    components={[
      RoutingContextProvider,
      ConfigContextProvider,
      CursorContextProvider,
    ]}
  >
    <App />
  </Compose>,
);
