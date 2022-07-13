import './App.css';
import WorkExp from './work-exp/Work-Experience'
import Education from './education/education'
import Projects from './projects/projects'
import Hangman from './projects/hangman'
function Home() {
  return (
    <div className="Home">
      <body>
        <WorkExp />
        <Education />
        <Projects />
        <Hangman/>
      </body>
    </div>
  );
}

export default Home;
