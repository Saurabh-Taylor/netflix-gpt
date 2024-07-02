import { Provider } from "react-redux"
import Body from "./components/Body"
import store from "./store/store"
import { useEffect } from "react"
import { firebaseAuth } from "./firebase/auth.firebase"



function App() {

  useEffect(()=>{
    firebaseAuth.onAuthStateChanged()
  },[])

  return (
    <Provider store={store} >
      <Body/>
    </Provider>
  )
}

export default App
