import React, { useState, useEffect} from 'react';
import * as S from './styles/AppStyle'
import Card from './components/cards'
import db from './db/db.json'
import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/ligth'
import { ListProducts } from './types/api'


function App() {

  const [database, setDatabase] = useState<ListProducts>(db)

  useEffect(()=>{
        

  },[])

  return (
    <ThemeProvider theme={lightTheme}>
      <S.Container>
       
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
