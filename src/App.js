import './App.css';
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import alanBtn from "@alan-ai/alan-sdk-web";


const App = () => {


  const [progress, setProgress] = useState(0)
  const alanKey = 'c78682b5b526bdb29a43c2b1394f46362e956eca572e1d8b807a3e2338fdd0dc/stage'

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({command,articles}) => {
        if (command === 'newHeadlines') {
          // Call the client code that will react to the received command
          console.log(articles)
        }
      }
    });
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={4} color='#f11946' progress={progress} />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key='general' pageSize={6} country='in' category='general' />}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} key='business' pageSize={6} country='in' category='business' />}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={6} country='in' category='entertainment' />}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} key='health' pageSize={6} country='in' category='health' />}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} key='science' pageSize={6} country='in' category='science' />}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={6} country='in' category='sports' />}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={6} country='in' category='technology' />}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App;