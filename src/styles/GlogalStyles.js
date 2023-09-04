import { Global, css } from '@emotion/react';

const globalStyles = css`
  :root {
    --white-color: #ffffff;
    --button-bgd-color: #3e85f3;
    --color-task-low-priority: #3e85f3;
    --bgc-task-low-priority: #ceeefd;
    --color-task-medium-priority: #f3b249;
    --bgc-task-medium-priority: #fcf0d4;
    --color-task-high-priority: #ea3d65;
    --bgc-task-high-priority: #ffd2dd;
  }

  @font-face {
    font-family: 'InterTight';
    src: local('InterTight'), local('InterTight-Regular'),
      url('../fonts/InterTight-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'InterTight';
    src: local('InterTight'), local('InterTight-Medium'),
      url('../fonts/InterTight-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'InterTight';
    src: local('InterTight'), local('InterTight-SemiBold'),
      url('../fonts/InterTight-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'InterTight';
    src: local('InterTight'), local('InterTight-Bold'),
      url('../fonts/InterTight-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'InterTight';
    src: local('InterTight'), local('InterTight-BoldItalic'),
      url('../fonts/InterTight-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'), local('Poppins-Regular'),
      url('../fonts/Poppins-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'), local('Poppins-Medium'),
      url('../fonts/Poppins-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'Inter Tight', sans-serif;

    background-color: var(--main-background-color);
    color: #171820;

    margin: 0;
    padding: 0;
  }

  ul,
  ol,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  h1,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
  .recharts-layer {
  }
`;

const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;
