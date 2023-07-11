import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layout'
import { Home } from '../pages/Home'
import { NewsDetails } from '../pages/NewsDetails'
import { NotFound } from '../pages/NotFound'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:id" element={<NewsDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
