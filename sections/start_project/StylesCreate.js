import styled from 'styled-components';

export const RulesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  text-align: left;
  padding-left: 17%;
  padding-right: 17%;
  margin-top: 5%;
  @media (max-width: 768px) {
    padding-left: 3%;
    padding-right: 3%;
  }
`;

export const RulesTitle = styled.p`
  font-size: 1.3em;
  font-weight: normal;
  font-family: 'Neucha';
  margin-bottom: 5%;
  letter-spacing: 0.2px;
  @media (min-width: 1980px) {
    font-size: 1.9em;
  }
`;

export const WarningBox = styled.div`
  background: rgba(9, 0, 0, 0.3);
  border: 1px solid #500000;
  border-radius: 5px;
  padding: 4%;
  color: ${(props) => props.theme.colors.font};
`;

export const Li = styled.li`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 0.8em;
  line-height: 2em;
  letter-spacing: 0.01em;
  color: ${(props) => props.theme.colors.font};
  @media (min-width: 1980px) {
    font-size: 1.1em;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 8%;
  padding-bottom: 4%;
  gap: 10%;
  border-bottom: 1px solid #262626;
  @media (max-width: 868px) {
    flex-wrap: wrap;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  padding-left: 1%;
`;


export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.gradient};
  padding: 4%;
  border-radius: 45px;
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 1em;
`;


export const SumTitle = styled.div`
  font-weight: 300;
  font-size: 0.8em;
  font-style: italic;
  font-family: 'Roboto';
  opacity: 0.9;
  @media (min-width: 1768px) {
    font-size: 1.3em;
  }
`;

export const SumValue = styled.div`
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.95em;
  font-family: 'Neucha';
  letter-spacing: 0.3px;
  @media (min-width: 1768px) {
    font-size: 1.2em;
  }
`;

export const SumHalf = styled.div`
  margin-left: 8%;
  margin-right: 8%;
  text-align: ${(props) => props.align};
`;

export const SumRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SumHead = styled.div`
  text-align: center;
  font-family: 'Neucha';
  font-size: 1.3em;
  letter-spacing: 0.3px;
  margin-bottom: 2%;
  @media (min-width: 1768px) {
    font-size: 1.9em;
  }
`;

export const Divider = styled.div`
  align-self: center;
`;

export const EyeBox = styled.div`
  position: absolute;
  margin-left: 24%;
  margin-top: 2%;
  @media (max-width: 1068px) {
    display: none;
  }
`;
