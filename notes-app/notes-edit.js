const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
	return note.id === noteId
})

if (note === undefined) {
	location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
titleElement.addEventListener('input', function (e) {
       note.title = e.target.value
       saveNotes(notes)
})
document.querySelector('remove-note').value = note