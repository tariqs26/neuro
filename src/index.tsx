import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import './index.css';
import { store } from 'app/store';
import { Provider } from 'react-redux';

import Form from 'components/Form/Form';
import Quiz from 'components/Quiz/Quiz';
import Navbar from 'components/Navbar/Navbar';

createRoot(document.querySelector('#root') as HTMLDivElement).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' element={<Form />} />
          <Route path='/quiz' element={<Quiz />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
