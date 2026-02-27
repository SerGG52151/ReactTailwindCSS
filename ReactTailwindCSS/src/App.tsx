import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import PrimaryButton from './components/PrimaryButton'
import Infocard from './components/Infocard'
import SideBar from './components/SideBar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="flex">
          <SideBar/>
          <div className="flex-1 items-center justify-center">
            <Header/>
            <SectionOne/>
            <SectionTwo/>
            <div className="grid grid-cols-4 gap-4">
              <Infocard
                title="Fast deployments"
                description="Deploy your app in seconds with our platform."
              />
              <Infocard
                title="Scalable infra"
                description="Scale from one user to millions without changes."
                buttonText="View details"
              />
              <Infocard
                title="Secure by default"
                description="Built‑in security best practices and audits."
              />
              <Infocard
                title="24/7 Support"
                description="Our engineers are available around the clock."
              />            
            </div>
            <SectionThree/>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default App


