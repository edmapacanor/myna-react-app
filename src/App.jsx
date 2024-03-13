import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import DataGrid from './pages/DataGrid/DataGrid';
import Config from './pages/Config/Config';

const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="users" element={<DataGrid/>}/>
          <Route path="config" element={<Config/>}/>
          
        </Route>

      </Routes>
    </BrowserRouter>
  </div>
};

export default App;
