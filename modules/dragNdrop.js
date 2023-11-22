import { yunus } from "../main"
import { deleteData, getData, patchData } from "./http"
import { reload_tasks } from "./ui"

const empties = document.querySelectorAll('.empty')
export function dragStart() {
    this.id = "marked"
    this.className += ' hold'
    setTimeout(() => (this.className = 'invisible'), 0)
}

export function dragEnd() {
    this.removeAttribute('id')
    this.className = 'fill'
}

export function dragOver(event) {
    event.preventDefault()
    
}

export function dragEnter(event) {
    event.preventDefault()
    
}


export function dragLeave() {
    this.className = 'empty'
}

export function dragDrop(params) {
    let marked_div = document.getElementById('marked')
    this.className = 'empty'
    this.append(marked_div)
    let id = marked_div.dataset.id
    /* var myAttribute = empties.getAttribute('data-status'); */

    patchData('/tasks/'+ id, {status:this.dataset.status} )
    .then(res => {
        console.log(res);
    })
    
    
    

}



export function deletedragOver() {
    event.preventDefault()   

}
export function deletedragEnter() {
    event.preventDefault()
    yunus.classList.add('mussorr')
    
}
export function deletedragLeave() {
}
export function deletedragDrop() {
    let marked_div = document.getElementById('marked')
    yunus.classList.remove('mussorr')
    let id = marked_div.dataset.id
     deleteData('/tasks/' + id)
        .then(res => {
            getData("/tasks")
                .then(res => {
                    reload_tasks(res.data, empties)
                })
        }
        )

}
