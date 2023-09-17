
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import TopBar from './scenes/global/TopBar';
import SideBar from './scenes/global/SideBar';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './scenes/dashboard/Dashboard'
import Clients from './scenes/clients/index';
import Login from './scenes/global/Login';
import CreateUser from './scenes/Users/CreateUser'
import UsersList from './scenes/Users/UsersList';
import TicketsList from './scenes/tickets/TicketsList';
import RepairsList from './scenes/reparation/RepairsList';
import CreateTicket from './scenes/tickets/CreateTicket';
import CreateRepair from './scenes/reparation/CreateRepair';


import ProtectedRoute from './Routes/ProtectedRoute';
import SidebarLayout from './Layouts/DashbordLayout'
import { useAuth } from './Providers/AuthProvider';

import Articles from './scenes/articles/Articles';
import CreateArticle from './scenes/articles/CreateArticle';
import SpareParts from './scenes/pieces rechange/SpareParts';
import CreateSparePart from './scenes/pieces rechange/CreateSparePart';
import RepairTickets from './scenes/sav/RepairTickets';
import CreateRepairTicket from './scenes/sav/CreateRepairTicket';
import TicketTracking from './scenes/sav/TicketTracking';
// import Membres from './scenes/membres/index';
// import CreateMembre from './scenes/members/CreateMembre';
// import Subscriptions from './scenes/Subscription'

function App() {
  const [theme, colorMode] = useMode();
  const {isAuthenticated} = useAuth();
  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes >
        <Route

            path="/login"
            element={!isAuthenticated ? <Login />: <Navigate to="/" replace={true} />}
          />
        <Route element={isAuthenticated ? <SidebarLayout />: <Navigate to="/login" replace={true} />}>

          <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route path="/reparations" element={<ProtectedRoute><RepairTickets/></ProtectedRoute>}/>
          <Route path="/suivitickits" element={<ProtectedRoute><TicketTracking/></ProtectedRoute>}/>
          <Route path="/ajouterticket" element={<ProtectedRoute><CreateRepairTicket/></ProtectedRoute>}/>
          <Route path="/clients" element={<ProtectedRoute><Clients/></ProtectedRoute>}/>
          <Route path="/Ajouterutilisateur" element={<ProtectedRoute><CreateUser/></ProtectedRoute>}/>
          <Route path="/utilisateurs" element={<ProtectedRoute><UsersList/></ProtectedRoute>}/>
          <Route path="/articles" element={<ProtectedRoute><Articles/></ProtectedRoute>}/>
          <Route path="/ajouterarticle" element={<ProtectedRoute><CreateArticle/></ProtectedRoute>}/>
          <Route path="/piecesrechange" element={<ProtectedRoute><SpareParts/></ProtectedRoute>}/>
          <Route path="/ajouterpiecerechange" element={<ProtectedRoute><CreateSparePart/></ProtectedRoute>}/>
          <Route path="/createtickets" element={<ProtectedRoute><CreateTicket/></ProtectedRoute>}/>
        </Route>           
              
       </Routes>
         
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  );
}

export default App;
