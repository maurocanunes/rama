import './App.css';
import { useState, useEffect} from 'react';
import Navigation from './Components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './Components/Feed/CardList';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import JobInfo from './Components/Job/JobInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const noJob = {id: '', title:'', description:'', created_on:'', user_id:''};

  const [cardId, setCardId] = useState('');
  const [jobList, setJobList] = useState([]);
  const [selectedJob, setSelectedJob] = useState(noJob);
  

  const clearState = () => {
    setCardId('');
    setJobList([]);
    setSelectedJob(noJob);
  }

  useEffect(() => {
    if (cardId && !selectedJob.id) {
      getJobs(cardId)
    } else if (!cardId) {
      getJobs();
    }
  },[cardId, selectedJob])

  const getJobs = (id=0) => {
    if(id===0) {

      fetch('http://localhost:3000/', {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(jobs => {
          setJobList(jobs)
        })
    } else {
      fetch(`http://localhost:3000/job/${id}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(job => {
          setSelectedJob({
            id: job.id,
            title:job.title,
            description:job.description,
            created_on:job.created_on,
            user_id:job.user_id
          })
        })

    }
  }

  return (
    <>
    <Navigation /> 
      <div id='wrappingDiv'>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<CardList jobs={jobList} setCardId={setCardId} />} />
              <Route path="/login" element={<LoginRegister />} />
              <Route path={`/job/:id`} element={<JobInfo cardId={cardId} selectedJob={selectedJob} />}/>
            </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
