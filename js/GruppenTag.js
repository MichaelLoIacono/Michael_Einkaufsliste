class GruppenTag extends React.Component {
constructor() {
    super();
}
  render = () => {
    return (
      <div>

          <dt className={!this.props.erledigt && this.props.aktiv ? "aktiv":"inaktiv"} 
              onClick={()=>this.props.aktivegruppe(this.props.gruppe.id)}>{this.props.gruppe.name} </dt>
        <dl>
            {this.props.gruppe.artikelListe.filter(artikel => artikel.gekauft == this.props.erledigt).map(artikel => (
                <ArtikelTag key={artikel.id} artikel={artikel}/>
            ))}
        </dl>
      </div>
    )
  }
}
