import './App.css';
import UserProfile from './components/UserProfile';
import SurveyFeedback from './components/SurveyFeedback';
import FormManager from './components/FormManager';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import { ContactProvider } from './context/contactContext';
import InputFocus from './components/InputFocus';

function App() {


  return (
    <>
    < UserProfile />
    <hr />
    <SurveyFeedback />
    <hr />
    <FormManager />
    <hr />
    <ContactProvider>
      <ContactList />
      <AddContact />
    </ContactProvider>
    <hr />
    <InputFocus />
    </>
  )
}

export default App
