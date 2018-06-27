function prepareQuestionsArray(questions) {
        
    for (let i = 0; i < questions.lenght; i++) {
        if (!questions[i].hasOwnProperty('yes')) {
            questions[i].yes = [];
        }
         if (!questions[i].hasOwnProperty('no')) {
            questions[i].no = [];
        }
    }

    return questions;
}
