import './Questions.scss';
import 'assets/main.js';

import React, { Fragment, PureComponent } from 'react';

import Question from 'components/Question'

export default class Questions extends PureComponent {

    constructor(props) {
        super(props);
        this.initQuestions();
    }

    initQuestions() {
        const questions = [
            { text: 'как будете использовать' },
            { text: 'сколько человек будет в лодке'},
            { text: 'Есть ли уже мотор', 
              yes: [
                    { text: 'сколько л.с'},
                    { text: 'какой бренд'},
                    { text: 'планируете ли менять мотор'}
                ],
              no: [
                    { text: 'планируете покупку', yes: 'сколько л.с'}
                ]
            },
            { text: 'Будете ли использовать на озерах и малых реках (влияет на размер баллонов)'},
            { text: 'Лодка нужна с надувным дном', no: 'Фанерное дно устроит'},
            { text: 'Киль на лодке нужен' }
        ];

        this.questions = this.prepareQuestionsArray(questions);
    }

    /**
     * Формируем массив
     */
    prepareQuestionsArray(questions) {
        for (let i = 0; i < questions.length; i++) {
            if (!questions[i].hasOwnProperty('yes')) {
                questions[i].yes = [];
            }
            else {
                if (questions[i].yes instanceof Array)
                    questions[i].yes = this.prepareQuestionsArray(questions[i].yes);
                else {
                    questions[i].yes = {text:questions[i].yes, yes:[], no: []};
                }
            }

            if (!questions[i].hasOwnProperty('no')) {
                questions[i].no = [];
            }
            else {
                if (questions[i].no instanceof Array)
                    questions[i].no = this.prepareQuestionsArray(questions[i].no);
                else {
                    questions[i].no = {text:questions[i].no, yes:[], no: []};
                }
            }
        }
        return questions;
    }

    render() {  
        return (
            <div className="bs">
                <h1>Интеллектуальной подбор лодки с мотором</h1>
                {this.questions.map((item, index) => 
                    <Question key={index}  yes={item.yes} no={item.no} text={item.text} level={0} index={index}/>                          
                )}
            </div>
        );
    }
}