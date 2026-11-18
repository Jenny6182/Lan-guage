


const stacks = [
    { ch_name: '食物', en_name: 'Food', id: 1},
    { ch_name: '交通', en_name: 'Transportation', id: 2},
    { ch_name: '國家', en_name: 'Country', id: 3}
];


const foodCards = [
    { front: '蘋果', back: 'Apple', id: 1 },
    { front: '橘子', back: 'Orange', id: 2 },
    { front: '葡萄', back: 'Grape', id: 3 }
];

const pronounCards = [
    { front: '他', back: 'he/she/they', id: 1 },
    { front: '她', back: 'she', id: 2 },
    { front: '他們', back: 'they', id: 3 }
];

const technologyCards = [
    { front: '手機', back: 'Phone', id: 1 },
    { front: '電腦', back: 'Computer', id: 2 },
    { front: '平板', back: 'Tablet', id: 3 }
];

const levels = [
    { rank: 'A', id: 1 },
    { rank: 'B', id: 2 },
    { rank: 'C', id: 3 }
];

const units = [
    { levelID: 1, unitNumber: "1", id: 101 },
    { levelID: 1, unitNumber: "2", id: 102 },
    { levelID: 2, unitNumber: "1", id: 201 },
    { levelID: 2, unitNumber: "2", id: 202 },
    { levelID: 3, unitNumber: "1", id: 301 },
    { levelID: 3, unitNumber: "2", id: 302 }
];

const lessons = [
    { unitID: 101, lessonName: 'pronoun', id: 1001 },
    { unitID: 102, lessonName: 'weather', id: 1002 },
    { unitID: 201, lessonName: 'food', id: 1003 },
    { unitID: 202, lessonName: 'job', id: 1004 },
    { unitID: 301, lessonName: 'technology', id: 1005 },
    { unitID: 302, lessonName: 'news', id: 1006 }
];

const lessonCards = [
    { lessonID: 1001, flashcards: pronounCards },
    { lessonID: 1003, flashcards: foodCards },
    { lessonID: 1005, flashcards: technologyCards }
];

export {
    stacks,
    levels,
    units,
    lessons,
    lessonCards,
    foodCards
};