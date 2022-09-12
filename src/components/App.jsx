// Include RoutesComponent
import { useContext } from 'react';
import { GlobalStateContext } from '../context/Context';
import RoutesComponent from '../routes/RouteComponent';
import Container from './Container/Container';
import Loading from './Loading/Loading';

// Include Navbar

function App() {
  const { loading } = useContext(GlobalStateContext);

  return loading ? (
    <Loading />
  ) : (
    <main className="App">
      <Container>
        <RoutesComponent />
      </Container>
    </main>
  );
}

export default App;
