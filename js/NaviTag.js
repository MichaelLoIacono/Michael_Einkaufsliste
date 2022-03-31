class NaviTag extends React.Component {
    constructor(props) {
        super(props);


    }



    render()  {
        return (
            <nav className="navi">
            <button onClick= {this.props.gruppenDialogOpen}><span
                className="material-icons">bookmark_add</span>Gruppen</button> 
            <button><span
                className="material-icons">settings</span>Setting</button> 
            </nav>)}}

        
            