import './Question.scss';
import 'assets/main.js';

import React, { Component } from 'react';

export default class Question extends Component {  
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
    constructor(props) {

        super(props);

        this._question = props.text;

        this._yes = this.getQuestionsArray(props.yes);
        this._no = this.getQuestionsArray(props.no);

        this._level = props.level;
        this._index = props.index;

        this._response = '';
        this._result = 0;
        this._oldresponse = [];

    }

    get text() {
        return this._question;
    }

    get level() {
        return this._level;
    }

    get index() {
        return this._index;
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
                   result.push(questions[i]); 
            }
        }
        else {
                result.push(questions);
        }

        return result;
    }

    /**
     * Имеются ли дополнительные вопросы?
     */
    haveYesOreNo() {
        if (typeof this.text === 'undefined')
            return false;
        //console.log(`${this.yes.length} __ ${this.no.length} __ ${this.text}`);
        return (this.yes.length + this.no.length) > 0?true:false;
    }


    render() {

        const key_ = (this.level===0)?this.index:`${this.level}_${this.index}`;

        return <div className="bs_item" key={key_}>
            <span className="bs_text">{this.text}?</span>
            {this.processYesNo(key_, this.level+1)}
        </div>

    }

    processYesNo(key, level) {
        if (this.haveYesOreNo()) {
            return <div className="bs_yes_no">
                   {this.yes.length!==0?<div className="bs_yes">
                   {
                       this.yes.map((item, index) => 
                        <Question key={`${key}_${index}_yes`}  
                            yes={item.yes} no={item.no} 
                            text={item.text} level={level} 
                            index={index}/>)
                   }
                   </div>:''}
                   {this.no.length!==0?<div className="bs_no">
                   {
                       this.no.map((item, index) => 
                        <Question key={`${key}_${index}_no`}  
                            yes={item.yes} no={item.no} 
                            text={item.text} level={level} 
                            index={index}/>)
                    }
                    </div>:''}
                   </div>
        }
        else { return ''; }
    }  
}