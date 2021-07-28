import { Box } from '@material-ui/core'
import React from 'react'
import ApproveBox from './ApproveBox'
import MailBox from './MailBox'
import SideMenu from './SideMenu'
import UserSetting from './UserSetting'

function Main() {
    return (
        <div>
            <Box display="flex">
                <MailBox />
            </Box>
        </div>
    )
}

export default Main