class App extends React.Component {
    render() {
        return (<div>

            <Hello to="Ringo" from="Paul" />
            <Hello to="Ile" from="Enq" />

        </div>);
    }
}


ReactDOM.render(<App />, document.getElementById("root"));