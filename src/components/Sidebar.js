import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaDatabase, FaAlignLeft, FaChalkboardTeacher } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {    
    return (
        <ProSidebar>
            <SidebarHeader>
                <h1>BandDB</h1>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaDatabase />}>
                        Home
                        <Link to='/' />
                    </MenuItem>
                    <MenuItem icon={<FaChalkboardTeacher />}>
                        Teacher Login
                        <Link to='/teachers' />
                    </MenuItem>
                    <SubMenu title="Data" icon={<FaAlignLeft />}>
                        <MenuItem>
                            Students
                            <Link to='/students' />
                        </MenuItem>
                        <MenuItem>
                            Music Library
                            <Link to='/music-library' />
                        </MenuItem>
                        <MenuItem>
                            Instrument Inventory
                            <Link to='/instruments' />
                        </MenuItem>
                        <MenuItem>
                            Locker Assignments
                            <Link to='/lockers' />
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <p>Created by Steve Vaughn</p>
            </SidebarFooter>
        </ProSidebar>
    )
}

export default Sidebar
