class Hello extends React.Component {
    render() {
        let bangs = "!".repeat(this.props.bangs);
        // console.log(this.props);
        // console.log(this.props.to);
        // return <p>Hello {this.props.to} from {this.props.from}!</p>
        // this.props.to = "blue"; // does not work!
        let { to, from } = this.props; // Props
        // console.log(this.props);
        console.log(this.props);
        return (
            <div>

                <p>Hello {to} from {from}{bangs}</p>
                <img src={this.props.img} />
                

            </div>)
    }
}

// Props are for configuring your component
// Properties are immutable
// Cannot add properties from the class, the props object is not extensible

// Properties can be strings, but they can also be other types

{/* <User name="Jane" salary={100000} hobbies={["bridge","reading","tea"]}/> */ }
