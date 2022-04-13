import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import React, { useState } from 'react';

import AppBar from 'components/AppBar';

const HomePage = lazy(() => import('./views/HomePage'));
const Calculator = lazy(() => import('./views/Calculator'));

function App() {
  const [banks, setBanks] = useState(
    () => JSON.parse(window.localStorage.getItem('banks')) ?? []
  );

  const banksSetter = value => setBanks(value);

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route
            index
            element={<HomePage banks={banks} banksSetter={banksSetter} />}
          />
          <Route path="calculator" element={<Calculator banks={banks} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
