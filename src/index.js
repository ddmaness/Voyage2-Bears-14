//module imports
import React from 'react';
//method imports
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//css for bootstrap from module
import 'bootstrap/dist/css/bootstrap.css';
//local css for component
import './index.css';
//components from local files
import DevTools from './components/shared/DevTools';
import configureStore from './store/Store';
import AppContainer from './components/AppContainer';
import registerServiceWorker from './registerServiceWorker';

const Store = configureStore();

const renderApp = (Component) => {
    render(
        <Provider store={Store}>
            <div>
                <Component />
                <DevTools />
            </div>
        </Provider>,
        document.getElementById('root')
    );
};

renderApp(AppContainer);

registerServiceWorker();
