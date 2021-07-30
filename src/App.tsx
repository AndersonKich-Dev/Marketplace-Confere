import React, { useState, useEffect} from 'react';
import { Provider } from 'react-redux'
import store from './store'
import * as S from './styles/AppStyle'
import Card from './components/Cards'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import PopUp from './components/Pop_up'
import db from './db/db.json'
import { ListProducts } from './types/api'


function App() {

  const [database, setDatabase] = useState<ListProducts>(db)

  useEffect(()=>{
       // console.log(database.products)

  },[])

  return (
    <Provider store={store}>
      <S.Container>
      <Header/>
      <PopUp/>
     
      <Main>
        {database.products.map((item)=>(
          <Card product={item}/>
        ))}
      </Main>

      <Footer/>
    </S.Container>  
    </Provider>
  );
}

export default App;

