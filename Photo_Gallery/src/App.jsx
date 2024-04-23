import { useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'

import Search from './components/Search';
import NoResultsFound from './components/NoResultsFound';
import LoadedContent from './components/LoadedContent';
import Error from './components/Error';

function App() {
  const [count, setCount] = useState(0)

    const navigate = useNavigate();

  const handleSubmit = (e, value) => {
    e.preventDefault();
    navigate('/search/' + value)
  }

  return (
    <div className='d-flex flex-column align-items-center ' style={{height: "100vh"}}>
      <Routes>
        <Route path='/' element={<Navigate to="/search/cats" />} />
        <Route path='/search' element={<Search handleSubmit={handleSubmit} />}>
          <Route index element={<Navigate to="/search"/>}/>
          <Route path=':query' element={<LoadedContent/>} />
          <Route path='noresult' element={<NoResultsFound />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>    
    </div>
  );
}

export default App
