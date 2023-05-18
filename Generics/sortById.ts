
interface User {
    id: number;
    name: string;
}

type UserList = User[];

const data: UserList = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Petr'},
    {id: 3, name: 'Max'}
];

interface ID {
  id: number;
};

function sortById<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[]
{
    return data.sort( (a, b) => {
        switch (type){
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    } );
}

console.log( sortById(data, 'desc') );
console.log( sortById(data, 'asc') );
