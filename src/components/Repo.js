import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

const Repo = ({ userInfo }) => {
	const { status, data, error } = useFetch(userInfo.repos_url);
	console.log(data);
	let repos = [];
	if (data) {
		repos = data.map(item => {
			if (item.private) { // Message for private repo
				item.message = `User ${userInfo.login} with ${userInfo.followers} followers is following ${userInfo.following}. One repo for this user is ${userInfo.name}/${item.name} and it is private.`;
			} else { // Message for public repo
				item.message = `User ${userInfo.login} with ${userInfo.followers} followers is following ${userInfo.following}. One repo for this user is ${userInfo.name}/${item.name} and it is not private.`
			}

			return item;
		})
	}
	return (
		<Card style={{ width: '98%', margin: '20px' }}>
			<CardContent>
				<List component="nav" aria-label="main mailbox folders">
					{
						repos && repos.map((item, index) => (
							<>
								<ListItem key={index}>
									<ListItemIcon>
										{
											item.private ? <FolderIcon /> : <FolderOpenIcon />
										}
									</ListItemIcon>
									<ListItemText primary={item.message} />
								</ListItem>
								<Divider />
							</>
						))
					}
				</List>
			</CardContent>
		</Card>
	);
};

export default Repo;