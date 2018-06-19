import './BoatSelection.scss';

import React, { Component } from 'react';

class Question {

    /**
     * question - сам вопрос
     * yes - массив вопросов, если ответ положительный
     * no - массив вопросов, если ответ отрицательный
     * this._response - развернутый ответ на вопрос
     * this._result - 0 на вопрос не ответили
     *                1 на вопрос ответили утвердительно (да)
     *                2 на вопрос ответили отрицательно (нет)
     *                3 на вопрос ответили развернутым ответом
     * this._oldresponse - сохраняем на всякий случай старые ответы 
     *                     пользователя
     */
    constructor(question, yes=[], no=[]) {

        this._question = question;

        this._yes = this.getQuestionsArray(yes);
        this._no = this.getQuestionsArray(no);

        this._response = '';
        this._result = 0;
        this._oldresponse = [];

    }

    get text() {
        return this._question;
    }

    /**
     * Возвращаем массив вопросов в случае положительных ответов
     */
    get yes() {
        return this._yes;
    }

    /**
     * Ответили положительно
     */
    set yes(value) {
        this.newAnswer(1, value);
    }

    /**
     * Возвращаем массив ответов в случае отрицательного ответа
     */
    get no() {
        return this._no;
    }
    
    /**
     * Ответили отрицательно
     */
    set no(value) {
        this.newAnswer(2, value);
    }
    
    /**
     * Получаем текущий развернутый ответ
     */
    get response() {
        return this._response;
    }
    
    /**
     * Ответили ни да, ни нет - оставили развернутый ответ
     */
    set response(value) {
        this.newAnswer(3, value);
    }
    
    /**
     * Проверяем статус текущаего вопроса
     * this._result - 0 на вопрос не ответили
     *                1 на вопрос ответили утвердительно (да)
     *                2 на вопрос ответили отрицательно (нет)
     *                3 на вопрос ответили развернутым ответом
     * this._response - развернутый ответ
     */
    get status() {
        return { status: this._result, response: this._response};
    }

    newAnswer(status, text) {
        this.saveOldResponse();
        this._result = status;
        this._response = (text instanceof String)?text:'';
    }

    saveOldResponse() {
        if (this._response.length > 0) {
            if (this._oldresponse.indexOf( this._response ) != -1) {
                this._oldresponse.push(this._response);
            }   
        }
    }

    /**
     * Проверяет на корректность введенные вопросы
     * и формируем корректные массив с вопросам и возвращает их
     */
    getQuestionsArray(questions) {

        let result = [];

        if (questions instanceof Array) {
            for (let i = 0; i < questions.length; i++) {
                if (questions[i] instanceof Question) {
                   result.push(questions[i]); 
                }
            }
        }
        else {
            if (questions instanceof Question) {
                result.push(questions);
            }
        }

        return result;
    }

    /**
     * Имеются ли дополнительные вопросы?
     */
    haveYesOreNo() {
        return (this._yes.length + this._no.length) > 0?true:false;
    }

}

export default class BoatSelection extends Component {

    constructor(props) {
        super(props);
        this.initQuestions();
    }

    initQuestions() {
        this.questions = [
            new Question('как будете использовать'),
            new Question('сколько человек будет в лодке'),
            new Question('Есть ли уже мотор', 
                [
                    new Question('сколько л.с'),
                    new Question('какой бренд'),
                    new Question('планируете ли менять мотор')
                ],
                [
                    new Question('планируете покупку',  new Question('сколько л.с'))
                ]),
            new Question('Будете ли использовать на озерах и малых реках (влияет на размер баллонов)'),
            new Question('Лодка нужна с надувным дном', [], new Question('Фанерное дно устроит')),
            new Question('Киль на лодке нужен')
        ];
    }

    render() {      
        return (
            <div className="bs">
                <h1>Интеллектуальной подбор лодки с мотором</h1>
                {this.questions.map((item, index) => this.renderQuestion(item, index))}
            </div>
        );
    }
    
    /**
     * Отображаем вопрос
     */
    renderQuestion(question, index, level=0) {

        const key_ = (level===0)?index:`${level}_${index}`;

        let yesNoContent = '';

        

        return <div className="bs_item" key={key_}>
            <span className="bs_text">{question.text}?</span>
            {question.haveYesOreNo()?this.processYesNo(question, key_):''}
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