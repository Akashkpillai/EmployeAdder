import { Routes,Route} from 'react-router-dom'
import{BrowserRouter} from 'react-router-dom'
import SignUp from './Components/Auth/Singup'
import NoPage from './Components/NotFound/NoPage'
import Login from './Components/Auth/Login'
import HomeWithNav from './Pages/HomeWithNav'
import AddEmploye from './Components/Home/AddEmploye'
import ProtectedRoute  from './Components/ProtectedRoute'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='*' element={<NoPage/>} />
     <Route path="/signup" element={<SignUp/>} />
     <Route path="/" element={<Login/>} />
     <Route path="/home" element={<ProtectedRoute><HomeWithNav/></ProtectedRoute>} />
     <Route path="/home-add-employe" element={<AddEmploye/>} /> 

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
