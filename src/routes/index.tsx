import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layout'
import { Home } from '../pages/Home'
import { NewsDetails } from '../pages/NewsDetails'
import { NotFound } from '../pages/NotFound'
import { CreateNews } from '../pages/CreateNews'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<NewsDetails />} />
          <Route path="/create-news" element={<CreateNews />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
