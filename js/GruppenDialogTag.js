class GruppenDialogTag extends React.Component {

    constructor(props) {
        super(props);

        this.state = {showDialog: this.props.visible, gruppenListe: this.props.gruppenListe}
    }

    render = () => {

        return (<div className={this.props.visible ? "mdc-dialog mdc-dialog--open" : "mdc-dialog"}>
            <div className="mdc-dialog__container">
                <div className="mdc-dialog__surface">
                    <h2 className="mdc-dialog__title">Gruppen bearbeiten</h2>
                    <div className="mcd-dialog__content">
                        <label htmlFor="Gruppe"><input type="text" id="Gruppeneingabe" placeholder="Gruppe hinzufügen"
                                                            autoComplete="on"/></label>
                        <button onClick={this.props.gruppeHinzufuegen}> + </button>
                        <hr/>
                        <dl className="mdc-deprecated-list">
                            {App.gruppenListe.map(gruppe => (
                                <dt key={gruppe.id}>
                                    <span>{gruppe.name}</span>
                                    <i onClick={()=>App.gruppeBearbeiten(gruppe.id)}></i>
                                    <i onClick={()=>App.gruppeEntfernen(gruppe.id)}></i>
                                    
                                </dt>
                                
                            ) )}
                        </dl>
                        
                    </div>
                    <div className="mdc-dialog__achtions"><button onClick={this.props.onDialogClose}><span className="mdc-button__label"></span>Schliessen</button></div>
                    
                    
                </div>
            </div>
        </div>)


    }

}