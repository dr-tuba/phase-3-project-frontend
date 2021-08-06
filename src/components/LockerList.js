import Locker from "./Locker"
import Table from 'react-bootstrap/Table'

const LockerList = ({ lockers }) => {
    return (
        <main>
          <h1>Lockers</h1>
          <Table responsive striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>Locker Number</th>
                        <th>Combination</th>
                        <th>Student</th>
                    </tr>
                </thead>
                <tbody>
                  {lockers.map(locker => { return (
                    <Locker 
                      locker_number = {locker.locker_number}
                      locker_combination = {locker.locker_combination}
                      student_id = {locker.student_id}
                    />
                  )})}
                </tbody>
              </Table>
        </main>
    )
}

export default LockerList
