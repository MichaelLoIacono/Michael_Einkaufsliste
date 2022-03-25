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

        this.state = {aktiveGruppe: null}

    }

    setAktivGruppe=(gruppenID)=>{
        console.log(this)
        this.setState({aktiveGruppe: gruppenID})
        App.aktiveGruppe = gruppenID}
    
    
    
    
    render() {
      
        return (
            
      <div>
          <header>
          <h1>Einkaufsliste</h1>
          <label htmlFor="Artikel"></label><input type="text" id="Artikel" placeholder="Artikel hinzufügen"
                                                  autoComplete="on"/>
          <button><span className="material-icons">add_circle</span></button>

        </header>

          <main>
              <section>
                  <nav>

                      <h2>Einkauf <i className="material-icons">expand_less</i>
                      </h2>
                      <dl>
                          {App.gruppenListe.map(gruppe => (
                              <GruppenTag key={gruppe.id} gruppe={gruppe} aktivegruppe={this.setAktivGruppe} 
                                          erledigt={false} aktiv={gruppe.id==this.state.aktiveGruppe}/>
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
                          <GruppenTag key={gruppe.id} gruppe={gruppe} aktivegruppe={this.setAktivGruppe} erledigt={true}/>
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
