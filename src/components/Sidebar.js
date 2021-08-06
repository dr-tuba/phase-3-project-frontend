import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaDatabase, FaHome, FaChalkboardTeacher, FaItunesNote } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {    
    return (
        <ProSidebar>
            <SidebarHeader>
                <h1><FaItunesNote /> BandDB</h1>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaHome />}>
                        Home
                        <Link to='/' />
                    </MenuItem>
                    <MenuItem icon={<FaChalkboardTeacher />}>
                        Teacher Login
                        <Link to='/teachers' />
                    </MenuItem>
                    <SubMenu title="Data" icon={<FaDatabase />}>
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
                            Lockers
                            <Link to='/lockers' />
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter className='sidebar-footer'>
                <p>Created by Steve Vaughn</p>
            </SidebarFooter>
        </ProSidebar>
    )
}

export default Sidebar
