import React, { useEffect } from 'react';
import { AnimateGroup } from 'react-animation';
import { Icon } from 'semantic-ui-react';

function TechCard({ ...args }) {
  useEffect(() => {
    const timeout = [
      setTimeout(() => {
        args.setDisplayJS((prevState) => !prevState);
      }, 100),
      setTimeout(() => {
        args.setDisplayHtml((prevState) => !prevState);
      }, 500),
      setTimeout(() => {
        args.setDisplaySass((prevState) => !prevState);
      }, 900)
    ];
    return () => timeout.map((timeoutClear) => clearTimeout(timeoutClear));
  }, []);
  return (
    <AnimateGroup animation="pop">
     { args.displayJS && <Icon className='tech-icons' name='js square' size='huge'/> }
     { args.displayHtml && <Icon className='tech-icons' name='js square' size='huge'/> }
     { args.displaySass && <Icon className='tech-icons' name='js square' size='huge'/> }
    </AnimateGroup>
  );
}

export default TechCard;
