export function search(data: any[], searchText: any) {
    const users = data.filter((user) => {
        const lastName = user.last_name.toLowerCase();
        const firstName = user.first_name.toLowerCase();
        const fullName = `${firstName} ${lastName}`;
        return fullName.includes(searchText);
    });
    return users;
}


export const sort = (data: any[], sortByColumn: any) => {
    data.sort((a: any, b: any) => {
        if (a[sortByColumn] < b[sortByColumn]) return -1;
        if (a[sortByColumn] > b[sortByColumn]) return 1;
        return 0;
    })

    return data;
};

