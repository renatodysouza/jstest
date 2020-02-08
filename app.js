const dataUsers = [
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

const dataGroups = [
    {groupID: 1, groupName: 'Manager'},
    {groupID: 2, groupName: 'Developer'},
    {groupID: 3, groupName: 'Customer Service'},
    {groupID: 4, groupName: 'Sales'}
];

const usersExcludes = ['Adrian Robinson', 'Karen Matthews', 'Mike Walker'];

function totalUserCount(users) {
    return users.length;
}

function showTotalUser() {
    if(document.querySelector('#renderUserCount')) {
        document.querySelector('#renderUserCount').innerText = totalUserCount(listUsers());
    }
}

function renderTable(userList) {
    return `<table>
    <thead>
      <tr>
          <th>Name</th>
          <th>Group</th>
          <th>Date of birth</th>
      </tr>
    </thead>
    <tbody>${userList.map(user => {
       return `<tr ${user.group === 'Manager' ? 'style = background-color:#9bb59b' : "" } >
        <td>${user.name}</td>
        <td>${user.group}</td>
        <td>${changeFormatData(user.dateOfBirthDay)}</td>
      </tr>`
    }).join('')}
    </tbody>
  </table>`; 
}

function changeToOrdinal(date) {
    let dateOrdinal;
    switch (date) {
        case 1:
            dateOrdinal = '1st'
            break;
        case 2:
            dateOrdinal = '2nd'
            break;
        case 3:
            dateOrdinal = '3rd'
        break;                

        default:
            dateOrdinal = `${date}th`
        break;
    }
    return dateOrdinal;
}

function giveGroupById(id) {
    const dtGroup = dataGroups.filter(group => {
        if (group.groupID === id) {
            return group.groupName;
        }
    });
    return dtGroup[0].groupName;   
}

function addGroupInUserList() {
    let listUser = []
    const originalListUser = dataUsers.map(user => {
        let newListUser = {};
        newListUser['name'] = user.usersName;
        newListUser['group'] = giveGroupById(user.usersGroupID);
        newListUser['dateOfBirthDay'] = user.usersDOB;
        listUser.push(newListUser)
    });
    return excludeUser(listUser, usersExcludes);
}

function listUsers() {
    return addGroupInUserList();
}

function excludeUser(userlist, exclude) {
    return userlist.filter(user => {
        if(!exclude.includes(user.name)) {
            return user;
        }
    });
}

function changeFormatData(date) {
    const transformDate = new Date(date);
    const month = transformDate.toLocaleString('default', { month: 'long' });
    const ordinal = `${changeToOrdinal(transformDate.getDate())} ${month} ${transformDate
        .getFullYear()}`
    return ordinal;
}

function countGroups(listUsers,group) {
    let groups = [];
    listUsers.map(user => {
        if (user.group === group ) {
            groups.push(user.group);
        }
    });
    return groups.length;
}

function renderUserList(userList) {
    if (document.querySelector('#renderUserList')) {
        document.querySelector('#renderUserList')
        .innerHTML = renderTable(listUsers());
    }  
}

function renderGroupCount1() {
    if(document.querySelector('#renderGroupCount1')) {
       document.querySelector('#renderGroupCount1')
       .innerHTML = countGroups(listUsers(), 'Manager');
    }
}

function renderGroupCount2() {
    if (document.querySelector('#renderGroupCount2')) {
        document.querySelector('#renderGroupCount2')
        .innerHTML = countGroups(listUsers(), 'Developer');
    }
}

function renderGroupCount3() {
    if (document.querySelector('#renderGroupCount3')) {
        document.querySelector('#renderGroupCount3')
        .innerHTML = countGroups(listUsers(), 'Customer Service');
    }    
}

function renderGroupCount4() {
    if (document.querySelector('#renderGroupCount4')) {
        document.querySelector('#renderGroupCount4')
        .innerHTML = countGroups(listUsers(), 'Sales');
    }    
}

function appInit() {
    showTotalUser();
    renderUserList(listUsers());
    renderGroupCount1();
    renderGroupCount2();
    renderGroupCount3();
    renderGroupCount4();
}

document.addEventListener("DOMContentLoaded", function(){
    appInit();
});
