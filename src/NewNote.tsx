import { NoteForm } from './NoteForm';
import { NoteData, Tag } from './App';

type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

export function NewNote({ onSubmit, onAddTag, availableTags}: NewNoteProps) {
  return (
    <div className=''>
      <h1>New Note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
    </div>
  )
}