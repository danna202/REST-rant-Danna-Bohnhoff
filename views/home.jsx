const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="https://images.unsplash.com/photo-1513618364580-fe1596762e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdHVyYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="resturant tables"/>
                </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
            </main>
        </Def>
    )
}

module.exports = home