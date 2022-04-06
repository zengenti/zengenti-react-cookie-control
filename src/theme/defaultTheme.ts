import { CookieProviderProps } from '../components/cookieProvider/cookieProvider.type';

export const defaultTheme: CookieProviderProps['theme'] = {
  background: '#fff',
  button: {
    borderRadius: '2px',
    borderWidth: '1px',
    borderColor: '#1d5fc2',
    color: '#1d5fc2',
    fontSize: '16px',
    lineHeight: '24px',
    padding: '16px 24px',
    solid: {
      background: '#1d5c90',
      color: '#fff',
      hover: {
        background: '#00304d',
        color: '#fff',
      },
    },
  },
  containerWidth: '1280px',
  divideColor: '#ddd',
  heading: {
    color: '#002033',
    fontFamily: 'Poppins, Arial, sans-serif',
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '24px',
  },
  iconColor: '#444',
  linkColor: '#1d5fc2',
  text: {
    color: '#444',
    fontFamily: 'Poppins, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
  },
  toggle: {
    off: {
      background: '#ccc',
      hover: '#999',
    },
    on: {
      background: '#1d5c90',
      hover: '#00304d',
    },
  },
};
