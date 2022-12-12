/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [
    {
        id: 1,
        text: "This is a note",
        author: "Me",
        date: "November 8th",
        topics: [
            "learning", "feelings", "observation"
        ]
    },
    {
        id: 2,
        text: "This too, is indeed, a note that I am writing",
        author: "myself",
        date: "November 8th",
        topics: [
            "observation", "learning",
        ]
    },
    {
        id: 3,
        text: "Hopefully, this will be my final note",
        author: "I",
        date: "November 8th",
        topics: [
            "task", "observation", "code"
        ]
    }
]

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/
// LIST OF NOTES
for (const note of notes) {
    console.log(note.text)
}

// LIST OF TOPICS
console.log("*** All Note Topics ***")
for (const note of notes) {
    for (const topic of note.topics) {
        console.log(topic) 
    }
}

// AVERAGE NOTES PER TOPIC
console.log("*** Average Topics Per Note ***")
let totalTopics = 0
for (const note of notes) {
        totalTopics = totalTopics + note.topics.length
    }
let averageTopics = 0
averageTopics = totalTopics / notes.length
console.log(averageTopics)

// LIST OF NOTES BY TOPIC
console.log("*** Filtered By Topic ***")
const filteredNotes = []
const criteria = "learning"
for (const note of notes) {
    if (note.topics.includes(criteria)) {
        filteredNotes.push(note)
    }
}
console.log(filteredNotes)

//HTML NOTE ARTICLES and NOTE TOPICS SUBSECTION
console.log("*** Note Articles ***")
for (const note of notes) {
    console.log (`<article>\n\t${note.text}`)
    for (const topic of note.topics) {
        console.log(`\t<section>${topic}</secion>`)
    }
    console.log(`</article>`)    
}
