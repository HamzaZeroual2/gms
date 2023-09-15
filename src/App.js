
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import TopBar from './scenes/global/TopBar';
import SideBar from './scenes/global/SideBar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './scenes/dashboard/Dashboard'
import Clients from './scenes/clients/index';
import Login from './scenes/global/Login';
import CreateUser from './scenes/Users/CreateUser'
import UsersList from './scenes/Users/UsersList';
import TicketsList from './scenes/tickets/TicketsList';
import RepairsList from './scenes/reparation/RepairsList';
import CreateTicket from './scenes/tickets/CreateTicket';
import CreateRepair from './scenes/reparation/CreateRepair';
// import Membres from './scenes/membres/index';
// import CreateMembre from './scenes/members/CreateMembre';
// import Subscriptions from './scenes/Subscription'

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        
        <div className="app">
          <SideBar/>
          <main className='content'>
            <TopBar/>

            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/clients" element={<Clients/>}/>
                <Route path="/Ajouterutilisateur" element={<CreateUser/>}/>
                <Route path="/utilisateurs" element={<UsersList/>}/>
                <Route path="/tickets" element={<TicketsList/>}/>
                <Route path="/createtickets" element={<CreateTicket/>}/>
                {/* <Route path="/reparation" element={<RepairsList/>}/>
                <Route path="/createreparation" element={<CreateRepair/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
