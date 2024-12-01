const cardArray=[
    {
        name:'anchor',
        icon:'<i class="fa-solid fa-anchor"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },

{
    name:'water', 
    icon:'<i class="fa-solid fa-water"></i>'
},

{
    name:'ship',
    icon:'<i class="fa-solid fa-ship"></i>'
},
{
    name:'swimming',
    icon:'<i class="fa-solid fa-person-swimming"></i>'
},

{
    name:'otter',
    icon:'<i class="fa-solid fa-otter"></i>'
},


{
    name:'anchor',
    icon:'<i class="fa-solid fa-anchor"></i>'
},
{
    name:'fish',
    icon:'<i class="fa-solid fa-fish"></i>'
},

{
name:'water',
icon:'<i class="fa-solid fa-water"></i>'
},

{
name:'ship',
icon:'<i class="fa-solid fa-ship"></i>'
},
{
name:'swimming',
icon:'<i class="fa-solid fa-person-swimming"></i>'
},

{
name:'otter',
icon:'<i class="fa-solid fa-otter"></i>'
}


];

let flippedCards=[];
let matchedPairs=0;
shufflecards(cardArray);
displaycards(cardArray);


//shufflecards=mean loops and swap the cardArray
 
function shufflecards(cardsArray){

  for(let i=cardsArray.length-1;i>=0;i--)
    {
    const randIndex=Math.floor(Math.random()*(i+1));
    [cardsArray[i],cardsArray[randIndex]]=  [cardsArray[randIndex],cardsArray[i]]

  }
}

function displaycards(){
    //( for each) means any one or one by one
     cardArray.forEach((_curr,index,_arr)=>{
        const card=document.createElement('div');
    
        const boxer=document.getElementById("boxer");
        //set=mean set the value or create

        card.setAttribute('id',index);
        card.classList.add('cardback');
        card.classList.add('active');
        boxer.append(card);
        card.addEventListener('click',flipcard);

    });
}

function  flipcard(){

        if (flippedCards.length < 2 && this.classList.contains('active')) {

            // (this) mean represent this value
            let cardId = this.getAttribute('id');
            flippedCards.push(this);
            this.classList.remove('cardback');
            this.innerHTML = cardArray[cardId].icon;

            if (flippedCards.length == 2) {
                setTimeout(checkMatch,1000);
            }
        }
    }

   
function checkMatch(){
    const card1Id=flippedCards[0].getAttribute('id');
    const card2Id=flippedCards[1].getAttribute('id');
    if(cardArray[card1Id].name===cardArray[card2Id].name){
        flippedCards[0].style.border='none';
        flippedCards[0].style.background='rgb(125, 152, 91)';
        flippedCards[0].innerHTML="";
        flippedCards[0].classList.remove('active');
  
        flippedCards[1].classList.remove('active');
       


        flippedCards[1].style.border='none';
        flippedCards[1].style.background='rgb(125, 152, 91)';
        flippedCards[1].innerHTML="";
         matchedPairs++;
        checkGameOver();


    }  

    else{
        flippedCards[0].innerHTML="";
      


        flippedCards[0].classList.add('cardback');
        flippedCards[1].innerHTML="";
        
        flippedCards[1].classList.add('cardback');
    }
     flippedCards=[];

}


function checkGameOver(){
    if(matchedPairs==cardArray.length/2){
        while(boxer.firstchild){
            boxer.removechild(boxer.firstchild)

        }
        boxer.innerHTML="YOU WON THE FRIST LEVEL";
        boxer.classList.remove('game');
        boxer.classList.add('won');
    }
}