import './Questions.scss';

import React, { Fragment, PureComponent } from 'react';

import Question from 'components/Question'

export default class Questions extends PureComponent {

    constructor(props) {
        super(props);
        this.initQuestions();
    }

    initQuestions() {
        this.questions = [
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

        this.prepareQuestion();
    }

    prepareQuestion() {
        for (let i = 0; i < this.questions.lenght; i++) {
            if (!this.questions[i].hasOwnProperty('yes')) {
                this.questions[i].yes = [];
            }
            if (!this.questions[i].hasOwnProperty('no')) {
                this.questions[i].no = [];
            }
        }
    }

    render() {  
 
        return (
            <div className="bs">
                <h1>Интеллектуальной подбор лодки с мотором</h1>
                {this.questions.map((item, index) => 
                    <Question key={index}  yes={item.yes} no={item.no} text={item.text}/>                          
                )}
            </div>
        );
    }
    
    /**
     * Отображаем вопрос
     */
    renderQuestion(question, index, level=0) {

        const key_ = (level===0)?index:`${level}_${index}`;

        return <div className="bs_item" key={key_}>
            <span className="bs_text">{question.text}?</span>
            { question.haveYesOreNo() ? this.processYesNo(question, key_) : '' }
        </div>

    }

    processYesNo(question, index) {
        if (question.haveYesOreNo()) {
            return <div className="bs_yes_no">
                   <div className="bs_yes">{question._yes.map((item, index) => this.renderQuestion(item, index))}</div>
                   <div className="bs_no">{question._no.map((item, index) => this.renderQuestion(item, index))}</div>
                   </div>
        }
        else return '';
    }
}