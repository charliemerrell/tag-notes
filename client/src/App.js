import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import SignUp from "./SignUp";
import Login from "./Login";
import { Route, Switch } from "react-router-dom";

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: blue,
    },
});

function App() {
    fetch("/api/hello").then(console.log);
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Switch>
                <Route path="/signup" component={SignUp} exact />
                <Route path="/login" component={Login} exact />
            </Switch>
        </ThemeProvider>
    );
}

export default App;
