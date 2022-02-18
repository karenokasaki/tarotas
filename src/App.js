import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Home from './pages/Home/Home';
import Layouts from './pages/Layouts/Layouts';
import Layout from './pages/Layout/Layout';
import Tiragens from './pages/Tiragens/Tiragens';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Card from './pages/Card/Card';

import Navbar from './components/Navbar';


function App() {

  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [layouts, setLayouts] = useState([])
  const [tiragens, setTiragens] = useState()

  useEffect(() => {
    async function fetchCards() {
      try {
        setIsLoading(true)
        const result = await axios.get(
          "https://ironrest.herokuapp.com/tarotas"
        )
        setCards(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCards()
    setIsLoading(false)
  }, [isLoading]);

  useEffect(() => {
    async function fetchLayout() {
      
      try {
        
        const result = await axios.get('https://ironrest.herokuapp.com/tarotasTiragens')
        setLayouts(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchLayout()
    setIsLoading(false)
  }, [isLoading]);

  useEffect(() => {
    async function fetchTiragens() {
        try{
            setIsLoading(true)
            const result = await axios.get('https://ironrest.herokuapp.com/tarotasInput')
            setTiragens(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    fetchTiragens()
    setIsLoading(false)
}, [isLoading]);



  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
          exact 
          path="/" 
          cards={cards}
          isLoading={isLoading}
          element={<Home cards={cards}/>} 
        />
        <Route 
          exact 
          path="/tarotas/:_id" 
          element={<Card /> }
        />
        <Route 
          exact 
          path="/layouts" 
          element={<Layouts layouts={layouts}/>}        
        />
        <Route 
          exact 
          path="/layouts/:idLayout" 
          element={<Layout layouts={layouts} setIsLoading={setIsLoading}/>} 
        />
        <Route 
          exact 
          path="/tiragens" 
          element={<Tiragens tiragens={tiragens} setIsLoading={setIsLoading}/>} 
        />
        <Route 
          elemen
          path="*" 
          element={<ErrorPage />} 
        />
      </Routes>

    </div>
  );
}

export default App;
