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
    <AnimateGroup animation="bounce">
     { args.displayJS && <Icon name='js square' size='huge'/> }
     { args.displayHtml && <Icon name='js square' size='huge'/> }
     { args.displaySass && <Icon name='js square' size='huge'/> }
    </AnimateGroup>
  );
}

export default TechCard;
