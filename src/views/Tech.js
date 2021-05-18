import React, { useState } from 'react';
import { StyledHeader } from '../components/styledComponents/StyledHeader';
import TechCard from '../components/TechCard';

function Tech() {
  const [displayJS, setDisplayJS] = useState(false);
  const [displayHtml, setDisplayHtml] = useState(false);
  const [displaySass, setDisplaySass] = useState(false);
  const [displayReact, setDisplayReact] = useState(false);
  const [displayVsc, setDisplayVsc] = useState(false);
  const [displayGit, setDisplayGit] = useState(false);
  const [displayPm, setDisplayPm] = useState(false);

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
          displayReact={displayReact}
          setDisplayReact={setDisplayReact}
          displayVsc={displayVsc}
          setDisplayVsc={setDisplayVsc}
          displayGit={displayGit}
          setDisplayGit={setDisplayGit}
          displayPm={displayPm}
          setDisplayPm={setDisplayPm}
          />
      </div>
    </div>
  );
}

export default Tech;
