import Basket from "./basket.js";
//create object of basket to be visible to player
let basket=new Basket();
let score=0;
export default class Egg
{
    #body;
    constructor()
    {
        this.#body=document.createElement('img');
        window.document.body.append(this.#body);
        this.top=0;
        this.left=10;
        this.setStyle();
        
    }
    setStyle()
    {
        this.#body.setAttribute('src','../images/objects/egg1.png');
        this.#body.style.position='absolute';
        this.#body.style.width=`40px`;
        this.#body.style.height=`60px`;
        this.#body.style.left=`${this.left}px`;
        this.#body.style.top=`${this.top}px`;
    }
    moveLeftOrRight()
    {
        this.left=this.generateRandomLeft(0 ,innerWidth-this.#body.offsetWidth);
        this.#body.style.left=`${this.left}px`;
    }
    
    moveBottom()
    {
        this.top+=10;  
        if(this.top<(innerHeight-this.#body.offsetHeight))
            this.#body.style.top=`${this.top}px`;
        
    }
    generateRandomLeft(min, max) 
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    FallingEgg()
    {
        this.moveLeftOrRight();
        let stopmovingegg=setInterval(() => {
                this.moveBottom();
            if((this.top+this.#body.offsetHeight)>=(window.innerHeight-(basket.getbasketheight()/2))){
                
                //
                if(this.left > basket.getLeft() && (this.left+this.#body.offsetWidth)<(basket.getLeft()+basket.getbasketWidth())&&this.top+this.#body.offsetHeight<=window.innerHeight)
                {
                    clearInterval(stopmovingegg);
                    let scoreCounter=document.getElementById('counter');
                    scoreCounter.innerText=++score;
                    this.#body.style.display='none'; 
                }
                else if(this.top>=window.innerHeight)
                {  
                    this.#body.setAttribute('src','../images/objects/broken2.png');
                    setTimeout(() => {
                        this.#body.style.display='none';     
                    }, 1000);
                }   
            }
            
        }, 50);
        return stopmovingegg;
    }

    destroy()
    {
        this.#body.remove();
    }
    

}
