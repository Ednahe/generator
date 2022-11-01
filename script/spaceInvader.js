const world = document.getElementById('gameboard');
const context = world.getContext('2d');

world.width = world.clientWidth;
world.height = world.clientHeight;

let frames = 0;

const keys = {
    ArrowLeft: { pressed:false },
    ArrowRight: { pressed:false },
}

class Player {
    constructor(){
        this.width = 32;
        this.height = 32;
        this.velocity = {
            x:0,
            y:0,
        }
        const image = new Image();
        image.src = '../image/th(6).jpg'
        image.onload = () => {
            this.image = image;
            this.width = 48;
            this.height = 48;
            this.position = {
                x:world.width/2 - this.width/2,
                y:world.height - this.height -10
            }
        }
    }

    draw(){
      context.drawImage(this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height,
        );
    }

    shoot(){
        missiles.push(new Missile({
            position: {
                x:this.position.x + this.width/2,
                y:this.position.y
            },
        }));
    }

    update(){
        if(this.image) {
       if(keys.ArrowLeft.pressed && this.position.x >= 0) {
           this.velocity.x = -3;
       }
       else if(keys.ArrowRight.pressed && this.position.x <= world.width - this.width) {
           this.velocity.x = 3;
       }
       else {this.velocity.x = 0;}
       this.position.x += this.velocity.x;
       this.draw();
   }
}
}

class Alien{
    constructor({position}){
        this.velocity={x:0, y:0 }
        const image= new Image();
        image.src = '../image/th(17).jpg';
        image.onload =()=>{
            this.image = image;
            this.width=32;
            this.height=32  ;
            this.position= {
                x:position.x,
                y:position.y
            }
        }
        
    }
    draw(){
        if(this.image){
        context.drawImage(this.image,this.position.x,this.position.y,this.width,this.height,);       
        }
    }

    update({velocity}){
        if(this.image){
        this.position.x += velocity.x;
        this.position.y += velocity.y;
        if(this.position.y + this.height >= world.height){
            console.log('Perdu');
        }
        }
        this.draw();
    }
    shoot(alienMissiles){
        if(this.position){
            alienMissiles.push(new alienMissile({
                position:{
                    x:this.position.x,
                    y:this.position.y
                },
                velocity:{
                    x:0,
                    y:3
                }
            }))
        }
    }
}

class Missile {
    constructor({position}) {
        this.position = position;
        this.velocity ={x:0,y:-5};
        this.width = 3;
        this.height = 10;
    }
    draw(){
        context.fillStyle='red';
        context.fillRect(this.position.x,this.position.y,this.width,this.height)
      
   
    }
    update(){
        this.position.y += this.velocity.y;
        this.draw();
    }
}

class Grid {
    constructor(){
        this.position= {x:0,y:0}
        this.velocity={x:1,y:0}
        this.invaders = [ ]
        let rows = Math.floor((world.height/34)*(1/3));
        const columns = Math.floor((world.width/34)*(2/3));
        this.height = rows * 34;
        this.width = columns * 34;
        for (let x = 0; x < columns; x++) {
            for (let y = 0; y < rows; y++) {
                this.invaders.push(new Alien({
                    position:{
                        x:x * 34,
                        y:y * 34
                    }
                }))
            }
        }
    }
    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.y = 0;
        if (this.position.x + this.width >= world.width || this.position.x == 0) {
            this.velocity.x = -this.velocity.x;
            this.velocity.y = 34;
        }
    }
}

class Particule {
    constructor({position, velocity, radius, color}) {
        this.position = position
        this.velocity = velocity
        this.radius = radius
        this.color = color
        this.opacity = 0.8
    }
    draw(){
        context.save();
        context.globalAlpha = this.opacity;
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        context.fill()
        context.closePath()
        context.restore();
    }
    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.opacity > 0) {
            this.opacity -= 0.01;
        }
        this.draw()
    }
}

