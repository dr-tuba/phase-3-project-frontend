const Locker = ({ locker_number, locker_combination, student_id}) => {
    return (
        <tr>
            <th>{locker_number}</th>
            <th>{locker_combination}</th>
            <th>{student_id}</th>
        </tr>
    )
}

export default Locker
