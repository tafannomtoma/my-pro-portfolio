import React from 'react';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Project from './Project/Project';



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;