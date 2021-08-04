import { Provider } from 'react-redux'
import {store, persistor} from './store'
import * as S from './styles/AppStyle'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import DetailProductBox from './components/DetailProductBox'
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <S.Container>
        <Header/>
        <DetailProductBox/>     
        <Main/>
        <Footer/>
        </S.Container>  
      </PersistGate>
    </Provider>
  );
}

export default App;

