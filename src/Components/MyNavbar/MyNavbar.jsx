import React, { useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddContact from '../Pages/AddContact/AddContact';

  

const MyNavbar = () => {
  const [showContact, setShowContact] = useState(false)
  const handleCloseContact = () => setShowContact(false)
  const handleShowContact = () => setShowContact(true)
    return (
      <>
        <Container>
          <Navbar expand="lg" variant="light" bg="light" className="py-4 mb-4">
            <Container>
                <Link 
                  className='navbar-brand' to='/
                '>
                  CONTACT BOOK
                </Link>
                <Button
                  variant="info"
                  onClick={handleShowContact}
                >
                  ADD
                </Button>
            </Container>
          </Navbar>
        </Container>
        <AddContact showContact={showContact} handleCloseContact={handleCloseContact} />
        </>
    );
};

export default MyNavbar;