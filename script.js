const book_arr = [
    {
        name: 'It',
        genre: 'horror',
        author: 'Stephen King',
        year: 2020
    },
    {
        name: 'Doctor Sleep',
        genre: 'horror',
        author: 'Stephen King',
        year: 2008
    },
    {
        name: 'Pet Sematary',
        genre: 'science fiction',
        author: 'Andy Weir',
        year: 1980
    },
    {
        name: 'Klara and the Sun',
        genre: 'science fiction',
        author: 'Kazuo Ishiguro',
        year: 1995
    },
    {
        name: 'Fugitive Telemetry',
        genre: 'science fiction',
        author: 'Martha Wells',
        year: 1820
    },
    {
        name: 'Adventures of Huckleberry Finn',
        genre: 'adventure fiction',
        author: 'Mark Twain',
        year: 1884
    },
    {
        name: 'To Kill a Mockingbird',
        genre: 'fiction',
        author: 'Harper Lee',
        year: 1960
    },
    {
        name: 'The Great Gatsby',
        genre: 'novel',
        author: 'F. Scott Fitzgerald',
        year: 1925
    },
    {
        name: 'Moby-Dick',
        genre: 'fiction',
        author: 'Herman Melville',
        year: 1851
    },
    {
        name: 'The Color Purple',
        genre: 'fiction',
        author: 'Alice Walker',
        year: 1982
    },
]

const fictionBooks = book_arr.filter(item => item.genre === 'fiction');
const ficBookName = fictionBooks.map(item => item.name.toLocaleUpperCase());
console.log(ficBookName);



const XXBooks = book_arr.filter(item => item.year > 1901 && item.year < 2000);
const XXBooksName = XXBooks.map(item => item.name);
console.log(XXBooksName);

const XXIBooks = book_arr.filter(item => item.year > 2001 && item.year < 2100);
const XXIBooksName = XXIBooks.map(item => item.name);
console.log(XXIBooksName);
