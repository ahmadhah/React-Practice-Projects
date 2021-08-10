import './App.css';
import Question from './components/Question';
import data from './data';

function App() {

  return (
    <div className="App">
      <div className="container">
        <h1>Questions And Answers About Login</h1>
      <div className="question-list">
        {
          data.map((question) => <Question key={question.id} question={question} />)
        }
      </div>
      </div>
    </div>
  );
}

export default App;
