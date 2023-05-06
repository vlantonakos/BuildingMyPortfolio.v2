import NavBar from "../components/NavBar";
import '../styles/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "../components/Banner";
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Portfolio() {

    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}