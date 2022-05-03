import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './component/App'

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if u use ts
root.render(<App/>);
// ReactDOM.render(<App/>, document.getElementById('app'))                       // dom에 render학 메인 app component, rendering 할 곳
