import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui/styles/MuiThemeProvider'


export default class Wrapper extends Component {
    render() {
        return (
            <MuiThemeProvider>
                {this.props.children}
            </MuiThemeProvider>
        )
    }
}