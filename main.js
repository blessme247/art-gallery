import { projects } from "./Scripts/projects"
import { lerp } from "./Scripts/utils"

const content = document.querySelector(".content")
const contentImage = document.querySelector(".content__main__img")
const contentHeader = document.querySelector(".content__header")
const contentText = document.querySelector(".content__text")
const contentCloseBtn = document.querySelector(".close")
const container = document.querySelector(".container")
const columns = [...document.querySelectorAll(".column")]


let projectsArray = []
let animating = true

class Project{
  constructor(image,idx,title,content){
    this.image = image
    this.idx = idx
    this.title = title
    this.content = content
    this.active = false;
    // Initiate a method
    this.createItem()
  }

  // Create the method initiated above
  createItem(){
    this.gridItem = document.createElement('div')
    this.gridItem.classList.add('item')
    this.img = document.createElement('img')
    this.img.src = this.image
    this.gridItem.appendChild(this.img)
    let i = this.idx % columns.length
    columns[i].appendChild(this.gridItem)

    // console.log(this.gridItem, "Grid Item"); // Add this line
    // Create another method and bind the instance of the createItem method to it
    this.gridItem.addEventListener('click', this.activate.bind(this))
  }

  activate(){
    console.log("activate method called");
    console.log(this, "activate this")
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}

projects.forEach((project,idx)=>{ 
  // For each project, create an instance of the project class above
  let newProject = new Project(project.image, idx, project.title, project.content)
  projectsArray.push(newProject)    
})


const animatePreloader = ()=>{
  let tl = gsap.timeline()
  tl.to(".header > h1",2, {
    top: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2
    }

  })
.to(".pre-loader-btn", 1, {
  opacity: 1,
  ease: "power2.inOut"
},+2.5)  
  .to(".pre-loader",1,{
    opacity: 0
  },+4.5)
  .from(".main__header",{
    y: 0 
  })
  .to(".main__header", {
    y: 5,
    opacity: 1
  })


}

animatePreloader()
// svgBtn.addEventListener('click', ()=> animatePreloader())


