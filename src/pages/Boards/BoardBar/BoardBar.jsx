import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'


// Custom style for menu
const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>

      {/* ===== Menu ===== */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="Thenam's Dashboard"
          clickable
        />

        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private Workspaces"
          clickable
        />

        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to google drive"
          clickable
        />

        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />

        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>


      {/* ===== Members ===== */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

        {/* =========== */}
        <Button
          variant="outlined"
          startIcon={ <PersonAddIcon/> }
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        {/* =========== */}
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="thenam">
            <Avatar
              alt="Thenam2kx"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/429839030_122125984922191106_5966053495370918760_n.jpg?stp=dst-jpg_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEFEFY88Nv4nH3Vz_4WB-kAoJNHVJJAJiSgk0dUkkAmJFJhV2i5leGU2qH-ywTrfqMmlqbymjjaLvheQK11aUHm&_nc_ohc=oUDAqRLwVmwAb6FabVq&_nc_ht=scontent.fhan18-1.fna&oh=00_AfDaZjvGP1uy0EAk-RbQarrAaDUwJkaFT0RXLrS2PZpquw&oe=6618D3AA"
            />
          </Tooltip>
          <Tooltip title="thenam">
            <Avatar
              alt="Thenam2kx"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/430051192_122125984940191106_856644603119029461_n.jpg?stp=dst-jpg_p600x600&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFntfzpQmkA8AvfIV__acWvhZfqop6UmxyFl-qinpSbHL6_5n-DQ7aWAzHwQQGHG4xEbfK1kcdPVkIkbLBQ3ikJ&_nc_ohc=feGY7JVH40QAb5jO2Vm&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBSlF-botVmCyeDNuUb1n4AR34JiYj6ASUULsX6f1sQwg&oe=6618B0CE"
            />
          </Tooltip>
          <Tooltip title="thenam">
            <Avatar
              alt="Thenam2kx"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/358066041_609221077942820_1381796335418830490_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG-YFyYsurwLvq5cuxoIfaU8imj392O3aLyKaPf3Y7domZdq9Lq_E9Qsrsedtn-jRvY7DAZJPMHb4cEEfdjgkxf&_nc_ohc=NMFCW8ueN5UAb5lqEAR&_nc_ht=scontent.fhan18-1.fna&oh=00_AfDjuHhf1LZzdDSmT9SY4JUTBWX7p8h4RTsWDG0KynBGDQ&oe=6618BC1E"
            />
          </Tooltip>
          <Tooltip title="thenam">
            <Avatar
              alt="Thenam2kx"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/305220613_838698974178399_5665293302707499876_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGz2hShBQncW0Y65qvpCFrgaKtXbaBZnj5oq1dtoFmePmE74Ze9RxV1Ww1YKCIukdY04zjw8sdESWjYey_EpMGN&_nc_ohc=RT0B5ccW1owAb5MTL0q&_nc_ht=scontent.fhan18-1.fna&oh=00_AfAr8sYr5f8OrsTG_h06lA50U4KKAv6OsFeATHR7K6ph2Q&oe=6618AA9B"
            />
          </Tooltip>
          <Tooltip title="thenam">
            <Avatar
              alt="Thenam2kx"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/305220613_838698974178399_5665293302707499876_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGz2hShBQncW0Y65qvpCFrgaKtXbaBZnj5oq1dtoFmePmE74Ze9RxV1Ww1YKCIukdY04zjw8sdESWjYey_EpMGN&_nc_ohc=RT0B5ccW1owAb5MTL0q&_nc_ht=scontent.fhan18-1.fna&oh=00_AfAr8sYr5f8OrsTG_h06lA50U4KKAv6OsFeATHR7K6ph2Q&oe=6618AA9B"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
