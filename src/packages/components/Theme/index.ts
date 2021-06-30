const theme = {
  colors: {
    button: {
      primary: '#3B5BFD',
      danger: '#DC2626',
      light: '#FFFFFF'
    },
    primary: '#3B5BFD',
    danger: '#DC2626',
    light: '#FFFFFF',
    background: {
      primary: '#f9fafb',
      secundary: '#3B5BFD',
      dark: '#24265B',
      darkGrey: '#252F3F'
    },
    text: {
      dark: '#2B2C2D',
      grey: '#585A68',
      lightGrey: '#7D828E',
      light: '#ffffff'
    }
  },
  border: {
    primary: '1px solid #e4e4e7',
    dashed: '2px dashed #e4e4e7'
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
