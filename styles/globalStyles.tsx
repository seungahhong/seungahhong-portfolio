import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;

          word-break: keep-all;
          overflow-wrap: break-word;
        }
      `}
    />
  );
};

export default GlobalStyles;
