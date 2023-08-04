import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function TabBar() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/tests');
        break;
      case 1:
        navigate('/home');
        break;
      case 2:
        navigate('/results');
        break;
      case 3:
        navigate('/settings');
        break;
      default:
        break;
    }
  };

  const tabBarStyle = {

  };
  const tabBtnStyle = {

  };

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, alignSelf: 'center'}} >
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction label="Tests" icon={<AssessmentIcon />} />
        <BottomNavigationAction label="Home" icon={<HomeIcon />}  />
        <BottomNavigationAction label="Results" icon={<BarChartIcon />}  />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />}  />
        
        
      </BottomNavigation>
    </Box>
  );
}
