<<<<<<< HEAD
interface userData {
    age: number;
    city: string;
    company_name: string;
    email: string;
    first_name:string;
    id: number;
    last_name: string;
    state: string;
    web: string;
    zip: number;
  }


  
export function search(data: Array<userData>, searchText: string) {
    const users = data.filter((user: { last_name: string; first_name: string; }) => {
=======
export function search(data: any[], searchText: any) {
    const users = data.filter((user) => {
>>>>>>> e1b0ad53bcc8155c45bd341067b480302a2384d7
        const lastName = user.last_name.toLowerCase();
        const firstName = user.first_name.toLowerCase();
        const fullName = `${firstName} ${lastName}`;
        return fullName.includes(searchText);
    });
    return users;
}

<<<<<<< HEAD
export const sort = (data: Array<userData>, sortByColumn: string ,direction:{[x:string]:string}) => {
   const sortedUsers= data.sort((a:any, b:any) =>
        direction[sortByColumn] === 'asc' ? compare(a, b, sortByColumn) : compare(b, a, sortByColumn)
      );
      return sortedUsers;
};

const compare = (a: { [x: string]: number; }, b: { [x: string]: number; }, sortByColumn: string) => {
    if (a[sortByColumn] < b[sortByColumn]) return -1;
    if (a[sortByColumn] > b[sortByColumn]) return 1;
    return 0;
  };
=======

export const sort = (data: any[], sortByColumn: any) => {
    data.sort((a: any, b: any) => {
        if (a[sortByColumn] < b[sortByColumn]) return -1;
        if (a[sortByColumn] > b[sortByColumn]) return 1;
        return 0;
    })

    return data;
};

>>>>>>> e1b0ad53bcc8155c45bd341067b480302a2384d7
