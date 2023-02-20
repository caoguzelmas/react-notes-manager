import { NoteList } from "containers/NoteList/NoteList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function NoteBrowse() {
  const noteList = useSelector((store) => store.noteSlice.noteList);

  return (
    <>
      {noteList?.length === 0 && (
        <div className="d-flex justify-content-center">
          <span>
            You don't have any note, would you like to{" "}
            <Link to="/note/create"> create one</Link> ?
          </span>
        </div>
      )}
      <NoteList />
    </>
  );
}
