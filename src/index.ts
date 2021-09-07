export function search(data: any[], searchText: any) {
    const users = data.filter((user) => {
        const lastName = user.last_name.toLowerCase();
        const firstName = user.first_name.toLowerCase();
        const fullName = `${firstName} ${lastName}`;
        return fullName.includes(searchText);
    });
    return users;
}
