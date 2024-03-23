

class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My img</h1>
                {/* <h1>My number is {2 * 11}</h1> */}
                <h1>My current mood is:{getMood()}</h1>
                <img src="https://source.unsplash.com/user/wsanter" />

            </div>
        );
    }
}


ReactDOM.render(<JSXDemo />, document.getElementById("root"));