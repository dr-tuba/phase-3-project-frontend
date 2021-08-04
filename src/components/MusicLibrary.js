import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import MusicCard from './MusicCard'

const MusicLibrary = () => {
    const [music, setMusic] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:9292/music-library")
        .then(resp => resp.json())
        .then(data => setMusic(data))
    }, [])
    
    return (
        <main>
          <h1>Music Library</h1>
          <Table responsive striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Instrumentation</th>
                        <th>Genre</th>
                        <th>Difficulty</th>
                        <th>Publisher</th>
                    </tr>
                </thead>
                <tbody>
                    {music.map(piece => { return (
                        <MusicCard 
                            key = {piece.id}
                            id = {piece.id}
                            title = {piece.title}
                            publisher = {piece.publisher}
                            difficulty_level = {piece.difficulty_level}
                            genre = {piece.genre}
                            instrumentation = {piece.instrumentation}
                            school_name = {piece.school.school_name}
                        />
                        )})}
                </tbody>
            </Table>
        </main>
    )
}

export default MusicLibrary
