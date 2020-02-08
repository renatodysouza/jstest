// Users
var dataUsers = [
    {usersName: 'Christian Wood', usersGroupID: 1, usersDOB: '1999-09-28'},
    {usersName: 'Tina Clarke', usersGroupID: 1, usersDOB: '1973-10-23'},
    {usersName: 'Laura White', usersGroupID: 2, usersDOB: '1992-01-14'},
    {usersName: 'Jack Shaw', usersGroupID: 3, usersDOB: '1999-12-30'},
    {usersName: 'Liam Murphy', usersGroupID: 2, usersDOB: '1984-02-26'},
    {usersName: 'Sean Cook', usersGroupID: 2, usersDOB: '1969-11-23'},
    {usersName: 'Carmen Graham', usersGroupID: 4, usersDOB: '1983-11-26'},
    {usersName: 'Adrian Robinson', usersGroupID: 2, usersDOB: '1986-05-16'},
    {usersName: 'Yvette Owen', usersGroupID: 2, usersDOB: '1973-02-19'},
    {usersName: 'Kimberly Hughes', usersGroupID: 2, usersDOB: '2000-03-25'},
    {usersName: 'Samuel Martin', usersGroupID: 1, usersDOB: '1960-11-26'},
    {usersName: 'Brandon Graham', usersGroupID: 4, usersDOB: '1979-04-25'},
    {usersName: 'Jamie Butler', usersGroupID: 3, usersDOB: '1986-05-20'},
    {usersName: 'Dan Johnson', usersGroupID: 3, usersDOB: '1990-06-26'},
    {usersName: 'George Robertson', usersGroupID: 2, usersDOB: '1973-11-16'},
    {usersName: 'Karen Matthews', usersGroupID: 2, usersDOB: '1960-07-11'},
    {usersName: 'Logan Simpson', usersGroupID: 2, usersDOB: '1990-05-31'},
    {usersName: 'Elliott Allen', usersGroupID: 2, usersDOB: '1980-08-23'},
    {usersName: 'Sebastian Khan', usersGroupID: 3, usersDOB: '1960-12-30'},
    {usersName: 'Jackson Knight', usersGroupID: 4, usersDOB: '1994-07-09'},
    {usersName: 'Cameron Carter', usersGroupID: 1, usersDOB: '1961-08-10'},
    {usersName: 'Mike Walker', usersGroupID: 4, usersDOB: '1992-12-10'},
    {usersName: 'Isla Hughes', usersGroupID: 3, usersDOB: '1969-02-08'},
    {usersName: 'Georgia Hunt', usersGroupID: 2, usersDOB: '2000-07-06'},
    {usersName: 'Kevin Morgan', usersGroupID: 2, usersDOB: '1974-06-03'},
    {usersName: 'Ken White', usersGroupID: 3, usersDOB: '1977-12-07'}
];

// Groups
var dataGroups = [
    {groupID: 1, groupName: 'Manager'},
    {groupID: 2, groupName: 'Developer'},
    {groupID: 3, groupName: 'Customer Service'},
    {groupID: 4, groupName: 'Sales'}
];

// INTRO:
// All of the code written needs to be native javascript.

// TASK 1:
// Render the total user count in the renderUserCount div.

// TASK 2:
// Each users name from the list of users needs to be rendered in the renderUserList div.
// Each user needs to be listed on their own line.

// TASK 3:
// On each users row, next to their name, the group name they belong to needs to be shown.

// TASK 4:
// On each users row, next to their group name, their date of birth needs to be shown.
// The date of birth needs to be in this format: 2nd July 1980.

// TASK 5:
// Some users have been suspended, and need to be excluded from being rendered.
// These users are: Adrian Robinson, Karen Matthews, Mike Walker

// TASK 6:
// All of the users who are managers need to have their row text be colored green.

// TASK 7:
// The number of users in each group need to be rendered in the renderGroupCount divs.
// This needs to exclude users who are suspended.