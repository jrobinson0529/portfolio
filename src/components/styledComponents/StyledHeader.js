import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledHeader = styled(Header)`
 &&& {
  color: white;
  font-size: ${(props) => props.inputFontSize || '48px'};
  margin: 3% 0;
  font-family: 'Merriweather', serif;
 }
`;
const AboutMeHeader = styled(StyledHeader)`
  &&& {
    margin: 5px;
  }
`;
export { AboutMeHeader, StyledHeader };
