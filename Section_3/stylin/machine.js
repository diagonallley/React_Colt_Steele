class Machine extends React.Component {
    render() {
        let { s1, s2, s3 } = this.props;
        // let s1 = this.props.s1
        // let s2 = this.props.s2
        // let s3 = this.props.s3
        let same = (s1 === s2) && (s2 === s3);
        let message = "";
        const colors = { fontSize: "50px", backgroundColor: "purple" };
        if (same) {
            message = "You win!"
        } else {
            message = "You lose!"
        }
        return (
            <div className="Machine">
                {/* <label for="textInput"></label> */}
                <label htmlFor="textInput"></label>
                {/* <h1> Slot machines</h1> */}
                <p className={same ? "win" : "lose"} style={{ fontSize: "50px", backgroundColor: "" }}>{s1} {s2} {s3}</p>
                <p>{message}</p>
                <p style={colors}>!</p>





            </div>
        )

    }
}

