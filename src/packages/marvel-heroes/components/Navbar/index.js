import styled from 'styled-components';
import { color } from 'styled-system';
import Svg from '../Svg';

const Navbar = () => (
  <NavbarStyle bg="marvel_gray">
    <MarvelLogo viewBox="0 0 130 52">
      <rect fill="#EC1D24" width="100%" height="100%"></rect>
      <path fill="#FEFEFE" d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"></path>
      <path fill="#EC1D24" d="M0 0h30v52H0z"></path>
      <path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path>
    </MarvelLogo>
    <TotvsLogo viewBox="0 0 281 52">
      <g fillRule="evenodd">
      <path d="M32.076 21.858c-.948-.831-8.728-3.086-15.194-4.65-.05 5.12.256 10.685.916 11.654.947.832 8.73 3.087 15.197 4.653.051-5.12-.254-10.687-.919-11.657"></path>
      <path d="M41.793 35.088c-.642.23-4.418-.514-8.797-1.573-.044 4.404-.35 8.48-.92 9.019-1.589.569-22.406-4.832-23.994-6.227-1.23-1.8-1.23-19.508.002-20.674.641-.228 4.418.515 8.798 1.575.044-4.405.349-8.48.92-9.02 1.587-.567 22.4 4.83 23.991 6.224 1.236 1.808 1.232 19.512 0 20.676M24.964 0C11.177 0 0 11.465 0 25.606c0 14.141 11.177 25.605 24.964 25.605 13.79 0 24.965-11.464 24.965-25.605C49.93 11.466 38.753 0 24.964 0"></path>
      <g>
        <path d="M78.914 15.947h-5.826v22.239c0 .42-.324.764-.72.764h-4.71c-.396 0-.72-.343-.72-.764v-22.24h-5.862a.711.711 0 0 1-.719-.726v-3.936c0-.42.323-.726.72-.726h17.837c.396 0 .755.306.755.726v3.936c0 .421-.36.727-.755.727M96.21 22.48c0-4.585-1.437-6.534-4.459-6.534-3.019 0-4.423 1.95-4.423 6.534v4.549c0 4.584 1.404 6.532 4.423 6.532 3.022 0 4.46-1.948 4.46-6.532V22.48zm-4.459 16.814c-5.933 0-10.645-3.4-10.645-12.265V22.48c0-8.866 4.712-12.266 10.645-12.266 5.935 0 10.645 3.4 10.645 12.266v4.549c0 8.864-4.71 12.265-10.645 12.265zM122.32 15.947h-5.826v22.239c0 .42-.323.764-.72.764h-4.711c-.396 0-.718-.343-.718-.764v-22.24h-5.863a.714.714 0 0 1-.722-.726v-3.936c0-.42.327-.726.722-.726h17.838c.394 0 .754.306.754.726v3.936c0 .421-.36.727-.754.727M147.603 11.36l-5.359 23.69c-.826 3.67-3.451 4.244-5.934 4.244-2.481 0-5.142-.573-5.97-4.243l-5.36-23.69c0-.077-.035-.115-.035-.191 0-.344.288-.612.647-.612h5c.359 0 .646.305.719.688l4.494 22.049c.074.42.18.571.505.571.324 0 .432-.151.504-.571l4.496-22.049c.07-.383.323-.688.682-.688h5.035c.36 0 .612.229.612.612 0 .039-.036.114-.036.19M157.744 39.294c-2.84 0-4.963-.344-6.797-.841-.36-.114-.72-.345-.72-.764v-3.746c0-.534.288-.725.647-.725h.11c1.473.153 5.428.458 6.83.458 2.483 0 3.201-.84 3.201-2.674 0-1.11-.504-1.72-2.372-2.904l-4.963-3.133c-3.345-2.102-4.243-4.51-4.243-7.3 0-4.203 2.228-7.45 9.206-7.45 2.624 0 6.257.458 7.624.84.285.076.539.268.539.688v3.86c0 .344-.145.65-.612.65h-.07c-1.007-.077-5.181-.422-7.625-.422-2.051 0-2.805.65-2.805 2.025 0 1.07.467 1.567 2.408 2.675l4.603 2.637c3.74 2.14 4.855 4.662 4.855 7.757 0 4.05-2.515 8.37-9.816 8.37M184.521 39.113c-2.504 0-4.365-.266-5.939-.531-.608-.114-.68-.267-.68-.685v-1.52c0-.418.286-.609.608-.609h.108c1.647.153 4.257.228 5.903.228 4.294 0 5.438-1.824 5.438-4.486 0-1.9-1.037-2.965-4.292-5.093l-3.47-2.243c-3.292-2.129-4.938-4.068-4.938-7.109 0-4.6 3.112-6.729 8.55-6.729 2.112 0 4.867.228 6.225.456.359.076.609.266.609.647v1.635c0 .38-.25.608-.609.608h-.071a94.99 94.99 0 0 0-6.154-.228c-3.685 0-5.259.836-5.259 3.611 0 1.787 1.18 2.851 3.9 4.6l3.292 2.09c4.15 2.624 5.617 4.714 5.617 7.755 0 3.65-1.789 7.603-8.838 7.603M214.326 13.568h-6.977v24.519c0 .38-.25.76-.644.76h-1.968c-.357 0-.644-.341-.644-.76v-24.52h-6.976c-.394 0-.716-.19-.716-.608v-1.673c0-.38.322-.684.716-.684h17.209c.393 0 .68.266.68.684v1.673c0 .38-.287.609-.68.609M234.47 22.273c0-6.386-2.434-8.82-6.369-8.82-3.9 0-6.404 2.434-6.404 8.82v4.903c0 6.387 2.469 8.82 6.404 8.82 3.9 0 6.368-2.433 6.368-8.82v-4.903zm-6.369 16.84c-5.617 0-9.695-3.497-9.695-11.937v-4.903c0-8.44 4.078-11.937 9.695-11.937s9.66 3.498 9.66 11.937v4.903c0 8.44-4.043 11.938-9.66 11.938zM256.654 18.51c0-3.802-2.326-5.056-6.798-5.056-1.11 0-3.077 0-3.935.114v10.416c.75 0 3.112.076 3.935.076 4.4 0 6.798-1.18 6.798-5.285v-.265zm3.828 20.337h-2.505c-.428 0-.5 0-.787-.493l-6.403-11.33h-.931c-1.18 0-3.041-.075-3.935-.113v11.176c0 .38-.252.76-.645.76h-1.932c-.358 0-.644-.342-.644-.76v-26.61c0-.533.215-.76.86-.837 1.538-.19 4.221-.304 6.296-.304 5.653 0 10.018 2.015 10.018 8.174v.265c0 4.258-2.362 6.768-5.617 7.68l6.583 11.67a.65.65 0 0 1 .107.342c0 .228-.143.38-.465.38zM279.66 38.923c-1.36.153-4.865.19-6.977.19-5.008 0-7.62-2.015-7.62-7.07V17.407c0-5.056 2.612-7.07 7.62-7.07 2.112 0 5.475.076 6.977.227.215.039.359.304.359.533v1.9c0 .267-.144.457-.395.457h-6.905c-3.793 0-4.4 1.064-4.4 3.953v5.284h10.984c.393 0 .716.342.716.76v1.444c0 .419-.323.76-.716.76h-10.984v6.388c0 2.889.607 3.954 4.4 3.954h6.905c.251 0 .395.19.395.455v1.94c0 .227-.144.493-.359.531"></path>
      </g>  
      </g>
    </TotvsLogo>
  </NavbarStyle>
);

const MarvelLogo = styled(Svg)`
  left: 100px;
  position: absolute;
  width: 140px;
  z-index: 2;
`;

const TotvsLogo = styled(Svg)`
  fill: #fff;
  position: absolute;
  right: 80px;
  width: 200px;
  z-index: 2;
`;

const NavbarStyle = styled.nav`
  align-items: center;
  ${color}
  display: flex;
  height: 85px;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  &:after,
  &:before {
    ${color}
    border-radius: 60px;
    bottom: -15px;
    content: '';
    display: block;
    height: 200px;
    max-width: 450px;
    position: absolute;
    width: 50%;
    z-index: 1;
  }

  &:before {
    left: -50px;
  }

  &:after {
    right: -50px;
  }
`;

export default Navbar;