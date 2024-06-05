import Coverimage from '../coverimage/coverimage';
import './questioncard.css';

const Questioncard=(questionData)=>{
    const { questiondata } = questionData;

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
                                <input type='radio'></input>
                                {questiondata.answer}
                            </label>
                            <label>
                                <input type='radio'></input>
                                {questiondata.wronganswer1}
                            </label>
                            <label>
                                <input type='radio'></input>
                                {questiondata.wronganswer2}
                            </label>
                            <label>
                                <input type='radio'></input>
                                {questiondata.wronganswer3}
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