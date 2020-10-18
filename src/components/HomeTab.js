import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    name: {
        padding: '5px 10px',
        fontWeight: 'bold'
    },
    login: {
        padding: '10px'
    }
}));
const HomeTab = ({ userInfo }) => {
    const classes = useStyles();
    const [following, setFollowing] = useState(userInfo.following)
    const handleFollowingClick = () => {
        setFollowing(prev => prev += 10);
    };
    return (
        <div className={classes.root}>
            <Card >
                <CardContent>
                    <Avatar alt="git user" src={userInfo.avatar_url} className={classes.large} />
                    <div className={classes.name}>
                        {userInfo.name}
                    </div>
                    <div className={classes.login}>
                        {userInfo.login}
                    </div>
                    <div>
                        <Chip
                            avatar={<Avatar>{userInfo.followers}</Avatar>}
                            label={`followers `}

                            variant="outlined"
                        />
                        <Chip
                            avatar={<Avatar>{following}</Avatar>}
                            label={`following `}
                            onClick={handleFollowingClick}
                            variant="outlined"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default HomeTab
