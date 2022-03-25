class ArtikelTag extends React.Component {

  render = () => {
     
    return (
      <div>
        
          <label htmlFor="checkbox1">
          <input id="checkbox1" type="checkbox" checked={this.props.artikel.gekauft}/>{this.props.artikel.gekauft ? 
              <s>{this.props.artikel.name}</s> : this.props.artikel.name}
              </label>
      </div>
    )
  }
}
