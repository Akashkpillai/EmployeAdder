import { Routes,Route} from 'react-router-dom'
import{BrowserRouter} from 'react-router-dom'
import SignUp from './Components/Auth/Singup'
import NoPage from './Components/NotFound/NoPage'
import Login from './Components/Auth/Login'
import HomeWithNav from './Pages/HomeWithNav'
import AddEmploye from './Components/Home/AddEmploye'


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='*' element={<NoPage/>} />
     <Route path="/signup" element={<SignUp/>} />
     <Route path="/" element={<Login/>} />
     <Route path="/home" element={<HomeWithNav/>} />
     <Route path="/home-add-employe" element={<AddEmploye/>} /> 

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
