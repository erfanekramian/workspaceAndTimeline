import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  newWorkSpace = ''
  inputEditText: any = ''
  inputEditId: number = 0
  workSpacesList = [
    { id: 1, title: "workSpace1" },
    { id: 2, title: "workSpace2" },
    { id: 3, title: "workSpace3" }


  ]
  selectedId: number = 0;

  constructor() { }


  ngOnInit(): void {
  }

  onFocus(event: Event) {
    console.log("focus")
    event.stopPropagation()
  }

  showInput(id: number, event: Event) {
    event.stopPropagation()
    this.inputEditId = id
    this.inputEditText = this.workSpacesList.find(item => item.id == id)?.title
  }
  selectWorkspace(id: number) {
    if (this.selectedId == id) {
      this.selectedId = 0
      localStorage.removeItem("selectedWorkSpaceId")
    }

    else {
      this.selectedId = id
      localStorage.setItem('selectedWorkSpaceId', id.toString())
    }
  }


  addNewWorkspace() {
    let objectHasMaxId
    if (this.workSpacesList.length > 0) {
      objectHasMaxId = this.workSpacesList.reduce(function (prev, current) {
        return (prev.id > current.id) ? prev : current
      })
    }


    if (objectHasMaxId)
      this.workSpacesList.push({ id: (objectHasMaxId.id + 1), title: this.newWorkSpace })
    else
      this.workSpacesList.push({ id: 1, title: this.newWorkSpace })
    this.newWorkSpace = ''
  }

  deleteWorkspace(id: number, event: Event) {
    this.workSpacesList = this.workSpacesList.filter(item => item.id != id)
  }
  cancelEdit(event: Event) {
    event.stopPropagation()
    this.inputEditText = ''
    this.inputEditId = 0
  }
  submitEdit(id: number, event: Event) {

    event.stopPropagation()
    const oldWorkSpaceIndex = this.workSpacesList.findIndex(item => item.id == id)
    this.workSpacesList[oldWorkSpaceIndex].title = this.inputEditText
    this.workSpacesList = [...this.workSpacesList]
    this.inputEditText = ''
    this.inputEditId = 0


  }

}
