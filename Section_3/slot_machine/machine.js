class Machine extends React.Component {
    render() {
        let { s1, s2, s3 } = this.props;
        // let s1 = this.props.s1
        // let s2 = this.props.s2
        // let s3 = this.props.s3
        let same = (s1 === s2) && (s2 === s3);
        let message = "";
        if (same) {
            message = "You win!"
        } else {
            message = "You lose!"
        }
        return (
            <div>
                {/* <h1> Slot machines</h1> */}
                <p>{s1} {s2} {s3}</p>
                <p>{message}</p>
            </div>
        )

    }
}

