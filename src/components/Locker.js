import { useState, useEffect } from 'react';

const Locker = ({ locker_number, locker_combination, student_id, students }) => {
    const [hasStudent, setHasStudent ] = useState(false)
    const [studentName, setStudentName] = useState()

    const studentAssignedToThisLocker = students.filter(student => student.id === student_id)

    useEffect(() => {
        if (studentAssignedToThisLocker.length > 0) {
            setHasStudent(true)
            setStudentName(`${studentAssignedToThisLocker[0].first_name} ${studentAssignedToThisLocker[0].last_name}`)
        } else {
            setHasStudent(false)  
        }
    }, [studentAssignedToThisLocker])

    return (        
            <tr>
                <th>{locker_number}</th>
                <th>{locker_combination}</th>
                <th>{hasStudent ? studentName : null }</th>
            </tr>
    )
}

export default Locker
