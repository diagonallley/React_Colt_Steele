class App extends React.Component {
    render() {
        return (
            <div>
                <Pal name="Ion" hobbies={["reading", "writing", "dancing"]} />
                <Pal name="Aron" hobbies={["roller skating", "just"]} />
                
            </div>
        )

    }
}



ReactDOM.render(<App />, document.getElementById("root"));