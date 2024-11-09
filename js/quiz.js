const questions = [
    // question1
    {
        id:1,
        question: "Quel est le synonyme de 'content' ?",
        answers: ["Heureux","Triste","Fatigué","Malade"],
        correctAnswer: "Heureux",
        explanation : 'Le mot "content" signifie être heureux ou satisfait. "Heureux" est donc son synonyme direct, tandis que les autres options ("triste", "fatigué", "malade") sont des antonymes ou ne sont pas liés au sens de "content".'
    },
    // question2
    {
        id:2,
        question: "Quel est le contraire de 'sombre'",
        answers: ["Clair", "Brillant", "Silencieux","Profond"],
        correctAnswer: "Clair",
        explanation:'"Sombre" signifie "obscur" ou "faiblement éclairé". Le contraire de "sombre" est "clair", qui signifie "lumineux" ou "éclairé". Par conséquent, "clair" est la réponse correcte.'
    },
    // question3
    {
        id:3,
        question: "Complétez : 'Nous _______ en vacances.'",
        answers: ["allerons", "allons", "va","allont"],
        correctAnswer: "allons",
        explanation: 'La phrase correcte est "Nous allons en vacances". Le verbe "aller" est conjugué au présent pour le sujet "nous". "Allerons" serait une forme future, et "allont" est incorrect.'
    },
    // question4
    {
        id:4,
        question: "Quel mot complète correctement cette phrase :<br>'Il pleut beaucoup, je prends _______ parapluie.'",
        answers: ["un", "une", "des","le"],
        correctAnswer: "un",
        explanation:'Le mot "parapluie" est un nom masculin singulier, donc il doit être précédé de l\'article indéfini "un" ("un parapluie"). Les autres choix ne sont pas grammatiquement corrects dans ce contexte.'
    },
    // question5
    {
        id:5,
        question: "Quelle phrase est correcte ?",
        answers: ["Elle est arrivé.", "Elle est arrivée.", "Elle est arrivéé.","Elle arrivée."],
        correctAnswer: "Elle est arrivée.",
        explanation:'La forme correcte est "Elle est arrivée", car le verbe "arriver" se conjugue avec l\'auxiliaire "être" et s\'accorde avec le sujet féminin singulier "elle", d\'où l\'ajout de "e" à la fin de "arrivée".'
    },
    // question6
    {
        id:6,
        question: "Que signifie le mot 'rapidement' ?",
        answers: ["Lentement.", "Avec soin", "Vite","Sans effort"],
        correctAnswer: "Vite",
        explanation:'"Rapidement" signifie "vite", donc la réponse correcte est "vite". Les autres choix sont des antonymes ou des significations différentes du mot "rapidement".'
    },
    // question7
    {
        id:7,
        question: "Quel est l'intrus ?",
        answers: ["Chien.", "Chat", "Oiseau","Voiture"],
        correctAnswer: "Voiture",
        explanation:'"Chien", "Chat" et "Oiseau" sont des animaux, tandis que "Voiture" est un objet non vivant, ce qui en fait l\'intrus.'
    },
    // question8
    {
        id:8,
        question: "Quelle est la traduction de 'I am learning French'?",
        answers: ["J'apprends le français.", "Je parle le français.", "J'écris en français.","J'écoute le français."],
        correctAnswer: "J'apprends le français.",
        explanation:'La phrase "I am learning French" se traduit par "J\'apprends le français", car "apprendre" est le verbe correspondant à "learning" en anglais.'
    },
    // question9
    {
        id:9,
        question: "Complétez : 'Marie et Paul ________ très bien.'",
        answers: ["parle", "parlent", "parles","parler"],
        correctAnswer: "parlent",
        explanation:'La phrase "I am learning French" se traduit par "J\'apprends le français", car "apprendre" est le verbe correspondant à "learning" en anglais.'
    },
    // question10
    {
        id:10,
        question: "Quel est le bon pronom pour remplacer 'Les enfants' ?",
        answers: ["Il", "Elle", "Ils","Elles"],
        correctAnswer: "Ils",
        explanation:'"Les enfants" est un sujet au pluriel, et puisque "enfants" désigne des personnes de sexe mixte ou non précisé, le pronom correct est "ils". Si tous les enfants étaient de sexe féminin, "elles" serait approprié, mais ici "ils" est plus générique.'
    }
  ];


