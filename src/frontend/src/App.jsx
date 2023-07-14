import * as React from "react"
import { backend } from "../../declarations/backend";
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import ButtonAppBar from "./components/ButtonAppBar";

export default function App() {
  return (
    <>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route />
      </Routes>
    </>
  )
}