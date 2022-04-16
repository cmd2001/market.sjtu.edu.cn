import React from 'react';
import { ConfigForm } from './components/configForm';
import { DateForm } from './components/dateForm';
import { MainFrame } from './components/mainFrame';
import { StartTimeForm } from './components/startTimeForm';
import { TargetCheckbox } from './components/targetCheckbox';

const App: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default App;
