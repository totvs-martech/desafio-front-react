const breakpoints = ['485px', '768px', '1024px', '1360px', '1920px']

const mediaQueries = {
  small: `@media screen and (max-width: ${breakpoints[0]})`,
  medium: `@media screen and (max-width: ${breakpoints[1]})`,
  large: `@media screen and (max-width: ${breakpoints[2]})`,
}

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export default {
  main: '#000',
  colors: {
    marvel_gray: '#202020'
  },
  breakpoints,
  mediaQueries
};