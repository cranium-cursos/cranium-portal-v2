import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

// Lazy load — campanhas só carregam quando rotas forem acessadas
const NiverSamuel = lazy(() => import('./pages/NiverSamuel'));
const PortalNiver = lazy(() => import('./pages/PortalNiver'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/niver-samuel"
          element={
            <Suspense fallback={<RouteFallback />}>
              <NiverSamuel />
            </Suspense>
          }
        />
        <Route
          path="/portal-niver"
          element={
            <Suspense fallback={<RouteFallback />}>
              <PortalNiver />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

/**
 * Fallback simples enquanto a rota lazy carrega.
 * Mantém background dark do brandbook + Plus Jakarta Sans.
 */
function RouteFallback() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex items-center gap-3 text-gray-400">
        <span
          className="w-2 h-2 rounded-full bg-cranium-turquesa animate-pulse"
          aria-hidden="true"
        />
        <span className="text-sm">Carregando…</span>
      </div>
    </div>
  );
}

export default App;
