import { useEffect, useState } from 'react';
import Coverimage from '../coverimage/coverimage';
import './questioncard.css';

const Questioncard=(questionData)=>{
    const { questiondata } = questionData;
    const [answer_a, setAnswer_a] = useState();
    const [answer_b, setAnswer_b] = useState();
    const [answer_c, setAnswer_c] = useState();
    const [answer_d, setAnswer_d] = useState();

    const SuffleAnswers=()=>{
        var rand = [questiondata.answer, questiondata.wronganswer1, questiondata.wronganswer2, questiondata.wronganswer3];
        var x = rand.length;
        for (var i=0;i<x;i++){
           var index = [Math.floor(Math.random() * rand.length)];
           if(i==0){
            setAnswer_a(rand[index]);
            rand = rand.filter(item=>item!=rand[index]);
           }
           else if(i==1){
            setAnswer_b(rand[index%3])
            rand = rand.filter(item=>item!=rand[index]);
           }
           else if(i==2){
            setAnswer_c(rand[index%2])
            rand = rand.filter(item=>item!=rand[index]);
           }
           else if(i==3){
            setAnswer_d(rand[0])
           }
        }
    }

    useEffect(()=>{
        SuffleAnswers();
    },[questiondata]);

    return(
        <div className='questioncard-conatiner'>
            <div className='questioncard-question'>
                <p>{questiondata.problem}</p>
                {questiondata.image?(<Coverimage Image={questiondata.image}/>):null}
            </div>
            <div className='questioncard-answers'>
                {(questiondata.answer && questiondata.wronganswer1 && questiondata.wronganswer2 && questiondata.wronganswer3)?(
                    <div className='questioncard-answers-set'>
                        <p>Choose the correct answer</p>
                        <div className='questioncard-answers-each'>
                            <label>
                                <input name={questiondata._id} type='radio'></input>
                                {answer_a}
                            </label>
                            <label>
                                <input name={questiondata._id} type='radio'></input>
                                {answer_b}
                            </label>
                            <label>
                                <input name={questiondata._id} type='radio'></input>
                                {answer_c}
                            </label>
                            <label>
                                <input name={questiondata._id} type='radio'></input>
                                {answer_d}
                            </label>
                        </div>
                    </div>
                ):(
                    <div className='questioncard-answer-single'>
                        <p>Enter correct answer</p>
                        <input></input>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Questioncard;