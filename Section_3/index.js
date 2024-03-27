class App extends React.Component {
    render() {
        return (<div>

            <Hello
                to="Ringo"
                from="Paul"
                num={3}
                data={[1, 2, 3, 4, 5]}
                isFunny={true}
                bangs={3}
                img="https://picsum.photos/300"
            // isFunny
            />

            <Hello
                to="Britney"
                from="Adele"
                bangs={10}
            />
            {/* <Hello to="Ile" from="Enq" /> */}

        </div>);
    }
}

// !!!!!!!!!!

ReactDOM.render(<App />, document.getElementById("root"));