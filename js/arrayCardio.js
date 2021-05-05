const people = [
    'Beck, Glenn',
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William'
]

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck'
]

// 1. Array.prototype.filter()
const fifteenHun = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

// 2. Array.prototype.map()
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

// 3. Array.prototype.sort()
const orderedBirth = [...inventors].sort((a,b) => a.year > b.year ? 1 : -1);

// 4. Array.prototype.reduce()
const totalAge = inventors.reduce((total, inventor) => {return total + (inventor.passed - inventor.year)}, 0);

// 5. inventors by years lived
const byAge = [...inventors].sort(function (a, b) {
    const aInventor = a.passed - a.year;
    const bInventor = b.passed - b.year;
    return bInventor > aInventor ? 1 : -1;
});

// 7. sort Exercise
const peopleSort = [...people].sort(function(a,b) {
    const [aLast, aFirst] = a.split(', '); // [aLast, aFirst] unused aFirst
    const [bLast, bFirst] = b.split(', '); // [bLast, bFirst] unused bFirst
    return aLast < bLast ? 1 : -1;
});

// 8. Reduce Exercise - sum up instances of each
const countOccurances = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);


/*   **************************
*   DISPLAY FUNCTIONS - used to display the results of the sorts and
*   filters used against these arrays.
     ************************** */
function displayList(listName, location) {
    let display = '<ul>';
    for (let i = 0, maxNum = listName.length; i < maxNum; i++) {
        if(typeof listName[i] === 'object') {
            display += '<li>';
            display += listName[i].first + ' ' + listName[i].last + ', birth: '
                + listName[i].year + ', death: ' + listName[i].passed;
            // when the sort type is by age, add the age at death
            if(listName === byAge) {
                display += " - Age at death: " + (listName[i].passed - listName[i].year);
            }
            display += '</li>';
        } else {
            display += '<li>' + listName[i] + '</li>';
        }
    }
    display += '</ul>';

    document.getElementById(location).innerHTML = display;
}

function displaySingleEntity(context, location) {
    document.getElementById(location).innerHTML = context;
}