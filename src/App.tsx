import React, { useState, useEffect} from 'react';
import * as S from './styles/AppStyle'
import Card from './components/cards'
import db from './db/db.json'
import { ListProducts } from './types/api'


function App() {

  const [database, setDatabase] = useState<ListProducts>(db)

  useEffect(()=>{
        

  },[])

  return (
    <S.Container>
     
    </S.Container>  
  );
}

export default App;
