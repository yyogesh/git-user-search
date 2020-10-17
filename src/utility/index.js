export function a11yProps(index) {
    return {
        id: `git-tab-${index}`,
        'aria-controls': `git-tabpanel-${index}`,
    };
}