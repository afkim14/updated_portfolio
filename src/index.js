import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from 'hookrouter';
import { ImageColor, Solver } from './ImageColor';
import './index.css';
import { hexToRgb } from './Helpers';
import MainHome from './components/MainHome';
import Deeplocal from './components/Deeplocal';
import Monaco from './components/Monaco';
import NotFoundPage from './components/NotFoundPage';
import * as serviceWorker from './serviceWorker';

if (new Date().getHours() < 16) {
    import('./LightStyleSheet.css');
} else {
    import('./DarkStyleSheet.css');
}

const imageColorHex = '#8e8d8a';
const imageColorHoverHex = new Date().getHours() < 16 ? '#e85a4f' : '#388d7d';

const imgRGB = hexToRgb(imageColorHex);
const imageColor = new ImageColor(imgRGB[0], imgRGB[1], imgRGB[2]);
const imageSolver = new Solver(imageColor);
const imageResult = imageSolver.solve();

const imgHoverRGB = hexToRgb(imageColorHoverHex);
const imageColorHover = new ImageColor(imgHoverRGB[0], imgHoverRGB[1], imgHoverRGB[2]);
const imageHoverSolver = new Solver(imageColorHover);
const imageHoverResult = imageHoverSolver.solve();

const routes = {
    '/': () => <MainHome imageColorFilter={imageResult.filter} imageColorHoverFilter={imageHoverResult.filter} />,
    '/deeplocal': () => <Deeplocal />,
    '/monaco': () => <Monaco />,
};

function App() {
    const routeResult = useRoutes(routes) || <NotFoundPage />;
    return routeResult;
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
