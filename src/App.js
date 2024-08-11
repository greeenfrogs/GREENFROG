// src/App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Request from './component/Request';
import Free from './component/Free';
import Activity from './component/Activity';
import Mypage from './component/Mypage';
import FAQ from './component/FAQ';
import RequestWritemode from './component/writeView_mode/Request_writemode';
import FreeWritemode from './component/writeView_mode/Free_writemode';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/request" element={<Request />} />
          <Route path="/free" element={<Free />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/request/writemode" element={<RequestWritemode />} />
          <Route path='/free/writemode' element={<FreeWritemode />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
