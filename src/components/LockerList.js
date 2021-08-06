import Locker from "./Locker"
import Table from 'react-bootstrap/Table'

const LockerList = ({ lockers, students }) => {  
  const sortedLockers = lockers.sort(function(a, b) {
    const aNum = a.locker_number
    const bNum = b.locker_number

    if (aNum < bNum) {
      return -1
    }
    if ( aNum > bNum) {
      return 1
    }
    
    return 0
  })
  
  return (
        <main id="lockers-page">
          <h1>Lockers</h1>
              <Table striped bordered hover size="sm" variant="dark">
                  <thead>
                      <tr>
                          <th>Locker Number</th>
                          <th>Combination</th>
                          <th>Student</th>
                      </tr>
                  </thead>
                  <tbody>
                    {sortedLockers.map(locker => { return (
                      <Locker 
                        locker_number = {locker.locker_number}
                        locker_combination = {locker.locker_combination}
                        student_id = {locker.student_id}
                        students = {students}
                      />
                    )})}
                  </tbody>
              </Table>
        </main>
    )
}

export default LockerList
