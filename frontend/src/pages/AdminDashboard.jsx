import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function AdminDashboard() {
  return (
    <div className="adminControl-section">
      <div className="navbar-container">
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">E-Commerce Admin Control</Navbar.Brand>
            <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">name of user</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="body-section">
        test
      </div>
    </div>
    
  );
}

export default AdminDashboard;