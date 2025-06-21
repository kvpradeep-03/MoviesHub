/**
 * The theme is passed as a prop from the ThemeProvider, which wraps your <App /> component.
 * The ThemeProvider makes your custom theme available to the entire React component tree.
 * Every MUI component and every styled() component inside < App /> (and its children) will have access to the theme via props.
 */

import { createTheme } from '@mui/material'
import React from 'react'


export const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",           // light background
            contrastText: "#000000",   // black text
        },
        success: {
            main: "#000000",           // dark background
            contrastText: "#FFFFFF",   // white text
        }
    }

});
