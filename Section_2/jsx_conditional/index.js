class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let message = "";
        if (num === 7) {
            <h1>Congrats you win</h1>
            message = <div><img src="https://media0.giphy.com/media/3ofT5M1MBehbrbWc0g/giphy.gif?cid=b0d36e5aton0gc4s8s42xy6em3476zr1thrh4zak2idbxkla&ep=v1_gifs_random&rid=giphy.gif&ct=g" /></div>

        } else {
            message = <p>Sorry you lose!</p>
        }
        return (
            <div>
                <h1>Your number is {num}</h1>
                <p>{num === 7 ? "Great you are lucky" : "Eh its okay!"}</p>
                {/* {num === 7
                    ? <img src="https://media3.giphy.com/media/5QNq1qSv4ayVq/giphy.gif?cid=b0d36e5ajl9fhbul836uj88iil3iihbr4or814sd4va6mh3w&ep=v1_gifs_random&rid=giphy.gif&ct=g" />
                    : null}
                     */}
                {/* {num === 7
                    && <img src="https://media3.giphy.com/media/5QNq1qSv4ayVq/giphy.gif?cid=b0d36e5ajl9fhbul836uj88iil3iihbr4or814sd4va6mh3w&ep=v1_gifs_random&rid=giphy.gif&ct=g" />
                } */}
                <h1>{message}</h1>
            </div>
        );
    }
}

function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}
ReactDOM.render(<NumPicker />, document.getElementById("root"));