import React from 'react';
import { Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import "./Header.css"

class Header extends React.Component {
    render() {
        return (
            <div className="image-add">
                <Fade left >
                    <h1 className="developer mt-5">Hi I am a full stack developer</h1>
                    <p className="developer">It's me Tafannom Ara Toma. I am a MERN stack developer.<p> Want to enhance my primary-level skills as a full stack developer </p><p> to the professional level. I am comfortable with </p> HTML, CSS, Bootstrap, React JS, MongoDB, Express JS, Node JS, firebase, and so on.</p>
                    <Button href="#contact" variant="warning">Contact Me</Button>{' '}
                </Fade>


            </div>
        );
    }
}

export default Header;