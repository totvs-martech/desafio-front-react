const theme = {
  colors: {
    button: {
      active: '#ff7e5f',
      primary: '#2B2C2D',
      secundary: '#121214'
    },
    primary: '#ff7e5f',
    danger: '#DC2626',
    light: '#FFFFFF',
  },
  text: {
    dark: '#2B2C2D',
    grey: '#585A68',
    lightGrey: '#7D828E',
    light: '#ffffff'
  },
  background: {
    primary: '#121214',
    secundary: '#2A2A31',
    dark: '#202024',
    light: '#383840'
  },
  border: {
    primary: '2px solid #202024',
    dashed: '2px dashed #202024'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px'
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1550px'
  },
  borderRadius: {
    none: '0',
    sm: '.125rem',
    DEFAULT: '.25rem',
    lg: '.5rem',
    full: '9999px'
  },
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none'
  }
}

export { theme }
