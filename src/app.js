import './styles/app.css'
import './styles/emailActions.css'
import './styles/emailBody.css'
import './styles/emailTitle.css'
import './styles/emailToolbar.css'
import './styles/leftEmailMenu.css'
import './styles/leftmenu.css'
import './styles/rightEmailInfo.css'
import './styles/app.css'

import Header from './Header'
import './styles/header.css'
import LeftMenu from './LeftMenu'
import './styles/leftmenu.css'
import EmailToolbar from './EmailToolbar'
import EmailTitle from './EmailTitle'
import LeftEmailInfo from './LeftEmailInfo'
import RightEmailInfo from './RightEmailInfo'
import EmailBody from './EmailBody'
import EmailActions from './EmailActions'


function App() {
  return (
    <div className="app">
      <Header/>
      <LeftMenu/>
      
      <main className="email-view">
        <EmailToolbar/>
        <article className="email-content">
        <EmailTitle/>
         
          <header className="email-content--header">
            <LeftEmailInfo/>
            <RightEmailInfo/>
            
          </header>
            <EmailBody/>
            <EmailActions/>
        </article>
      </main>
    </div>
  )
}

export default App
