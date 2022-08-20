import styled from '@emotion/styled';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : 'flex-start'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  margin: ${(props) => props.m && props.m};
  padding: ${(props) => props.p && props.p};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  padding: 0px 35px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
