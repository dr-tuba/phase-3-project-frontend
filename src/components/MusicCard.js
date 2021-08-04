

const MusicCard = ({instrumentation, title, genre, difficulty_level, school_name, publisher, id }) => {
    return (
            <tr>
                <th>{id}</th>
                <th>{title}</th>
                <th>{instrumentation}</th>
                <th>{genre}</th>
                <th>{difficulty_level}</th>
                <th>{publisher}</th>
            </tr>
    )
}

export default MusicCard
