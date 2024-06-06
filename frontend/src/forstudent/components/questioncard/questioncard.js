import { useEffect, useState } from 'react';
import { SERVER } from '../../../env.js';
import Coverimage from '../coverimage/coverimage';
import './questioncard.css';
import axios from 'axios';
import { getCache } from '../../../caching/cache';

const Questioncard=(questionData)=>{
    const { questiondata } = questionData;
    const [answer_a, setAnswer_a] = useState();
    const [answer_b, setAnswer_b] = useState();
    const [answer_c, setAnswer_c] = useState();
    const [answer_d, setAnswer_d] = useState();
    const [selected, setSelected] = useState();
    const [check, setCheck] = useState();
    const [postedattemptedquiz, setPostedattemptedquiz] = useState();

    const putAttemptedquizsave=async()=>{
        const res = await axios.put(`${SERVER}/AttemptedQuiz/${getCache('HDLGenHub_Attemptedquiz')._id}`, {
            questionid:questiondata._id,
            answer:selected,
            assignedmarks:questiondata.marks,
            marksgot:(selected===questiondata.answer)?questiondata.marks:0
        });
        alert(JSON.stringify(res));
    }
    const fetchCourse=async()=>{
        const res = await axios.get(`${SERVER}/Coursecomponent/item/${quizid}`);
        setCoursecomponent(res.data);
        alert(JSON.stringify(res.data));
    }
    const postAttemptedquiz=async()=>{
        alert(courseid);
        alert(quizid);
        alert(getCache('HDLGenHub_Student')._id);
        const res = await axios.post(`${SERVER}/AttemptedQuiz/`, {
            courseid:courseid,
            quizid:quizid,
            studentid:getCache('HDLGenHub_Student')._id
        });
        alert(JSON.stringify(res));
        setCache('HDLGenHub_Attemptedquiz', JSON.stringify(res.data));
    }

    const putAttemptedquizsubmit=async()=>{
        const res = await axios.put(`${SERVER}/AttemptedQuiz/${postedattemptedquiz._id}`, {
            iscompleted:true
        });
        alert(JSON.stringify(res));
    }
    
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
        setSelected(null);
        setCheck(null);
    },[questiondata]);

    const handleSave=async()=>{
        setPostedattemptedquiz(getCache('HDLGenHub_Attemptedquiz'));
        alert(selected);
        setCheck(false);
        putAttemptedquizsave();
    }
    const handleSubmit=async()=>{
        alert("Submitted");
        putAttemptedquizsubmit();
    }

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
                                <input onChange={()=>setSelected(answer_a)} id='a' value={answer_a} name={questiondata._id} type='radio' checked={check}></input>
                                {answer_a}
                            </label>
                            <label>
                                <input onChange={()=>setSelected(answer_b)} id='b' value={answer_b} name={questiondata._id} type='radio' checked={check}></input>
                                {answer_b}
                            </label>
                            <label>
                                <input onChange={()=>setSelected(answer_c)} id='c' value={answer_c} name={questiondata._id} type='radio' checked={check}></input>
                                {answer_c}
                            </label>
                            <label>
                                <input onChange={()=>setSelected(answer_d)} id='d' value={answer_d} name={questiondata._id} type='radio' checked={check}></input>
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
            <div className='questioncard-submission-set'>
                <button onClick={handleSave}>
                    <div className='questioncard-submission'>
                        save answer
                    </div>
                </button>
                <button onClick={handleSubmit}>
                    <div className='questioncard-submission'>
                        submit answers
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Questioncard;