import styled from 'styled-components';

export const General = styled.section`
  height: 10000px;
  overflow: hidden;

  .fade-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit-active {
    opacity: 0;
    transform: translateX(100%);
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 500ms, transform 500ms;
  }
`;
