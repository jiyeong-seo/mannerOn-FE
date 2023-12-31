import styled from 'styled-components';

export const Home = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const WrapperTop = styled.div`
  color: ${({ theme }) => theme.colors.darkgray};
  padding: 17px 0px 24px 0px;
`;

export const ChatWrapper = styled.div`
  height: calc(100vh - 50px);
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
