// Include RoutesComponent
import RoutesComponent from '../routes/RouteComponent';
import Container from './Container/Container';

// Include Navbar

function App() {
  return (
    <main className="App">
      <Container>
        <RoutesComponent />
      </Container>
    </main>
  );
}

export default App;
