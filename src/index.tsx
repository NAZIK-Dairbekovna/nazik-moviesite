import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import LayOut from "./components/LayOut/layOut";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store = setupStore()
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <LayOut>
                <App/>
            </LayOut>
        </Provider>
    </BrowserRouter>
);


