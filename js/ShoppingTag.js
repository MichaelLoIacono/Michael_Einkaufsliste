class ShoppingTag extends React.Component {
    /** Dies ist der Haupttag der App, hier werden die Gruppen und die Artikel aufgelistet*/
    constructor() {
        super();

        this.state = {aktiveGruppe: 1, gruppenListe:App.gruppenListe,
            einkaufenAufgeklappt: true, erledigtAufgeklappt: false,showGruppenDialog: false}
        this.startzustand()
        
    }
    /** liest die Liste, Die Liste übernimmt er aus der Json */
    async startzustand(){
        let server= localStorage.getItem(App.STORAGE_KEY)

        if (server){
            App.laden()
        }else {
            await App.datenEinlesen()
            this.setState(this.state)
        }
    }
    

/** Diese methode setzt die aktive Gruppe, Neue Artikel werden zur aktive Gruppen hinzugefügt*/
    setAktivGruppe = (gruppenID) => {
        this.setState({aktiveGruppe: gruppenID})
        App.aktiveGruppe = gruppenID
    }
    /** Ein gecheckter Artikel wird in die Erldigtliste gezogen */
    artikelChecken = (artikel) => {
        artikel.gekauft = !artikel.gekauft

        this.setState(this.state)
    }
    /** Diese methode fügt einen Artikel hinzu */
    artikelHinzufuegen = () => {
        let eingabe = document.getElementById("eingabe")
        let neuerName = eingabe.value.trim()
        console.log(this.state)
        if (neuerName.length > 0) {
            let gruppeFinden = App.gruppeFinden(this.state.aktiveGruppe)
            gruppeFinden.artikelHinzufuegen(neuerName, this.state.menge)
            this.setState({
                gruppenListe: App.gruppenListe
            })
        }
        eingabe.value = ""
        eingabe.focus()
    }

    /** Hier werden ganze Listen auf und zu geklappt */
    toggleEinkaufenAufgeklappt = () => {
        this.setState({einkaufenAufgeklappt: !this.state.einkaufenAufgeklappt})
    }

    toggleErledigtAufgeklappt = () => {
        this.setState({erledigtAufgeklappt: !this.state.erledigtAufgeklappt})
    }
    /** Hier wird der Gruppendialog geöffnet*/
    gruppenDialogOpen = () => {
        this.setState({showGruppenDialog: !this.state.showGruppenDialog})
    }


    render = () => {


        return (

            <div>
                <header>
                    <h1>Einkaufsliste</h1>
                    <div className="header">

                        <label htmlFor="Artikel"><input type="text" id="eingabe" placeholder="Artikel hinzufügen"
                                                        autoComplete="on"/></label>
                        <button onClick={this.artikelHinzufuegen}><span className="material-icons">add</span>
                        </button>
                    </div>
                </header>

                <main>
                    <section>
                        <div>
                            <h2>Einkauf
                                <i onClick={this.toggleEinkaufenAufgeklappt} className="material-icons">{this.state.einkaufenAufgeklappt ? "expand_less":"expand_more" }</i>
                            </h2>
                            <dl>
                                {this.state.einkaufenAufgeklappt && App.gruppenListe.map(gruppe => (
                                    <GruppenTag key={gruppe.id} gruppe={gruppe} setAktivGruppe={this.setAktivGruppe}
                                                erledigt={false} aktiv={gruppe.id === this.state.aktiveGruppe}
                                                checkHandler={this.artikelChecken}/>
                                ))}
                            </dl>
                        </div>
                    </section>
                    <hr/>
                    <section>
                        <h2>Erledigt
                            <i onClick={this.toggleErledigtAufgeklappt} className="material-icons">{this.state.erledigtAufgeklappt ? "expand_less":"expand_more" }</i>
                        </h2>
                        <dl>
                            {this.state.erledigtAufgeklappt && App.gruppenListe.map(gruppe => (
                                <GruppenTag key={gruppe.id} gruppe={gruppe} setAktivGruppe={this.setAktivGruppe}
                                            erledigt={true}
                                            checkHandler={this.artikelChecken}/>
                            ))}
                        </dl>
                    </section>
                </main>
                

                <nav>

                    <a onClick= {this.gruppenDialogOpen} href="#" className="button">Neue Gruppe</a>
                </nav>


                <GruppenDialog visible={this.state.showGruppenDialog}
                               gruppeHinzufuegen={App.gruppeHinzufuegen}
                               gruppenListe={App.gruppenListe}
                               onDialogClose={() => this.setState({showGruppenDialog: false})}/>


            </div>

        )
    }
}
