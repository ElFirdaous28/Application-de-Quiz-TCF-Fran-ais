// display score page

document.addEventListener("DOMContentLoaded",()=>{
        // taking data from local storage
        const userAnswersLocalStrorage = localStorage.getItem('userAnswers'); 
        const scoreLocalStrorage = localStorage.getItem('score'); 
        const incorrectLocalStrorage = localStorage.getItem('incorrect');
        const totalTimeLocalStrorage = localStorage.getItem('totalTime');
        
        // select html elements to change
        const point = document.getElementById('points');
        const score = document.getElementById('nbr_correct');
        const incorrect = document.getElementById('nbr_incorrect');
        const niveau = document.getElementById('niveau');
        const moyenne = document.getElementById('moyenne');
        const cercleLevel = document.getElementById('cercle_level');
        const duree = document.getElementById('duree');
        
        if(scoreLocalStrorage){
            point.innerText=scoreLocalStrorage;
            score.innerText=scoreLocalStrorage;
            // show levels
            if(scoreLocalStrorage<=2){
                niveau.innerText='A1';
            }
            else if(scoreLocalStrorage<=6){
                niveau.innerText='B1';
                console.log('changed');
                
            }
            else if(scoreLocalStrorage==8){
                niveau.innerText='B2';
            }
            else if(scoreLocalStrorage==9){
                niveau.innerText='C1';
            }
            else if(scoreLocalStrorage==10){
                niveau.innerText='C2';
            }
            // show average
            moyenne.innerText=`${scoreLocalStrorage/10*100}%`;
            cercleLevel.style.background=`conic-gradient(#525CEB 0% ${scoreLocalStrorage/10*100}%, #BFCFE7 ${scoreLocalStrorage/10*100}% 100%)`;

        }
        if(incorrectLocalStrorage){
            incorrect.innerText=incorrectLocalStrorage;
        }
        if(totalTimeLocalStrorage){
            const minutes = Math.floor(totalTimeLocalStrorage/60).toString().padStart(2,'0');
            const seconds = (totalTimeLocalStrorage%60).toString().padStart(2,'0');
            duree.innerText=`${minutes}:${seconds}`
        }
        
})