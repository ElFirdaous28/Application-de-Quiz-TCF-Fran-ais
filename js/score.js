// display score page

document.addEventListener("DOMContentLoaded",()=>{
        // taking data from local storage
        const scoreLocalStrorage = localStorage.getItem('score'); 
        const incorrectLocalStrorage = localStorage.getItem('incorrect');
        const totalTimeLocalStrorage = localStorage.getItem('totalTime');
        const savedQuestions = localStorage.getItem('questionsLastshuffle');
        const userAnswers = localStorage.getItem('userAnswers');
        
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
        if(savedQuestions){
            const parsedQuestions = JSON.parse(savedQuestions);
            const parsedUserAnswers = JSON.parse(userAnswers);
            const bilanDuQuiz = document.getElementById('bilan_du_quiz');

            for(let i=0;i<parsedQuestions.length;i++){
                choosedAnswer=parsedUserAnswers[i].answerChosen;
                bilanDuQuiz.innerHTML+=`<div class="question_answer ${i>0?'hidden':''} border-2 border-[#BFCFE7] rounded-xl flex flex-col justify-center items-center py-10">
                                        <h1 class="text-[#525CEB] text-2xl">Question <span>${i+1}</span></h1>
                                        <p class="mb-10 text-center mx-1 text-2xl">${parsedQuestions[i].question}</p>
                                        <!-- answers -->
                                        <div class="w-2/3 lg:w-1/2 md:w-1/2">
                                        <div class="text-start mb-3 pl-5 py-1 rounded-xl border-2 border-[#BFCFE7]" style="background-color: ${parsedQuestions[i].answers[0] === parsedQuestions[i].correctAnswer ? 'rgba(107, 191, 89, 0.4)' : (choosedAnswer === parsedQuestions[i].answers[0] && choosedAnswer !== parsedQuestions[i].correctAnswer ? 'rgba(217, 83, 79, 0.4)' : 'transparent')}">a&#41; ${parsedQuestions[i].answers[0]}</div>
                                        <div class="text-start mb-3 pl-5 py-1 rounded-xl border-2 border-[#BFCFE7]" style="background-color: ${parsedQuestions[i].answers[1] === parsedQuestions[i].correctAnswer ? 'rgba(107, 191, 89, 0.4)' : (choosedAnswer === parsedQuestions[i].answers[1] && choosedAnswer !== parsedQuestions[i].correctAnswer ? 'rgba(217, 83, 79, 0.4)' : 'transparent')}">b&#41; ${parsedQuestions[i].answers[1]}</div>
                                        <div class="text-start mb-3 pl-5 py-1 rounded-xl border-2 border-[#BFCFE7]" style="background-color: ${parsedQuestions[i].answers[2] === parsedQuestions[i].correctAnswer ? 'rgba(107, 191, 89, 0.4)' : (choosedAnswer === parsedQuestions[i].answers[2] && choosedAnswer !== parsedQuestions[i].correctAnswer ? 'rgba(217, 83, 79, 0.4)' : 'transparent')}">c&#41; ${parsedQuestions[i].answers[2]}</div>
                                        <div class="text-start mb-3 pl-5 py-1 rounded-xl border-2 border-[#BFCFE7]" style="background-color: ${parsedQuestions[i].answers[3] === parsedQuestions[i].correctAnswer ? 'rgba(107, 191, 89, 0.4)' : (choosedAnswer === parsedQuestions[i].answers[3] && choosedAnswer !== parsedQuestions[i].correctAnswer ? 'rgba(217, 83, 79, 0.4)' : 'transparent')}">d&#41; ${parsedQuestions[i].answers[3]}</div>            
                                        </div>
                                        <p class="w-2/3 lg:w-1/2 md:w-1/2 mt-5 text-center mx-auto">${parsedQuestions[i].explanation}</p>
                                    </div>`
            }
            const showMore = document.getElementById('show_more');
            const questionAnswerBox = Array.from(document.querySelectorAll('.question_answer'));
            questionAnswerBox.shift();// remove the first questionQnserBox from the array

            showMore.addEventListener("click",()=>{
                questionAnswerBox.forEach((element) => { // Fix: Correct arrow function syntax
                    element.classList.toggle('hidden');
                    showMore.innerText="Afficher Moins";
                });
            });
        }
})
