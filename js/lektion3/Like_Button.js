
class Like_Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render = () => {

        /*ToDo: Füge hier eine if-Anweisung hinzu, die "Dir gefällt das." zurückgibt, wenn sich der state zu liked verändert */
        let text = "Like"
        if (this.state.liked){
            text = "Mir gefällt das"
        }

        return (
          <div><button onClick={() => this.setState({ liked: true })}>Like </button>
              <p>{text}</p>
          </div>
        );
    }
}

//<!-- ToDo: Füge hier HTML-Code ein, der einen "Gefällt Mir"-Button beinhaltet und ein onClick-Even verarbeitet -->