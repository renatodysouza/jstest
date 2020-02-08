describe('list users' , ()=> {
    it('Should be return length 2 in totalUserCount function', ()=> {
       const user = [
        {usersName: 'Christian Wood', usersGroupID: 1, usersDOB: '1999-09-28'},
        {usersName: 'Tina Clarke', usersGroupID: 1, usersDOB: '1973-10-23'},
        ];
       expect(totalUserCount(user)).toBe(2);
    });

    it('Should contain Renato in return of renderTable function', ()=> {
    const userList = [
        {name: 'Renato', group:'dev', dateOfBirthday: '03/09/1977' },
        {name: 'Renato2', group:'dev', dateOfBirthday: '03/09/1977' }
    ];
    expect(renderTable(userList)).toContain('Renato');
    });

    it('Should be return 1st in changeToOrdinal when pass 1', ()=> {
        expect(changeToOrdinal(1)).toBe('1st');
    });

    it('Should be return 2nd in changeToOrdinal when pass 2', ()=> {
        expect(changeToOrdinal(2)).toBe('2nd');
    });

    it('Should be return 3rd in changeToOrdinal when pass 2', ()=> {
        expect(changeToOrdinal(3)).toBe('3rd');
    });

    it('Should be return 4th in changeToOrdinal when pass 2', ()=> {
        expect(changeToOrdinal(4)).toBe('4th');
    });

    it('Should be return date format 28th September 1999 ', ()=> {
        expect(changeFormatData('1999-09-28')).toContain('28th September 1999');
    });

    it('Should be return only one user', ()=> {
        const userList = [
            {name: 'Renato'},
            {name: 'Jack Shaw'}
        ]
        expect(excludeUser(userList, ['Renato']).length).toBe(1);
    });

    it('Should be return only one user called Jack Shaw', ()=> {
        const userList = [
            {name: 'Renato'},
            {name: 'Jack Shaw',}
        ]
        const user = excludeUser(userList, ['Renato'])
        expect(user[0].name).toBe('Jack Shaw');
    });
    
    it('Should be return manager in giveGroupById function', ()=> {
        const dataGroups = [
            {groupID: 1, groupName: 'Manager'},
            {groupID: 2, groupName: 'Developer'},
        ];
        expect(giveGroupById(1)).toBe('Manager');
    });

    it('Should be return 1 in countGroups function', ()=> {
        const dataGroups = [
            {groupID: 1, group: 'Manager'},
            {groupID: 2, group: 'Developer'},
        ];
        expect(countGroups(dataGroups, 'Manager')).toBe(1);
    });
});
