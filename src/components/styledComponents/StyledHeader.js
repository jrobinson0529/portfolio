import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledHeader = styled(Header)`
 &&& {
  color: white;
  font-size: ${(props) => props.inputfontsize || '48px'};
  margin: 3% 0;
  font-family: 'Merriweather', serif;
 }
`;
const AboutMeHeader = styled(StyledHeader)`
  &&& {
    margin: 20px;
  }
`;
export { AboutMeHeader, StyledHeader };
