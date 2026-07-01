import { BrowserRouter, Route, Routes } from 'react-router'
import React from "react"
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/home/home'
import Works from './Components/works/works'
import Socialmedia from './Components/Socialmedia/Socialmedia'
import Skills from './Components/Skills/Skills'
import ColorSelector from './Components/ColorSelector/ColorSelector'
import { LanguageProvider } from './Components/Language/LanguageProvider'
import NotFound from './Components/NotFound/NotFound'
import FooterComp from './Components/Footer/FooterComp'

function App() {
    return (
        <React.Fragment>
            <LanguageProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/works' element={<Works />} />
                        <Route path='/skills' element={<Skills />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    {/* <Socialmedia/> */}
                    <ColorSelector />
                    <FooterComp />
                </BrowserRouter>
            </LanguageProvider>
        </React.Fragment>
    );
}

export default App
