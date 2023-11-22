import { deletedragDrop, deletedragEnter, deletedragLeave, deletedragOver, dragDrop, dragEnter, dragLeave, dragOver,} from "./modules/dragNdrop"
import { getData } from "./modules/http"
import { reload_tasks } from "./modules/ui"
export const empties = document.querySelectorAll('.empty')
export let yunus = document.querySelector(".yunus")
 let mussor = document.querySelector(".mussor") 
getData('/tasks')
    .then(res => reload_tasks(res.data, empties))


for (let empty of empties) {
    empty.ondragover = dragOver
    empty.ondragenter = dragEnter
    empty.ondragleave = dragLeave
    empty.ondrop = dragDrop
}


 mussor.ondragover = deletedragOver
mussor.ondragenter = deletedragEnter
mussor.ondragleave = deletedragLeave
mussor.ondrop = deletedragDrop 



