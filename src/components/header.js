import React from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../index.css'
// Creates a NavBar Header, light color, that says Employee Search
function Header() {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Employee Directory</h1>

                </Container>
            </Jumbotron>
        </div>
    );
}
export default Header;