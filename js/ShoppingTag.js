class ShoppingTag extends React.Component {
    constructor() {
        super();

        let gruppe1 = App.gruppeHinzufuegen("Obst")
        gruppe1.artikelHinzufuegen("Apfel")
        gruppe1.artikelHinzufuegen("Banane")

        let gruppe2 = App.gruppeHinzufuegen( "Getränke")
        let artikel1 = gruppe2.artikelHinzufuegen( "Milch")

        let gruppe3 = App.gruppeHinzufuegen( "Fleisch")
        let artikel2 = gruppe3.artikelHinzufuegen( "Schnitzel")
        artikel1.gekauft = true

   console.log(1)

        this.state = {aktiveGruppe: null}

    }

    setAktivGruppe=(gruppenID)=>{
        this.setState({aktiveGruppe: gruppenID})
        App.aktiveGruppe = gruppenID}
    
    artikelChecken=(artikel)=> {
        artikel.gekauft = !artikel.gekauft
    
    this.setState(this.state)}
    
    artikelHinzufuegen=()=> {
        let eingabe = document.getElementById("eingabe")
        console.log(this.state)
        if (eingabe.value.trim().length>0) {
          let gruppeFinden = App.gruppeFinden(this.state.aktiveGruppe)
              gruppeFinden.artikelHinzufuegen(eingabe.value)
            this.setState({
                              gruppenListe: App.gruppenListe
                          })
        }
        eingabe.value =""
        eingabe.focus()
    }
    
    
        
    
    render() {
      
        return (
            
      <div>
          <header>
          <h1>Einkaufsliste</h1>
          <label htmlFor="Artikel"/><input type="text" id="eingabe" placeholder="Artikel hinzufügen"
                                                  autoComplete="on"/>
          <button onClick={this.artikelHinzufuegen}><span className="material-icons">add_circle</span></button>

        </header>

          <main>
              <section>
                  <nav>

                      <h2>Einkauf <i className="material-icons">expand_less</i>
                      </h2>
                      <dl>
                          {App.gruppenListe.map(gruppe => (
                              <GruppenTag key={gruppe.id} gruppe={gruppe} setAktivGruppe={this.setAktivGruppe} 
                                          erledigt={false} aktiv={gruppe.id===this.state.aktiveGruppe}
                              checkHandler={this.artikelChecken}
                              />
                          ))}
                      </dl>
                  </nav>
              </section>
              <hr/>
              <section>
                  <h2>Erledigt <i className="material-icons">expand_less</i>
                  </h2>
                  <dl>
                      {App.gruppenListe.map(gruppe => (
                          <GruppenTag key={gruppe.id} gruppe={gruppe} setAktivGruppe={this.setAktivGruppe} 
                                      erledigt={true}
                                      checkHandler={this.artikelChecken}
                          />
                      ))}
                  </dl>
              </section>
          </main>
          <hr/>

          <NaviTag/>
         
      </div>
        
    )
  }
}
