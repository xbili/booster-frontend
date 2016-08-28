import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export const CoreLayout = ({children}) => (
  <MuiThemeProvider>
    <div className="main">
      {children}
    </div>
  </MuiThemeProvider>
)

