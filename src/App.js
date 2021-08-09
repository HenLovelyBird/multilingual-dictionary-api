import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Container} from '@material-ui/core';
import Header from './components/header/Header';

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en")

  const dictionaryApi = async () => {
    try {
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/excellent');

      // console.log(data);
      setMeaning(data.data)
    } catch (error) {
      console.log(error);
    }   
  };

  console.log(meaning);

  useEffect(() => {
    dictionaryApi();
  }, [])

  
  return (
    <div className="App" style={{height: '100vh', backgroundColor: '#282c34', color: 'white'}}>

      <Container maxWidth="md" style={{display: 'flex', felxDirection: 'column', height: '100vh', justifyContent: 'center'}}>
      <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
      </Container>

    </div>
  );
}

export default App;
