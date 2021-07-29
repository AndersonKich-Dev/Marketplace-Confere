import React, { useState, useEffect} from 'react';
import * as S from './styles/AppStyle'
import Card from './components/Cards'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import db from './db/db.json'
import { ListProducts } from './types/api'


function App() {

  const [database, setDatabase] = useState<ListProducts>(db)

  useEffect(()=>{
        console.log(database.products)

  },[])

  return (
    <S.Container>
      <Header/>

      <Footer/>
    </S.Container>  
  );
}

export default App;

