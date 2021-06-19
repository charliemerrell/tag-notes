import Button from "@material-ui/core/Button";

function App() {
    fetch("/api/hello").then(console.log);
    return (
        <div className="App">
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </div>
    );
}

export default App;
