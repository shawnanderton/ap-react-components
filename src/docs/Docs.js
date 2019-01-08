import React from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ff4400'
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00'
        },
        test: {
            light: '#0066ff',
            main: '#40AF48',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00'
        }
        // error: will use the default color
    }
});

export default class Docs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1)
        };
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({ route: window.location.hash.substr(1) });
        });
    }

    render() {
        const { route } = this.state;
        const component = route
            ? componentData.filter(component => component.name === route)[0]
            : componentData[0];

        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Navigation components={componentData.map(component => component.name)} />
                    <ComponentPage component={component} />
                </div>
            </MuiThemeProvider>
        );
    }
}
