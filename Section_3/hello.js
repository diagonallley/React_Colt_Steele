class Hello extends React.Component {
    render() {
        // console.log(this.props);
        // console.log(this.props.to);
        // return <p>Hello {this.props.to} from {this.props.from}!</p>
        // this.props.to = "blue"; // does not work!
        let { to, from } = this.props; // Props
        console.log(this.props);
        console.log(this.props.to);
        return <p>Hello {to} from {from}!</p>
    }
}

// Props are for configuring your component
// Properties are immutable
// Cannot add properties from the class, the props object is not extensible
