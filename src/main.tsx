import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import { HooksApp } from './HooksApp'
// import { CounterApp } from './useState/CounterApp';
// import { CounterWithCustomHook } from './useState/CounterWithCustomHook';
// import { SimpleForm } from './useEffect/SimpleForm';
// import { FormWithCustomHook } from './useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './others/MultipleCustomHooks';
// import { FocusScreen } from './useRef/FocusScreen';
// import { Memorize } from './useMemo/Memorize';
// import { CallbackHook } from './useCallback/CallbackHook';
import { Padre } from './useCallback/Padre';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Memorize/> */}
    {/* <CallbackHook /> */}
    <Padre />
  </React.StrictMode>
);