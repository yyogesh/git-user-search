import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useStyles } from './hooks/useStyles';
import { a11yProps } from './utility';
import { TabPanel } from './components/TabPanel';
import UserSearch from './components/UserSearch';
import Home from './components/Home';
import Repo from './components/Repo';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './App.css';


export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [userInfo, setUserInfo] = React.useState(null);

  const getUserInfo = (userInfo) => {
    setUserInfo(userInfo);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="git-app">
      <Card style={{ margin: '20px' }}>
        <CardContent>
          <div>
            <UserSearch getUserInfo={getUserInfo} />
          </div>
          {
            userInfo && userInfo.login && (
              <div>
                <AppBar position="static">
                  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="Repos" {...a11yProps(2)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <Home userInfo={userInfo} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Repo userInfo={userInfo} />
                </TabPanel>
              </div>
            )
          }
        </CardContent>
      </Card>
    </div>
  );
}
