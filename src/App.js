import React from 'react'
import Board from './components/Board'
import Card from './components/Card'

import "./App.css"

function App() {
    return (
        <div className="App">
            <center>
                <h1>React DnD Example</h1>
            </center>
            <main className="flexbox">

                <Board id="board-1" className="board">
                    <center><h3>Board 1</h3></center>
                    <br />
                    <Card id="card-1" className="card" draggable="true">
                        <p>Board1: card-one</p>
                    </Card>
                    <Card id="card-2" className="card" draggable="true">
                        <p>Board1: card-two</p>
                    </Card>
                </Board>

                <Board id="board-2" className="board">
                    <center><h3>Board 2</h3></center>
                    <br />
                    <Card id="card-3" className="card" draggable="true">
                        <p>Board2: card-one</p>
                    </Card>
                    <Card id="card-4" className="card" draggable="true">
                        <p>Board2: card-two</p>
                    </Card>
                </Board>
            </main>
        </div>
    )
}

export default App;