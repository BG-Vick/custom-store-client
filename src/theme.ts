/* import { createTheme } from '@mui/material/styles';
import { lightTheme } from '@nemo-ui/core/theme/light';
import { merge } from 'lodash';

const mainFont = 'Inter, sans-serif';

export const theme = createTheme(
  merge(lightTheme, {
    spacing: 4,
    typography: {
      fontFamily: mainFont,
      h1: {
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '40px',
      },
      h2: {
        fontFamily: mainFont,
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '32px',
      },
      h3: {
        fontFamily: mainFont,
        fontSize: '18px',
        lineHeight: '24px',
      },
      body1: {
        lineHeight: '20px',
        fontSize: '14px',
      },
      fontWeightRegular: 500,
      fontWeightMedium: 600,
    },
    palette: {
      text: {
        primary: '#363940',
        secondary: '#626773',
        disabled: '#C1C5CC',
      },
      secondary: {
        main: '#626773',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            // scrollbarColor: 'rgba(13, 26, 51, 0.2) #ffffff',
            scrollbarWidth: 'thin',
            overflowY: 'hidden',
            display: 'flex',
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              width: 16,
              height: 16,
              // backgroundColor: '#ffffff',
              backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
              borderRadius: 4,
              boxShadow: 'inset 0 0 16px 16px rgba(13, 26, 51, 0.05)',
              border: 'solid 6px transparent',
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              borderRadius: 12,
              boxShadow: 'inset 0 0 16px 16px rgba(13, 26, 51, 0.2)',
              border: 'solid 6px transparent',
            },
            '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
              backgroundColor: '#ffffff',
            },
            // Свойства всплывашки у компонента PFSelector
            // '& .MuiAutocomplete-popper': {
            //   border: '1px solid red',
            // },
          },
        },
      },
    },
  }),
);
 */
