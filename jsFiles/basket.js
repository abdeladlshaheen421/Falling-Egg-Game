export default class Basket
{
    #body;
    constructor()
    {
        this.#body=document.createElement('img');
        this.left=window.innerWidth/2;
        window.document.body.append(this.#body);
        this.setAllStyles();
        this.addlistener();

    }
    setAllStyles()
    {
        this.#body.style.height='120px';
        this.#body.style.width='120px';
        this.#body.style.position='absolute';
        this.#body.style.top=`${window.innerHeight-this.#body.offsetHeight}px`;
        this.#body.style.left=`${window.innerWidth/2}px`;
        this.#body.setAttribute('src','../images/objects/object_001_basket.png');
    }
    moveLeft()
    {
        if(this.left>0){
            this.left-=20;
            this.#body.style.left=`${this.left}px`;
        }
    }
    getLeft()
    {
        return this.left;
    }
    getbasketWidth()
    {
        return this.#body.offsetWidth;
    }
    getbasketheight()
    {
        return this.#body.offsetHeight;
    }
    moveRight()
    {
        if(this.left<(innerWidth-this.#body.width))
        {
            this.left+=20;
            this.#body.style.left=`${this.left}px`;
        }
    }
    addlistener()
    {
        window.addEventListener('keydown',(event)=>{
            if(event.code=="ArrowRight")
                this.moveRight();
            else if(event.code=="ArrowLeft")
                this.moveLeft();
        });
    }
}