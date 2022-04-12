import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import AppBar from 'components/AppBar';

const HomePage = lazy(() => import('./views/HomePage'));
const Calculator = lazy(() => import('./views/Calculator'));

function App() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
