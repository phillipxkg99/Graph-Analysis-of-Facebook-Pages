const STUDYAREA = [
    {
        name: 'Data Viz Room',
        // picture:
        library: 'Library of Engineering and Science',
        addr: 'WALC 3049',
        capacity: '18',
    },
    {
        name: 'GIS Lab',
        // picture:
        library: 'Library of Engineering and Science',
        addr: 'WALC 3045',
        capacity: '18',
    },
    {
        name: 'Interview Room',
        // picture:
        library: 'Library of Engineering and Science',
        addr: 'WALC 2141',
        capacity: '6',
    },
    {
        name: 'Group Study Room',
        // picture:
        library: 'Library of Engineering and Science',
        addr: 'WALC 2020',
        capacity: '6-8',
    },
    {
        name: 'Group Study Room',
        // picture:
        library: 'Library of Engineering and Science',
        addr: 'WALC 3060',
        capacity: '6-8',
    },
    {
        name: 'Group Study Room',
        // picture:
        library: 'Library of Engineering and Science',
        addr: 'WALC 3068',
        capacity: '6-8',
    },
    {
        name: 'Group Study Room',
        // picture:
        library: 'Library of Engineering and Science',
        addr: 'WALC 3076',
        capacity: '6-8',
    },
    {
        name: 'Collaborative Study Center',
        // picture:
        library: 'HSSE Library',
        addr: 'HSSE 142',
        capacity: '28',
    },
    {
        name: 'Group Study Room',
        // picture:
        library: 'HSSE Library',
        addr: 'HSSE 145',
        capacity: '8',
    },
    {
        name: 'Interview Room',
        // picture:
        library: 'HSSE Library',
        addr: 'HSSE 147',
        capacity: '4',
    },
    {
        name: 'Hollister Conference Room',
        // picture:
        library: 'Parrish Library',
        addr: 'KRAN 202',
        capacity: '24',
    },
    {
        name: 'Financial Conference Room',
        // picture:
        library: 'Parrish Library',
        addr: 'KRAN 230A',
        capacity: '21',
    },
    {
        name: 'Learn Lab',
        // picture:
        library: 'Parrish Library',
        addr: 'KRAN 250',
        capacity: '40',
    },
    {
        name: 'Corporate Study Room',
        // picture:
        library: 'Parrish Library',
        addr: 'KRAN 258/260',
        capacity: '35',
    },
    {
        name: 'Digital Humanities Studio',
        // picture:
        library: 'Digital Humanities Studio',
        addr: 'STEW 153',
        capacity: '9-12',
    },
    {
        name: 'First Floor Study Rooms',
        // picture:
        library: 'Veterinary Medicine Library',
        addr: 'LYNN 1133G',
        capacity: '5',
    },
    {
        name: 'First Floor Study Rooms',
        // picture:
        library: 'Veterinary Medicine Library',
        addr: 'LYNN 1133H',
        capacity: '5',
    },
    {
        name: 'First Floor Study Rooms',
        // picture:
        library: 'Veterinary Medicine Library',
        addr: 'LYNN 1133J',
        capacity: '5',
    },
    {
        name: 'First Floor Study Rooms',
        // picture:
        library: 'Veterinary Medicine Library',
        addr: 'LYNN 1133K',
        capacity: '5',
    },
    {
        name: 'Digital Scholars Lab-A',
        // picture:
        library: 'Wilmeth Active Learning Center',
        addr: 'WALC 3007',
        capacity: '5',
    },
    {
        name: 'Digital Scholars Lab-C',
        // picture:
        library: 'Wilmeth Active Learning Center',
        addr: 'WALC 3007',
        capacity: '4',
    },
    {
        name: 'Digital Scholars Lab-D',
        // picture:
        library: 'Wilmeth Active Learning Center',
        addr: 'WALC 3007',
        capacity: '4',
    },
    {
        name: 'Digital Scholars Lab-Conf. Circle',
        // picture:
        library: 'Wilmeth Active Learning Center',
        addr: 'WALC 3007',
        capacity: '4',
    },
]
export let STUDYAREA_MAP = {};
STUDYAREA.forEach((item) => {
    STUDYAREA_MAP[item.name] = item;
})

export default STUDYAREA;