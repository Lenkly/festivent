import styled from '@emotion/styled';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => flexProps[props.align].alignItems};
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => flexProps[props.align].alignItems};
`;

const flexProps = {
  Center: {
    alignItems: 'center',
  },
  Start: {
    alignItems: 'flex-start',
  },
  End: {
    alignItems: 'flex-end',
  },
};

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
