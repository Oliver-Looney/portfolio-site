import './App.css';
import WorkExp from './work-exp/Work-Experience'
import Education from './education/education'
import Projects from './projects/projects'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <h1 className="Heading">Oliver Looney</h1>
        <h2 className="Headings"><a href = "https://github.com/Oliver-Looney" >github</a></h2>
        <h2 className="Headings"><a href = "https://leetcode.com/OliverJLooney/" >leetcode</a></h2>
        <h2 className="Headings">C.V</h2>
      </header>
      <body>
        <WorkExp />
        <Education />
        <Projects />
      </body>
    </div>
  );
}

export default App;
