import React from 'react';
import { ConfigForm } from './components/configForm';
import { DateForm } from './components/dateForm';
import { MainFrame } from './components/mainFrame';
import { StartTimeForm } from './components/startTimeForm';
import { TargetCheckbox } from './components/targetCheckbox';
import { Container } from 'reactstrap';
import Navbars from './components/navbars';
import { Terminal } from './components/terminal';
import 'argon-design-system-react/src/assets/vendor/nucleo/css/nucleo.css';
import 'argon-design-system-react/src/assets/vendor/font-awesome/css/font-awesome.min.css';
import 'argon-design-system-react/src/assets/css/argon-design-system-react.css';
import './styles/style.css';
const App: React.FC = () => {
  return (
    <div className="app">
      <Navbars />
      <Container>
        <TargetCheckbox />
        <DateForm />
        <StartTimeForm />
        <ConfigForm />
        <Terminal />
        <MainFrame />
      </Container>
    </div>
  );
};

export default App;
