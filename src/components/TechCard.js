import React, { useEffect } from 'react';
import { AnimateGroup } from 'react-animation';
import { Image, Icon } from 'semantic-ui-react';
import vscIcon from './assets/images/512px-Visual_Studio_Code_1.35_icon.svg.png';
import postmanIcon from './assets/images/postman.png';

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
      }, 900),
      setTimeout(() => {
        args.setDisplayReact((prevState) => !prevState);
      }, 1300),
      setTimeout(() => {
        args.setDisplayVsc((prevState) => !prevState);
      }, 1700),
      setTimeout(() => {
        args.setDisplayGit((prevState) => !prevState);
      }, 2100),
      setTimeout(() => {
        args.setDisplayPm((prevState) => !prevState);
      }, 2500)
    ];
    return () => timeout.map((timeoutClear) => clearTimeout(timeoutClear));
  }, []);
  return (
    <AnimateGroup animation="pop" className='d-flex flex-wrap justify-content-around w-50 mx-auto'>
     { args.displayJS && <Icon className='tech-icons' name='js square' size='huge'/> }
     { args.displayHtml && <Icon className='tech-icons' name='html5' size='huge'/> }
     { args.displaySass && <Icon className='tech-icons' name='sass' size='huge'/> }
     { args.displayReact && <Icon className='tech-icons' name='react' size='huge'/>}
     { args.displayGit && <Icon className='tech-icons' name='github' size='huge'/>}
     { args.displayVsc && <Image src={vscIcon} size='tiny' />}
     { args.displayPm && <Image src={postmanIcon} size='small' />}
    </AnimateGroup>
  );
}

export default TechCard;
