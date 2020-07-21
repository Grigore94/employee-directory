import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Employees from '/Users/grigore/Github/eployee-dir/employee-directory/employee-directory/src/pages/Emlpoyees.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          {/* <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} /> */}
          <Route exact path="/employees" component={Employees} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
