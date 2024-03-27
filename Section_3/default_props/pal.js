class Pal extends React.Component {

    static defaultProps = {
        name: "pal",
        hobbies: ["swim", "running"]
    }
    render() {
        let { name, hobbies } = this.props;
        const lis = hobbies.map(h => <li>{h}</li>)
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                    {/* {lis} */}
                </ul>

            </div>
        )
    }

}