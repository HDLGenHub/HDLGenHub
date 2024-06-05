import './questioncard.css';

const Questioncard=(questionData)=>{
    const { questiondata } = questionData;

    return(
        <div>
            {JSON.stringify(questiondata)}
        </div>
    );
}

export default Questioncard;