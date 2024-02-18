export const colors = {
  primary: {
    light: '#B2D5FF',
    base: '#4696FB',
    disable: '#539FFF',
  },
  secondary: {
    orange: '#FFC9AD',
    purple: '#6A45FF',
    blue: '#BAEAFF',
    green: '#C2EED6',
    yellow: '#FFE1A6',
    red: '#FF9090',
  },
  status: {
    progress: '#2A85FF',
    success: '#3C9F19',
    error: '#E53A22',
    warning: '#E48900',
  },
  neutral: {
    '00': '#FFFFFF',
    '01': '#FCFCFD',
    '02': '#F4F5F6',
    '03': '#E6E8EC',
    '04': '#B1B5C3',
    '05': '#777E90',
    '06': '#353945',
    '07': '#23262F',
    '08': '#141414',
  },
};

export type ColorKey = keyof typeof colors;
