import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Home from "./pages/Home"
import Badges from "./pages/Badges"
import Banners from "./pages/Banners"
import Cards from "./pages/Cards"
import Testimonials from "./pages/Testimonials"
import Popup from "./pages/Popup"
import Tooltips from "./pages/Tooltips"
import Layout from "./components/layout/Layout"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="badges" element={<Badges />} />
      <Route path="banners" element={<Banners />} />
      <Route path="cards" element={<Cards />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="popup" element={<Popup />} />
      <Route path="tooltip" element={<Tooltips />} />
    </Route>
  ))


  return (
   <div className="flex flex-col min-h-screen">
    <RouterProvider router={router} />
   </div>
  )
}

export default App
