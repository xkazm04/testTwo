import Tooltip from '../Tooltip';
import { RewardTitle } from '../typography/Titles';
import  {useState} from 'react'
import { InfoIcon } from '../icons/Common';
import styled,{useTheme} from 'styled-components';

const Container = styled.div`
  min-width: 100px;
`

const CalcOutcome = ({ conn, multi }) => {
  const [microTooltip, setMicroTooltip] = useState(false);
  const [impactTooltip, setImpactTooltip] = useState(false);
  const theme = useTheme()

  return (
    <Container>
      {conn ?
        <RewardTitle onMouseEnter={()=>{setMicroTooltip(true)}} onMouseLeave={()=>{setMicroTooltip(false)}}>
          {microTooltip && <Tooltip text={'Multiplier: Number of involved microfunds from other users'} margin={'-70px'}/>}
          {conn} X 
          <InfoIcon width={15} color={theme.colors.icon}/>
        </RewardTitle>
       : null}
      {multi ? 
        <RewardTitle onMouseEnter={()=>{setImpactTooltip(true)}} onMouseLeave={()=>{setImpactTooltip(false)}}>
        {impactTooltip && <Tooltip text={'Total impact of this donation'} margin={'-50px'}/>}
          ${multi}
          <InfoIcon width={15} color={theme.colors.icon}/>
        </RewardTitle>
      : null}
    </Container>
  );
};

export default CalcOutcome;
