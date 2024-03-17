const React = require('react')
const Default = require('./layouts/default')

function Error404() {
    return (
        <Default>
            <h1>This route doesn't exist, please make sure you spelled correctly.</h1>
            <a href="/breads">Go back to index</a>
        </Default>
    )
}

module.exports = Error404
