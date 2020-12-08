import {createGlobalStyle} from 'styled-components';
import backgroundImg from "../images/gradient2.jpg";

export const GlobalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Oxygen', sans-serif;
      font-weight: 100;
   }
   
   .App {
      text-align: center;
   }
    
   body {
      min-height: 100vh;
      margin: 0 15px;
      position: relative;
    
      &:before {
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        content: "";
        position: fixed;
        background-image: url(${backgroundImg});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    }
    
    #root {
      height: 100%;
      margin: 0 auto;
      position: relative;
    }
`;
