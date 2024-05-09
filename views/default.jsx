const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
            <link rel="stylesheet" type="text/css" href="/css/style.css" />
            </head>
            <body>
            <nav>
                <ul>
                    <li>
                    <a href="/">Home</a>
                    </li>
                    <li>
                    <a href="/places">Places</a>
                    </li>
                    <li>
                    <a href="/places/new">Add Place</a>
                    </li>
                </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
