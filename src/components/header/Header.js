import React from 'react'
import './Header.css'
import {TextField, createTheme, ThemeProvider, MenuItem} from '@material-ui/core';
import categories from '../../data/category';

const Header = ({setCategory, category, word, setWord}) => {
    const darkTheme = createTheme({
        palette: {
          primary: {
              main: '#fff',
          },
          type: 'dark'
        }    
      });

    return (
        <div className="header">

           <span id='title'>{word ? word : "Multilingual Dictionary"}</span> 

           <div className="inputs">
               <ThemeProvider theme={darkTheme}>

               <TextField 
            id='search' 
            label='Search for a Word' 
            value={word}
            onChange={(e)=>setWord(e.target.value)}   
               />

               <TextField
          id="select-language"
          select
          label="Language"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          helperText="Please select your language"
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

               </ThemeProvider>

           </div>
        </div>
    )
}

export default Header
