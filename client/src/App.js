import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import SignUp from "./SignUp";

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
            <SignUp />;
        </ThemeProvider>
    );
}

export default App;
