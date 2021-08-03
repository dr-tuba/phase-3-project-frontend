import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaDatabase, FaAlignLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {    
    return (
        <ProSidebar>
            <SidebarHeader>
                <h1>Band Inventory</h1>
            </SidebarHeader>
            <Menu iconShape="circle">
                <MenuItem icon={<FaDatabase />}>
                    Home
                    <Link to='/' />
                </MenuItem>
                <MenuItem icon={<FaDatabase />}>
                    Teachers
                    <Link to='/teachers' />
                </MenuItem>
                <SubMenu title="Components" icon={<FaAlignLeft />}>
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    )
}

export default Sidebar