document.addEventListener("DOMContentLoaded",()=>{
    // shuffle the quwstions array
    shuffleArray(questions);
    // shuffle the answers array
    questions.forEach((question)=>{
        shuffleArray(question.answers);
    })
    const userAnswers = []; 
    const quizContainer = document.getElementById('quiz_container');
    let questionIndex=1;
    let score=0;
    let incorrect=0;
    let totalTime=0;
    // fonction d affichage des question
    function showQuestion(index){
        quizContainer.innerHTML=`<div class="question pt-9 h-screen flex flex-col gap-3 lg:gap-11 md:gap-11">
                                    <!-- timer -->
                                    <div>
                                        <div id="timer" class="w-32 bg-[#525CEB] text-2xl text-white float-right text-center rounded-full mr-0 lg:mr-44 md:mr-44">00:20</div>
                                    </div>
                                    <!-- question card -->
                                    <div class="w-11/12 lg:w-2/3 md:w-2/3 self-center border-2 border-[#BFCFE7] rounded-2xl py-10 flex flex-col items-center text-[#3D3B40]">
                                    <!-- number of quesion -->
                                        <div class="text-2xl mb-5">
                                            Question <span>${index}</span>/10
                                        </div>
                                        <div class="relative h-3 w-4/5 border-2 border-[#525CEB] rounded-full mb-10">
                                        <div style="width: ${questionIndex*10}%;" class="absolute inset-0 bg-[#525CEB] rounded-full ">
                                        </div>
                                        </div>
                                        
                                        <div class="w-11/12 lg:w-1/3 md:w-1/3">
                                        <!-- question -->
                                        <p class="text-xl text-center mb-10">${questions[index-1].question}</p>
                                        <!-- answers -->
                                        <div class="felx flex-col">
                                            <button class="answers w-full max-w-96 text-start mb-3 pl-5 h-9 rounded-full border-2 border-[#BFCFE7] hover:text-white hover:bg-[#525CEB] hover:border-[#525CEB]">a&#41; <span>${questions[index-1].answers[0]}</span></button>
                                            <button class="answers w-full max-w-96 text-start mb-3 pl-5 h-9 rounded-full border-2 border-[#BFCFE7] hover:text-white hover:bg-[#525CEB] hover:border-[#525CEB]">b&#41; <span>${questions[index-1].answers[1]}</button>
                                            <button class="answers w-full max-w-96 text-start mb-3 pl-5 h-9 rounded-full border-2 border-[#BFCFE7] hover:text-white hover:bg-[#525CEB] hover:border-[#525CEB]">c&#41; <span>${questions[index-1].answers[2]}</button>
                                            <button class="answers w-full max-w-96 text-start mb-3 pl-5 h-9 rounded-full border-2 border-[#BFCFE7] hover:text-white hover:bg-[#525CEB] hover:border-[#525CEB]">d&#41; <span>${questions[index-1].answers[3]}</button>
                                        </div>
                                        </div>
                                    </div>
                                
                                    <!-- buttons stop quiz & next question -->
                                    <div class="self-center w-4/5 flex flex-col lg:flex-row md:flex-row justify-between text-xl">
                                    <button class="border-2 border-[#BFCFE7] rounded-full px-5 pt-1 pb-2 text-[#3D3B40] ">Arrêter Le Test</button>
                                    <button id="next_question" class="hidden border-2 bg-[#525CEB] rounded-full px-5 pt-1 pb-2 text-white">Question Suivante →</button>
                                    <button id="see_result" class="hidden border-2 bg-[#525CEB] rounded-full px-5 pt-1 pb-2 text-white">Voir Le Résultat</button>
                                    </div>
                                </div>`;

        const answers = document.querySelectorAll('.answers');
        const nextQuestion = document.getElementById('next_question');
        const seeResult = document.getElementById('see_result');
        // question timming
        let startTime=20;
        const questionInterval = setInterval(() => {
            document.getElementById("timer").innerText = `00:${String(startTime).padStart(2, '0')}`;
            startTime--;
        }, 1000);
        // show next question if time out
        const questionTimeOut = setTimeout(()=>{
            clearInterval(questionInterval);
            answers.forEach(btn => {
                btn.disabled = true;
            });
            if(questionIndex<questions.length){
                questionIndex++;
                incorrect++;
                userAnswers.push({ id: questions[index - 1].id, answerChosen: '' });
                showQuestion(questionIndex);
            }
            // or see result if time out and last question
            else if (index === questions.length) {
                incorrect++;
                nextQuestion.classList.add("hidden");  // Hide the "Next Question" button
                seeResult.classList.remove("hidden");  // Show the "See Result" button
                userAnswers.push({ id: questions[index - 1].id, answerChosen: '' });
            }
        },20*1000)
        // check if answer correct
            answers.forEach(answer => {
                answer.addEventListener("click",()=>{
                    clearInterval(questionInterval);
                    clearTimeout(questionTimeOut);
                    console.log(startTime);
                    totalTime+=20-startTime;
                    
                // Disable all buttons when one of them is clicked
                answers.forEach(btn => {
                    btn.disabled = true;
                });
            
                if (index === questions.length) {
                    nextQuestion.classList.add("hidden");  // Hide the "Next Question" button
                    seeResult.classList.remove("hidden");  // Show the "See Result" button
                    totalTime+=20-startTime;
                } else {
                    nextQuestion.classList.remove("hidden");  // Show the "Next Question" button
                    seeResult.classList.add("hidden");  // Hide the "See Result" button
                    totalTime+=20-startTime;
                }
                const answerText = answer.querySelector('span').textContent;
                userAnswers.push({ id: questions[index - 1].id, answerChosen: answerText });

                if(questions[questionIndex-1].correctAnswer===(answerText)){
                    answer.style.backgroundColor = "rgba(107, 191, 89, 0.4)";
                    answer.classList.remove("hover:text-white", "hover:bg-[#525CEB]", "hover:border-[#525CEB]");
                    answer.classList.add("border-none");
                    score++;
                }
                else{
                    answer.style.backgroundColor="rgba(217, 83, 79, 0.4)"
                    answer.classList.remove("hover:text-white", "hover:bg-[#525CEB]", "hover:border-[#525CEB]");
                    answer.classList.add("border-none");
                    incorrect++;
                    // change the background of the correct answer
                    answers.forEach(btnAnswer => {
                        if (btnAnswer.querySelector('span').textContent === questions[questionIndex - 1].correctAnswer) {
                            btnAnswer.style.backgroundColor = "rgba(107, 191, 89, 0.4)";
                            btnAnswer.classList.remove("hover:text-white", "hover:bg-[#525CEB]", "hover:border-[#525CEB]");
                            btnAnswer.classList.add("border-none");
                        }
                    });     
                }
            })
        });
        // showing the next question after button click        
        nextQuestion.addEventListener("click",()=>{
            if(questionIndex<questions.length){
                questionIndex++;
                showQuestion(questionIndex);
            }
    });
    seeResult.addEventListener("click",()=>{
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
        localStorage.setItem('score', score);
        localStorage.setItem('incorrect', incorrect);
        localStorage.setItem('totalTime', totalTime);
        localStorage.setItem('questionsLastshuffle', JSON.stringify(questions));
        // go to score page
        window.location.href = "score.html";
    });
    }
    // show the first question
    showQuestion(questionIndex);
})


function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