class alienMissile {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.width = 6;
        this.height = 10;
    }
    draw(){
        context.fillStyle = 'yellow';
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
        context.fill()
    }
    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.draw();
    }
}

let missiles;
let alienMissiles;
let grids;
let player;
let particules;
let lifes;

const init =()=>{
    missiles =[] ;
   alienMissiles= []; 
   grids  = [new Grid()];
   player= new Player(); 
   particules=[];
   lifes =3;
}

init();

const animationLoop= ()=>{
    requestAnimationFrame(animationLoop);
    context.clearRect(0,0,world.width,world.height);
    player.update();
    missiles.forEach((missile,index) =>{
        if(missile.position.y + missile.height <=0) { 
            setTimeout(() =>{
                missiles.splice(index,1)} 
				,0)}
        else{missile.update();}
    }) 
    grids.forEach((grid, indexGrid) => {
        grid.update();
        if (frames % 50 === 0 && grid.invaders.length > 0) {
            grid.invaders[Math.floor(Math.random()*(grid.invaders.length))].shoot(alienMissiles)
        }
        grid.invaders.forEach((invader, indexI) => {
            invader.update({velocity:grid.velocity});
            missiles.forEach((missile, indexM) => {
                if(missile.position.y <= invader.position.y + invader.height &&
                    missile.position.y  >=  invader.position.y  &&
                    missile.position.x + missile.width >= invader.position.x &&
                    missile.position.x - missile.width <= invader.position.x + invader.width) {
                        for(let i=0; i <12;i++){
                            particules.push(new Particule({
                                position:{
                                    x:invader.position.x + invader.width/2,
                                    y:invader.position.y + invader.height/2
                                },
                                velocity:{x:(Math.random()-0.5)*2,y:(Math.random()-0.5)*2},
                                radius:Math.random()*5+1,
                                color:'red'
                            }))
                        }
                        setTimeout(() => {
                            grid.invaders.splice(indexI, 1);

                            missiles.splice(indexM, 1);
                            if(grid.invaders.length === 0 && grids.length ==1 ){
                                grids.splice(indexGrid,1);
                                grids.push(new Grid());
                            }
                        }, 0)
                    }
            })
        })
    })
    alienMissiles.forEach((alienMissile, index) => {
        if (alienMissile.position.y + alienMissile.height >= world.height) {
            setTimeout(() => {
                alienMissiles.splice(index, 1)
            }, 0);
        } else {alienMissile.update();}
        if(alienMissile.position.y + alienMissile.height >= player.position.y  && 
            alienMissile.position.y  <= player.position.y +player.height  && 
            alienMissile.position.x  >= player.position.x  && 
            alienMissile.position.x + alienMissile.width <= player.position.x + player.width) {
                alienMissiles.splice(index, 1);
                for(let i=0; i <22;i++){
                    particules.push(new Particule({
                        position:{
                            x:player.position.x + player.width/2,
                            y:player.position.y + player.height/2
                        },
                        velocity:{x:(Math.random()-0.5)*2,y:(Math.random()-0.5)*2},
                        radius:Math.random()*5,
                        color:'white'
                    }))
                }
                lostLife();
            }
    })

    particules.forEach((particule, index) => {
        if (particule.opacity <= 0) {
            particules.splice(index, 1)
        } else {
            particule.update();
        }
    })

   frames++;    
}



const  lostLife= ()=>{
    lifes--;
    if(lifes <= 0 ){
        alert('perdu');
        init();
    }
}

addEventListener('keydown',({key})=>{
    
    switch(key){
        case 'ArrowLeft':
             keys.ArrowLeft.pressed = true;
             break;
        case 'ArrowRight':
             keys.ArrowRight.pressed = true;
             break;
         } 
 })

 addEventListener('keyup', ({key})=> {
    switch(key){
        case 'ArrowLeft' :
            keys.ArrowLeft.pressed = false;
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
         case ' ':
             player.shoot();
    }
 })
 
world.addEventListener('click', animationLoop);