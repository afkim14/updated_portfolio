import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from 'hookrouter';
import './index.css';
import { hexToRgb } from './Helpers';
import MainHome from './components/MainHome';
import ProjectPage from './components/ProjectPage';
import Deeplocal from './components/Deeplocal';
import Monaco from './components/Monaco';
import Taggle from './components/Taggle';
import Capsule from './components/Capsule';
import AtomicHabits from './components/AtomicHabits';
import NuHub from './components/NuHub';
import DailyUi from './components/DailyUi';
import NotFoundPage from './components/NotFoundPage';
import * as serviceWorker from './serviceWorker';

// Secondary Page
import IntroPage from './components/IntroPage';
import WorkPage from './components/WorkPage';
import SideWorkPage from './components/SideWorkPage';
import About from './components/About';
import Conclusion from './components/Conclusion';

const { ImageColor, Solver } = require('./ImageColor');

if (new Date().getHours() < 18) {
    import('./LightStyleSheet.css');
} else {
    import('./DarkStyleSheet.css');
}

const imageColorHex = '#8e8d8a';
const imageColorHoverHex = new Date().getHours() < 18 ? '#0d8e78' : '#388d7d';

const imgRGB = hexToRgb(imageColorHex);
const imageColor = new ImageColor(imgRGB[0], imgRGB[1], imgRGB[2]);
const imageSolver = new Solver(imageColor);
const imageResult = imageSolver.solve();

const imgHoverRGB = hexToRgb(imageColorHoverHex);
const imageColorHover = new ImageColor(imgHoverRGB[0], imgHoverRGB[1], imgHoverRGB[2]);
const imageHoverSolver = new Solver(imageColorHover);
const imageHoverResult = imageHoverSolver.solve();

const routes = {
    '/': () => <IntroPage />,
    '/skip': () => <IntroPage skipIntro={true} />,
    '/work': () => <WorkPage />,
    '/work/skip': () => <WorkPage skipIntro={true}  />,
    '/sidework': () => <SideWorkPage imageColorFilter={imageResult.filter} imageColorHoverFilter={imageHoverResult.filter} />,
    '/sidework/skip': () => <SideWorkPage imageColorFilter={imageResult.filter} imageColorHoverFilter={imageHoverResult.filter} skipIntro={true}  />,
    '/about': () => <About imageColorFilter={imageResult.filter} imageColorHoverFilter={imageHoverResult.filter}  />,
    '/about/skip': () => <About imageColorFilter={imageResult.filter} imageColorHoverFilter={imageHoverResult.filter} skipIntro={true}  />,
    '/conclusion': () => <Conclusion />,

    '/static': () => <MainHome imageColorFilter={imageResult.filter} imageColorHoverFilter={imageHoverResult.filter} />,
    '/deeplocal': () => <ProjectPage content={Deeplocal} backURL={'/static'} />,
    '/deeplocal/work': () => <ProjectPage content={Deeplocal} backURL={'/work/skip'} />,
    '/monaco': () => <ProjectPage content={Monaco} backURL={'/static'} />,
    '/monaco/about': () => <ProjectPage content={Monaco} backURL={'/about/skip'} />,
    '/taggle': () => <ProjectPage content={Taggle} backURL={'/static'} />,
    '/capsule': () => <ProjectPage content={Capsule} backURL={'/static'} />,
    '/capsule/sidework': () => <ProjectPage content={Capsule} backURL={'/sidework/skip'} />,
    '/atomichabits': () => <ProjectPage content={AtomicHabits} imageColorHoverFilter={imageHoverResult.filter} backURL={'/static'} />,
    '/nuhub': () => <ProjectPage content={NuHub} backURL={'/static'} />,
    '/dailyui': () => <ProjectPage content={DailyUi} backURL={'/static'} />,
    '/dailyui/about': () => <ProjectPage content={DailyUi} backURL={'/about/skip'} />,
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
