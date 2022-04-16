import React from 'react';
import { ConfigForm } from './components/configForm';
import { DateForm } from './components/dateForm';
import { MainFrame } from './components/mainFrame';
import { StartTimeForm } from './components/startTimeForm';
import { TargetCheckbox } from './components/targetCheckbox';
import 'argon-design-system-react/src/assets/vendor/nucleo/css/nucleo.css';
import 'argon-design-system-react/src/assets/vendor/font-awesome/css/font-awesome.min.css';
import 'argon-design-system-react/src/assets/css/argon-design-system-react.css';
import { Container } from 'reactstrap';
import Navbars from './components/navbars';
const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#ced4da', height: '100%' }}>
      <Navbars />
      <Container>
        <>
          <TargetCheckbox />
        </>
        <>
          <DateForm />
        </>
        <>
          <StartTimeForm />
        </>
        <>
          <ConfigForm />
        </>
        <>
          <MainFrame />
        </>
      </Container>
    </div>
  );
};

export default App;
