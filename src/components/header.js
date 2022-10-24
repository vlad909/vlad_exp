import logo from '../assets/images/logo.png'

function header() {
    const links = [
        {
            text: 'about',
            anchor: '#about'
        },
        {
            text: 'projects',
            anchor: '#projects'
        },
        {
            text: 'links',
            anchor: '#links'
        },
        {
            text: 'contacts',
            anchor: '#contacts'
        },
    ]
    const linkView = links.map((link, key) => {
        const {text, anchor} = link
        return (
            <div className="header-link" key={'hlink' + key}>
                <a href={anchor}>{text}</a>
            </div>
        )
    })
    return (
        <header>
            <div className="header-body">
                <img className="logo" src={logo} alt="logo is here"/>
                <div className="owner">FirstName LastName</div>
                <div className="anchors">
                    {linkView}
                </div>
            </div>
        </header>
    )
}

export default header
