
function runTimer(time)
{


    timerBox=document.querySelector(".timer-box");
    
    const updateTime=setInterval(()=>{
    
   
        time-=1;
        
        timerBox.innerText=`${time}s`;
    
    
    
    
    
      
        if(time===0)

            {
            
                const Main=document.querySelector("#main");
                Main.innerHTML="<h1>Game ended</h1>";
                Main.setAttribute("style","display: flex;justify-content: center;align-items: center;color:#234b18;");
                
                clearInterval(updateTime);

               
                
            }
            
        
    
    
    
    },1000)
    
  
    
    

}



function generateBubble(){

let clutter=" ";
let randomNum;

for(let i=1;i<=70;i++){


    randomNum=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble bubble-${i}">${randomNum}</div>`


}

document.querySelector("#pbtm").innerHTML=clutter;


}


function generateHit(){
    let hit=Math.floor(Math.random()*10);
    document.querySelector(".hit-box").innerHTML=hit;

}


function updateScore(ClickedNum){
let score;
let hit=Number(document.querySelector(".hit-box").textContent);
    if(ClickedNum===hit)
        {  score=Number(document.querySelector(".score-box").textContent);
            score+=10;
            document.querySelector(".score-box").innerHTML=score;
            generateHit();
            
        }
}

function play(){


let Pbtm=document.querySelector("#pbtm");

Pbtm.addEventListener("click",(detail)=>{
    generateBubble();
    let clickedNum=Math.floor(Number(detail.target.textContent));
    console.log(clickedNum);

    updateScore(clickedNum);
  

})



}



runTimer(60);
generateBubble();
generateHit();
play();





