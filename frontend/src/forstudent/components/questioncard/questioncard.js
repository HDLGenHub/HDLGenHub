import './questioncard.css';

const Questioncard=(questionData)=>{
    const { questiondata } = questionData;

    return(
        <div className='questioncard-conatiner'>
            <div className='questioncard-question'>
                <p>{JSON.stringify(questiondata)}</p>
                <p>{questiondata.problem}</p>
                <img src={questiondata.image}/>
                <p>Choose the correct answer</p>
            </div>
            <div className='questioncard-answers'>
            </div>
        </div>
    );
}

export default Questioncard;