import MainPage from './webpages/peo/subpages/MainPage.tsx'
import ProfilePage from './webpages/peo/subpages/ProfilePage.tsx'
import ContactPage from './webpages/peo/subpages/ContactPage.tsx'
import SheetPage from './webpages/peo/subpages/SheetPage.tsx'
import Layout from './webpages/peo/peoLayout.tsx'
import './assets/fonts.css'
import './App.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div id='peo-main-wrapper'>
        <div className='peo-main-content'>
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/profilepage' element={<ProfilePage/>}/>
                <Route path='/contactpage' element={<ContactPage/>}/>
                <Route path='/sheetpage' element={<SheetPage/>}/>
              </Route>
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
