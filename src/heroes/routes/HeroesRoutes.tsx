import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../ui";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "..";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar/>
      <div  className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage/>} />
          <Route path="dc" element={<DcPage/>} />
          <Route path="/" element={<Navigate to={"/marvel"}/>} />
          <Route path="search" element={<SearchPage/>} />
          <Route path="hero/:id" element={<HeroPage/>} />
        </Routes>
      </div>
    </>
  )
}
