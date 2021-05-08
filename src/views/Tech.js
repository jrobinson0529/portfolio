import React, { useState } from 'react';
import { Header } from 'semantic-ui-react';
import TechCard from '../components/TechCard';

function Tech() {
  const [displayJS, setDisplayJS] = useState(false);
  const [displayHtml, setDisplayHtml] = useState(false);
  const [displaySass, setDisplaySass] = useState(false);

  return (
    <div className='tech-view'>
      <Header inverted id='techHeader' size='huge'>
        Technologies I work with
      </Header>
      <div>
        <TechCard
          displayJS={displayJS}
          setDisplayJS={setDisplayJS}
          displayHtml={displayHtml}
          setDisplayHtml={setDisplayHtml}
          displaySass={displaySass}
          setDisplaySass={setDisplaySass}
          />
      </div>
    </div>
  );
}

export default Tech;
