class GruppenTag extends React.Component {
    constructor() {
        super();
    }

    artikelEntfernen = (artikelName) => {
        this.props.gruppe.artikelEntfernen(artikelName)
        this.props.setAktivGruppe(this.props.gruppe.id)
    }


    render = () => {
        return (
            <div>

                <dt className={!this.props.erledigt && this.props.aktiv ? "aktiv" : "inaktiv"}
                    onClick={!this.props.erledigt ?() => this.props.setAktivGruppe(this.props.gruppe.id):null}>{this.props.gruppe.name} </dt>
                <dl>
                    {this.props.gruppe.artikelListe.filter(artikel => artikel.gekauft === this.props.erledigt).map(artikel => (
                        <ArtikelTag key={artikel.id} artikel={artikel} checkHandler={this.props.checkHandler}
                        deleteHandler={this.artikelEntfernen}/>
                    ))}
                </dl>
            </div>
        )
    }
}
