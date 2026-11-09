import { Navbar } from './Components/Main/Navbar/Navbar'
import { HeadingMain } from './Components/General/Headings/Heading-main/Heading-main'
import { BusinessCard } from './Components/Main/Business-card/Business-card'
import { Services } from './Components/Main/Services/Services'
import { Members } from './Components/Main/Members/Members'
import { Contacts } from './Components/Main/Contacts/Contacts'
import './Styles/App.css'
import './Styles/Layout.css'
import './Styles/Media-queries.css'
function App() {
   return (
    <>
      <Navbar/>
      <HeadingMain 
      text="Главная" 
      className="heading-main" 
      id="heading-main"/>
      <BusinessCard/>
      <HeadingMain
      text="Услуги"
      className="heading-main"
      id="heading-services"/>
      <Services/>
      <HeadingMain
      text="Команда"
      className="heading-main"
      id="heading-members"/>
      <Members/>
      <HeadingMain
      text="Контакты"
      className="heading-main"
      id="heading-contacts"/>
      <Contacts
      elementOne="test"/>
    </>
  )
}

export default App
