import { CatalogInterface, NotesTypeInterface } from "./atom";

export function replaceItemAtIndex(
  arr: CatalogInterface[],
  index: number,
  fileIndex: number,
  newValue: NotesTypeInterface
) {
    let updatedData:CatalogInterface  = {
        folderDetails:{
            title:"",
            color:"",
        },
        NotesList:[]
    }
    arr.map((item, ind) => {
    if (ind === index) {
      updatedData = {
        folderDetails: item.folderDetails,
        NotesList: [
          ...item.NotesList.slice(0, fileIndex),
          newValue,
          ...item.NotesList.slice(fileIndex + 1),
        ],
      }
    }
  });
  if (updatedData?.folderDetails && updatedData?.NotesList) {
    const newObject: CatalogInterface = {
      folderDetails: updatedData?.folderDetails,
      NotesList: updatedData?.NotesList,
    };

    return [...arr.slice(0, index), newObject, ...arr.slice(index + 1)];
  }
}
