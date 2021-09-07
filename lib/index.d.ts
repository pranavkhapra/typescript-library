interface userData {
    age: number;
    city: string;
    company_name: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
    state: string;
    web: string;
    zip: number;
}
export declare function search(data: Array<userData>, searchText: string): userData[];
export declare const sort: (data: Array<userData>, sortByColumn: string, direction: {
    [x: string]: string;
}) => userData[];
export {};
//# sourceMappingURL=index.d.ts.map