import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';

import Form from './components/Form/Form';
import Quiz from './components/Quiz/Quiz';
import Navbar from './components/Navbar/Navbar';

createRoot(document.querySelector('#root')).render(
  // <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' element={<Form />} />
          <Route path='/quiz' element={<Quiz />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  ,{/* </StrictMode> */}
);
