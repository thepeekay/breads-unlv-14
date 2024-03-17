const React = require('react')
const Default = require('./layouts/default')

function Show({ bread }) {
    return (
        <Default>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten
                        ? <span> does </span>
                        : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />
            <div className="backButton">
                <a href="/breads"><button>Go home</button></a>
            </div>
        </Default>

    )
}

module.exports = Show
