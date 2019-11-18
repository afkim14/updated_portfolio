import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
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

const App = () => (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path="/" render={(props) => <IntroPage {...props} />}/>
            <Route exact path="/skip" render={(props) => <IntroPage {...props} skipIntro={true} />} />
            <Route exact path="/work" render={(props) => <WorkPage {...props} />} />
            <Route exact path="/work/skip" render={(props) => <WorkPage {...props} skipIntro={true}  />} />
            <Route exact path="/sidework" render={(props) => <SideWorkPage {...props} imageColorFilter={imageResult.filter} imageColorHoverFilter={imageHoverResult.filter} />} />
            <Route exact path="/sidework/skip" render={(props) => <SideWorkPage {...props} imageColorFilter={imageResult.filter} imageColorHoverFilter={imageHoverResult.filter} skipIntro={true} />} />
            <Route exact path="/about" render={(props) => <About {...props} imageColorFilter={imageResult.filter} imageColorHoverFilter={imageHoverResult.filter} skipIntro={true} />} />
            <Route exact path="/about/skip" render={(props) => <About {...props} imageColorFilter={imageResult.filter} imageColorHoverFilter={imageHoverResult.filter} skipIntro={true} />} />
            <Route exact path="/conclusion" render={(props) => <Conclusion {...props} />} />

            <Route exact path="/static" render={(props) => <MainHome {...props} imageColorFilter={imageResult.filter} imageColorHoverFilter={imageHoverResult.filter} />} />
            <Route exact path="/deeplocal" render={(props) => <ProjectPage {...props} content={Deeplocal} backURL={'/static'} />} />
            <Route exact path="/deeplocal/work" render={(props) => <ProjectPage {...props} content={Deeplocal} backURL={'/work/skip'} />} />
            <Route exact path="/monaco" render={(props) => <ProjectPage {...props} content={Monaco} backURL={'/static'} />} />
            <Route exact path="/monaco/about" render={(props) => <ProjectPage {...props} content={Monaco} backURL={'/about/skip'} />} />
            <Route exact path="/taggle" render={(props) => <ProjectPage {...props} content={Taggle} backURL={'/static'} />} />
            <Route exact path="/capsule" render={(props) => <ProjectPage {...props} content={Capsule} backURL={'/static'} />} />
            <Route exact path="/capsule/sidework" render={(props) => <ProjectPage {...props} content={Capsule} backURL={'/sidework/skip'} />} />
            <Route exact path="/atomichabits" render={(props) => <ProjectPage {...props} content={AtomicHabits} imageColorHoverFilter={imageHoverResult.filter} backURL={'/static'} />} />
            <Route exact path="/nuhub" render={(props) => <ProjectPage {...props} content={NuHub} backURL={'/static'} />} />
            <Route exact path="/dailyui" render={(props) => <ProjectPage {...props} content={DailyUi} backURL={'/static'} />} />
            <Route exact path="/dailyui/about" render={(props) => <ProjectPage {...props} content={DailyUi} backURL={'/about/skip'} />} />
        </div>
    </HashRouter>
  )

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
