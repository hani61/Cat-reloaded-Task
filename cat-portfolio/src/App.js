import './App.css';
import { Github, Linkedin, Mail,  ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects'
import ProjectCard from './components/ProjectCard';
import p1 from './assets/images/p1.png'
import p2 from './assets/images/p2.png'
import About from './components/About';
import Endorsement from './components/Endorsement';
import Abdo from '../src/assets/images/Abdo.jpg'
import Hany from '../src/assets/images/Hany.jpg'
import Blog from './components/Blog'
function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <Hero />
      <Projects />

      <ProjectCard image={p1} 
      name={"To-Do List"} 
      link={"https://hani61.github.io/To-Do-List-sass-JavaScript/"}
      Description={"I Made a To-do List project where I Worked with JSON objects to manage tasks dynamically and to retrieve tasks even after reloading to expand my JavaScript capabilities Leveraged SASS to create cleaner, more scalable styles and enhance my design workflow."}
      Technologies={"Technologies Used: Html, Sass, Javascript"}/>

      <ProjectCard 
      image={p2}
      name={"Color Guessing Game"}
      link={"https://hani61.github.io/Simple-responsive-Color-Guess-Game/"}
      Description={"Made An Interactive game involves Generating random colors for players to guess, Managing user interactions with color selection and Controlling game flow, including feedback for correct or incorrect guesses."}
      Technologies={"Technologies Used: Html, Css, Javascript"} />
      <button className='rounded-full px-5 py-3 border border-black text-lg'>See More Work</button>
      <About/>
      <Endorsement quote={"I had the opportunity to work with Hani Ahmed  as a Backend Developer"}
      image={Abdo}
      name={"Abdo Eid"}
      job={"Back-end Developer"}
      />
      <Endorsement quote={"I had the opportunity to work with Hani Ahmed  as a Front-End Developer"}
         image={Hany}
         name={"Hany Saad"}
         job={"Front-end Developer"}
         />
         <Blog />
      </div>
  );
}

export default App;
