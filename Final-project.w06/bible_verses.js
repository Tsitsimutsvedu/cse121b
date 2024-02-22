let verses = [
    {
        "book": "Matthew",
        "chapter": 5,
        "verse": 16
    },
    {
        "book": "Matthew",
        "chapter": 6,
        "verse": 33
    },
    {
        "book": "Matthew",
        "chapter": 7,
        "verse": 7
    },
    {
        "book": "Matthew",
        "chapter": 11,
        "verse": 28
    },
    {
        "book": "Matthew",
        "chapter": 16,
        "verse": 26
    },
    {
        "book": "Matthew",
        "chapter": 22,
        "verse": 37
    },
    {
        "book": "Matthew",
        "chapter": 28,
        "verse": 19
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 27
    },
    {
        "book": "Mark",
        "chapter": 12,
        "verse": 30
    },
    {
        "book": "Mark",
        "chapter": 16,
        "verse": 15
    },
    {
        "book": "Luke",
        "chapter": 6,
        "verse": 31
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 23
    },
    {
        "book": "Luke",
        "chapter": 12,
        "verse": 15
    },
    {
        "book": "Luke",
        "chapter": 15,
        "verse": 7
    },
    {
        "book": "Luke",
        "chapter": 19,
        "verse": 10
    },
    {
        "book": "Luke",
        "chapter": 23,
        "verse": 34
    },
    {
        "book": "John",
        "chapter": 3,
        "verse": 16
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 12
    },
    {
        "book": "John",
        "chapter": 10,
        "verse": 10
    },
    {
        "book": "John",
        "chapter": 14,
        "verse": 6
    },
    {
        "book": "John",
        "chapter": 15,
        "verse": 13
    },
    {
        "book": "John",
        "chapter": 16,
        "verse": 33
    },
    {
        "book": "Acts",
        "chapter": 1,
        "verse": 8
    },
    {
        "book": "Acts",
        "chapter": 4,
        "verse": 12
    },
    {
        "book": "Acts",
        "chapter": 16,
        "verse": 31
    },
    {
        "book": "Romans",
        "chapter": 1,
        "verse": 16
    },
    {
        "book": "Romans",
        "chapter": 3,
        "verse": 23
    },
    {
        "book": "Romans",
        "chapter": 5,
        "verse": 8
    },
    {
        "book": "Romans",
        "chapter": 8,
        "verse": 28
    },
    {
        "book": "Romans",
        "chapter": 12,
        "verse": 2
    },
    {
        "book": "Romans",
        "chapter": 15,
        "verse": 13
    },
    {
        "book": "1 Corinthians",
        "chapter": 6,
        "verse": 19
    },
    {
        "book": "1 Corinthians",
        "chapter": 10,
        "verse": 31
    },
    {
        "book": "1 Corinthians",
        "chapter": 15,
        "verse": 58
    },
    {
        "book": "2 Corinthians",
        "chapter": 5,
        "verse": 17
    },
    {
        "book": "2 Corinthians",
        "chapter": 9,
        "verse": 7
    },
    {
        "book": "Galatians",
        "chapter": 5,
        "verse": 22
    },
    {
        "book": "Ephesians",
        "chapter": 2,
        "verse": 8
    },
    {
        "book": "Ephesians",
        "chapter": 4,
        "verse": 32
    },
    {
        "book": "Philippians",
        "chapter": 4,
        "verse": 13
    },
    {
        "book": "Colossians",
        "chapter": 3,
        "verse": 23
    },
    {
        "book": "1 Thessalonians",
        "chapter": 5,
        "verse": 16
    },
    {
        "book": "1 Timothy",
        "chapter": 4,
        "verse": 12
    },
    {
        "book": "2 Timothy",
        "chapter": 1,
        "verse": 7
    },
    {
        "book": "Titus",
        "chapter": 2,
        "verse": 11
    },
    {
        "book": "Philemon",
        "chapter": 1,
        "verse": 6
    },
    {
        "book": "Hebrews",
        "chapter": 4,
        "verse": 12
    },
    {
        "book": "Hebrews",
        "chapter": 11,
        "verse": 1
    },
    {
        "book": "James",
        "chapter": 1,
        "verse": 5
    },
    {
        "book": "James",
        "chapter": 2,
        "verse": 17
    },
    {
        "book": "1 Peter",
        "chapter": 5,
        "verse": 7
    },
    {
        "book": "1 Peter",
        "chapter": 2,
        "verse": 9
    },
    {
        "book": "2 Peter",
        "chapter": 3,
        "verse": 9
    },
    {
        "book": "1 John",
        "chapter": 4,
        "verse": 8
    },
    {
        "book": "1 John",
        "chapter": 5,
        "verse": 3
    },
    {
        "book": "2 John",
        "chapter": 1,
        "verse": 6
    },
    {
        "book": "3 John",
        "chapter": 1,
        "verse": 11
    },
    {
        "book": "Jude",
        "chapter": 1,
        "verse": 24
    },
    {
        "book": "Revelation",
        "chapter": 1,
        "verse": 8
    },
    {
        "book": "Revelation",
        "chapter": 3,
        "verse": 20
    },
    {
        "book": "Revelation",
        "chapter": 7,
        "verse": 17
    },
    {
        "book": "Revelation",
        "chapter": 12,
        "verse": 11
    },
    {
        "book": "Revelation",
        "chapter": 21,
        "verse": 4
    }

]


let book_to_book_id = {
    "Matthew": "MAT",
    "Mark": "MRK",
    "Luke": "LUK",
    "John": "JHN",
    "Acts": "ACT",
    "Romans": "ROM",
    "1 Corinthians": "1CO",
    "2 Corinthians": "2CO",
    "Galatians": "GAL",
    "Ephesians": "EPH",
    "Philippians": "PHP",
    "Colossians": "COL",
    "1 Thessalonians": "1TH",
    "2 Thessalonians": "2TH",
    "1 Timothy": "1TI",
    "2 Timothy": "2TI",
    "Titus": "TIT",
    "Philemon": "PHM",
    "Hebrews": "HEB",
    "James": "JAS",
    "1 Peter": "1PE",
    "2 Peter": "2PE",
    "1 John": "1JN",
    "2 John": "2JN",
    "3 John": "3JN",
    "Jude": "JUD",
    "Revelation": "REV"
};


// Function to get a random verse
export const getRandomVerse = () => {
    let randomIndex = Math.floor(Math.random() * verses.length);
    let randomVerse = verses[randomIndex];
    return randomVerse;
}

export const getBookId = (book) => {
    return book_to_book_id[book];
}