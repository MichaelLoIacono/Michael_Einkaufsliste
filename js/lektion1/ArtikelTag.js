class ArtikelTag extends React.Component {

    render = () => {
        return (
            <div>
                <dd><label><input type="checkbox"/>{this.props.artikel.name}</label></dd>
            </div>
        )

}}
