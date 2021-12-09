import React from 'react';
import { About, Contact, HighlightRanges } from '../lib/data/data';
import '../lib/styles/App.css';
import { Header, Info, Projects } from './index';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Info header={About.header} infoType={About.infoType} highlightRange={HighlightRanges.About} />
        <Projects highlightRange={HighlightRanges.Work} />
        <Info header={Contact.header} infoType={Contact.infoType} highlightRange={HighlightRanges.Contact} />
      </div>
    </div>
  );
}

export default App;
