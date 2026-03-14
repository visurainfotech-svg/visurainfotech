gsap.registerPlugin(ScrollTrigger)

/* SCROLL ANIMATION */

gsap.utils.toArray(".story-step").forEach((step)=>{

gsap.from(step,{
scrollTrigger:{
trigger:step,
start:"top 80%"
},
y:100,
opacity:0,
duration:1
})

})

/* CURSOR */

const cursor=document.createElement("div")
cursor.classList.add("cursor")
document.body.appendChild(cursor)

const ring=document.createElement("div")
ring.classList.add("cursor-ring")
document.body.appendChild(ring)

let mouseX=0
let mouseY=0
let ringX=0
let ringY=0

document.addEventListener("mousemove",(e)=>{

mouseX=e.clientX
mouseY=e.clientY

cursor.style.left=mouseX+"px"
cursor.style.top=mouseY+"px"

})

function animateCursor(){

ringX+=(mouseX-ringX)*0.15
ringY+=(mouseY-ringY)*0.15

ring.style.left=ringX+"px"
ring.style.top=ringY+"px"

requestAnimationFrame(animateCursor)

}

animateCursor()

document.querySelectorAll("a,.service-card").forEach(el=>{

el.addEventListener("mouseenter",()=>{
ring.classList.add("cursor-hover")
})

el.addEventListener("mouseleave",()=>{
ring.classList.remove("cursor-hover")
})

})

/* NEURAL NETWORK */

const canvas=document.getElementById("network")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<100;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-.5)*0.5,
vy:(Math.random()-.5)*0.5
})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

p.x+=p.vx
p.y+=p.vy

ctx.beginPath()
ctx.arc(p.x,p.y,2,0,Math.PI*2)
ctx.fillStyle="#5b6cff"
ctx.fill()

})

requestAnimationFrame(draw)

}

draw()

/* THREE HERO */

const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer=new THREE.WebGLRenderer({alpha:true})

renderer.setSize(window.innerWidth,window.innerHeight)

document.getElementById("webgl").appendChild(renderer.domElement)

const geometry=new THREE.TorusKnotGeometry(10,3,100,16)

const material=new THREE.MeshNormalMaterial()

const mesh=new THREE.Mesh(geometry,material)

scene.add(mesh)

camera.position.z=30

function animate(){

requestAnimationFrame(animate)

mesh.rotation.x+=0.01
mesh.rotation.y+=0.01

renderer.render(scene,camera)

}

animate()

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight
camera.updateProjectionMatrix()

renderer.setSize(window.innerWidth,window.innerHeight)

})
