import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Pricing from './component/Pricing/Pricing';
import AssignmentMarks from './component/AssignmentMarks/AssignmentMarks';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

    <Pricing></Pricing>
    <AssignmentMarks></AssignmentMarks>
    </div>
  );
}

export default App;
 