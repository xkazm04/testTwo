import styled from 'styled-components';

export const Table = styled.table`
  position: relative;
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  border: none;
  text-align: center;
  background: ${(props) => props.theme.colors.tableGradient};
  box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.85);
  margin-bottom: 2%;
  border: 1px solid grey;
`;

export const Header = styled.th`
  border-right: 1px solid grey;
  padding: 1% 16px;
  font-family: 'Roboto';
`;

export const Tr = styled.tr`
  padding: 1%;
  border-bottom: 1px solid grey;
  transition: 0.1s;
  &:hover {
    background: ${(props) => props.theme.colors.transparentCard};
  }
`;

export const HeadRow = styled(Tr)`
  background: ${(props) => props.theme.colors.gradient};
`;

export const Cell = styled.td`
  padding: 2px;
  font-family: 'Neucha';
  border-right: 1px solid grey;
`;

export const Loading = () => {
  return <>...Loading</>;
};

export const AddCol = styled.div`
  display: flex;
  justify-content: center;
  min-width: 150px;
`;

export const ImageHover = styled.button`
  cursor: pointer;
  background: inherit;
  border: none;
  outline: none;
`;

export const HeaderCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  font-family: 'Neucha';
  letter-spacing: 1px;
  gap: 1rem;
`;

export const MyInput = styled.input`
  background: {props => props.theme.colors.transparent};
  padding: 2px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 10px;
  font-family: 'Gemunu Libre';
  width: 100%;
  @media (min-width: 1568px) {
    font-size: 15px;
  }
`;

export const ActionCol = styled.div`
  min-width: 100px;
`

export const TableWrapper = styled.div`
  position: relative;
`
