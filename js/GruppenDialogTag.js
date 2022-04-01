class GruppenDialogTag extends React.Component {

    constructor(props) {
        super(props);

        this.state = {showDialog: this.props.visible, gruppenListe: this.props.gruppenListe,
        editID:null, editName:""}
    }

    gruppeHinzufuegen = () => {
        let eingabe = document.getElementById("Gruppeneingabe")
        let neueGruppe = eingabe.value.trim() 
        console.log(neueGruppe)
        if (neueGruppe.length>0) {
            App.gruppeHinzufuegen(neueGruppe)
        }
        eingabe.value = ""
        eingabe.focus()
    }

    gruppeEntfernen = (id) => {
        App.gruppeEntfernen(id)
        this.setState({gruppenListe: App.gruppenListe})
    }
    
    gruppeBearbeiten = (id,name) => {
        this.setState({editID: id})
        this.setState({editName:name})
    }
    
    gruppeUmbenennen = () => {
        App.gruppeUmbenennen(this.state.editID,this.state.editName)
        this.setState({editID: null})
    }
    

    handelChange = (e) => {
        this.setState({newName: e.target.value});
    }
    
    handelEditChange =(e) => {
        this.setState({editName:e.target.value})
    }
    
    
    render = () => {


        return (<div className={this.props.visible ? "mdc-dialog mdc-dialog--open" : "mdc-dialog"}>
            <div className="mdc-dialog__container">
                <div className="mdc-dialog__surface">
                    <h2 className="mdc-dialog__title">Gruppen bearbeiten</h2>
                    <div className="mcd-dialog__content">
                        <label htmlFor="Gruppe"><input type="text" id="Gruppeneingabe" placeholder="Gruppe hinzufügen"
                                                            autoComplete="on"/></label>
                        <button onClick={this.gruppeHinzufuegen}> + </button>
                        <hr/>
                        <dl className="mdc-deprecated-list">
                            {App.gruppenListe.map(gruppe => {

                                return (
                                    <dt key={gruppe.id}>
                                        { this.state.editID == gruppe.id ? <input type="text" id="Eingabefeld"
                                            value={this.state.editName} onChange={this.handelEditChange}/> : <span>{gruppe.name}</span>}
                                        {this.state.editID == gruppe.id ? 
                                            <i onClick={()=> this.gruppeUmbenennen()} className ="material-icons">check_circle</i>:
                                            <i onClick={()=> this.gruppeBearbeiten(gruppe.id,gruppe.name)} className ="material-icons">edit</i>}

                                        <i onClick={()=>this.gruppeEntfernen(gruppe.id)} className="material-icons">delete</i>

                                    </dt>

                                )})
                            } 
                        </dl>
                        
                    </div>
                    <div className="mdc-dialog__achtions"><button onClick={this.props.onDialogClose}><span className="mdc-button__label"></span>Schliessen</button></div>
                    
                    
                </div>
            </div>
        </div>)


    }


}