import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import Navbar from './Components/Navbar/Navbar';
import TaskPanel from './Components/TaskPanel/TaskPanel';
import FacultyDetails from './Components/Faculty Details/FacultyDetails';
import SpecialControls from './Components/Special Controls/SpecialControls';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='home' replace />} />
          <Route path='/home' element={<Home /> } />
          <Route path='/auth' element={<Auth />} />
          <Route path='/taskpanel' element={<TaskPanel /> } />
          <Route path='/facultydetails' element={<FacultyDetails />} />
          <Route path='/specialcontrols' element={<SpecialControls />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
          {/* <Route path='/idea' element={<Form />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
