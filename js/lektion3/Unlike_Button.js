
class Unlike_Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render = () => {

        /*ToDo: Füge hier eine if-Anweisung hinzu, die "Gefällt mir nicht mehr." zurückgibt, wenn sich der state zu unliked verändert */
        let text = "Unlike"
        if (this.state.liked){
            text = "Mir gefällt das nicht mehr"
        }
        

        return (
            <div><button onClick={() => this.setState({ liked: true })}>UnLike</button>
                <p>{text}</p>
            </div>

        );
    }
}
//<!-- ToDo: Füge hier HTML-Code ein, der einen "Gefällt Mir Nicht Mehr"-Button beinhaltet und ein onClick-Even verarbeitet -->