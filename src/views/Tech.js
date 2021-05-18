import React, { useState } from 'react';
import { StyledHeader } from '../components/styledComponents/StyledHeader';
import TechCard from '../components/TechCard';

function Tech() {
  const [displayJS, setDisplayJS] = useState(false);
  const [displayHtml, setDisplayHtml] = useState(false);
  const [displaySass, setDisplaySass] = useState(false);

  return (
    <div className='tech-view'>
      <StyledHeader>
        Technologies I work with
      </StyledHeader>
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
