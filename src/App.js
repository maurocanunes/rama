import './App.css';
import { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './Components/Feed/CardList';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import MessageInfo from './Components/Messages/MessageInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { messagesCollectionRef } from "./Config/Firebase";
import { getDocs } from "firebase/firestore";
import RegisterMessage from './Components/Messages/RegisterMessage';

function App() {

  const [messageList, setMessageList] = useState([]);
  
  useEffect(() => {
    const getMessageList = async () => {
      try {
        const data = await getDocs(messagesCollectionRef)
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(), 
          id: doc.id,
        }));
        setMessageList(filteredData)
      } catch (err) {
        console.error(err);
      }
    }
    getMessageList();
  },[]);

  return (
    <>
      <div id='wrappingDiv'>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<CardList messages={messageList} />} />
              <Route path='/login' element={<LoginRegister />} />
              {/* <Route path='/user/:id' element={<User />} /> */}
              <Route path='/message/:id' element={<MessageInfo />}/>
              <Route path='/message' element={<RegisterMessage />}/>
            </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
