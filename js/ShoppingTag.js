class ShoppingTag extends React.Component {
    constructor() {
        super();
        let gruppe1 = App.gruppeHinzufuegen("Obst & Gemüse")
        gruppe1.artikelHinzufuegen("Brokkoli")
        let gruppe2 = App.gruppeHinzufuegen("Getreideprodukte")
        gruppe2.artikelHinzufuegen("Reis")
        let gruppe3 = App.gruppeHinzufuegen("Milchprodukte")
        gruppe3.artikelHinzufuegen("Streukäse")
        let gekaufterArtikel = gruppe3.artikelHinzufuegen("Milch")
        gekaufterArtikel.gekauft = true

        //console.log("Master Desaster")
        
        this.state = {aktiveGruppe: 1, menge: 1, 
            einkaufenAufgeklappt: true, erledigtAufgeklappt: false,showGruppenDialog: false}
        
    }

    setAktivGruppe = (gruppenID) => {
        this.setState({aktiveGruppe: gruppenID})
        App.aktiveGruppe = gruppenID
    }

    artikelChecken = (artikel) => {
        artikel.gekauft = !artikel.gekauft

        this.setState(this.state)
    }

    artikelHinzufuegen = () => {
        let eingabe = document.getElementById("eingabe")
        console.log(this.state)
        if (eingabe.value.trim().length > 0) {
            let gruppeFinden = App.gruppeFinden(this.state.aktiveGruppe)
            gruppeFinden.artikelHinzufuegen(eingabe.value, this.state.menge)
            this.setState({
                gruppenListe: App.gruppenListe
            })
        }
        eingabe.value = ""
        eingabe.focus()
    }

    mengeErhoehen = () => {
        this.setState({menge: this.state.menge + 1})
    }
    mengeReduzieren = () => {
        this.setState({menge: this.state.menge - 1 > 0 ? this.state.menge - 1 : this.state.menge})
    }
    toggleEinkaufenAufgeklappt = () => {
        this.setState({einkaufenAufgeklappt: !this.state.einkaufenAufgeklappt})
    }

    toggleErledigtAufgeklappt = () => {
        this.setState({erledigtAufgeklappt: !this.state.erledigtAufgeklappt})
    }

    gruppenDialogOpen = () => { 
        this.setState({showGruppenDialog: !this.state.showGruppenDialog})
    }


    render = () => {


        return (

            <div>
                <header>
                    <h1>Einkaufsliste</h1>
                    <div className="eingabeleiste">

                        <label htmlFor="Artikel"><input type="text" id="eingabe" placeholder="Artikel hinzufügen"
                                                        autoComplete="on"/></label>
                        <span className="mengenfeld">{this.state.menge}</span>
                        <button onClick={this.mengeErhoehen}><span className="material-icons">arrow_circle_up</span>
                        </button>
                        <button onClick={this.mengeReduzieren}><span className="material-icons">arrow_circle_down</span>
                        </button>
                        <button onClick={this.artikelHinzufuegen}><span className="material-icons">add_circle</span>
                        </button>
                    </div>
                </header>

                <main>
                    <section>
                        <nav>
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
                        </nav>
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
                <hr/>

                <NaviTag gruppenDialogOpen={this.gruppenDialogOpen}/>

                <GruppenDialogTag visible={this.state.showGruppenDialog} 
                                  gruppeHinzufuegen={App.gruppeHinzufuegen}
                                  onDialogClose={() => this.setState({showGruppenDialog: false})}/>
                
                
            </div>

        )
    }
}
