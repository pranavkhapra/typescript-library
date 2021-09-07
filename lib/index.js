"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = exports.search = void 0;
function search(data, searchText) {
    const users = data.filter((user) => {
        const lastName = user.last_name.toLowerCase();
        const firstName = user.first_name.toLowerCase();
        const fullName = `${firstName} ${lastName}`;
        return fullName.includes(searchText);
    });
    return users;
}
exports.search = search;
const sort = (data, sortByColumn, direction) => {
    const sortedUsers = data.sort((a, b) => direction[sortByColumn] === 'asc' ? compare(a, b, sortByColumn) : compare(b, a, sortByColumn));
    return sortedUsers;
};
exports.sort = sort;
const compare = (a, b, sortByColumn) => {
    if (a[sortByColumn] < b[sortByColumn])
        return -1;
    if (a[sortByColumn] > b[sortByColumn])
        return 1;
    return 0;
};
//# sourceMappingURL=index.js.map