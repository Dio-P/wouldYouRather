import { useEffect } from "react";
import {  useSelector, useDispatch } from "react-redux";
import { QIDtoState } from "../Actions";
import "../style/main.css"
import { Link } from "react-router-dom";

const QuestionSample = (props) => {

    
    const questionsData = useSelector(state=> state.getQuestions)
    const users = useSelector(state=> state.getUsers)
    const partID = useSelector(state=> state.logID)
    const dispatch = useDispatch();
    const question=props.question;
    let questionAnswered = Object.keys(users[partID].answers).includes(props.question);



    const returningAnswer = (event) => {
        event.preventDefault()
        const returnedA = event.target.value;
        console.log("returnedA", returnedA);/////////////////
        return returnedA
    }

    useEffect(()=>{
        console.log("users+++++++++++++++++++", users);/////////////////
        console.log("questionsData[props.question]+++++++++++++++++++", questionsData[props.question]);/////////////////
        console.log("props+++++++++++++++++++", props);/////////////////
        console.log("props.question is2", props.question);/////////////////
        console.log("questionData[props.question] is:", questionsData[props.question])/////////////////
        console.log("questionsData[props.question].author0000000000000000", questionsData[props.question].author)/////////////////
        console.log("users[questionsData[props.question].author]0000000000000000", users[questionsData[props.question].author])/////////////////
        console.log("props.questionID", props.questionID);/////////////////
    }, [])

    const passingQid = () => {
        // console.log("props.question ON CLICK is !!!!!!!!!!!!!!!!!!!!!!!!!!!!!:", props.question)/////////////////
        dispatch(QIDtoState(props.question))

    }

    return(
        <div className="main_card_style game_quest_sample">
            <div className="avatarHolder"> 
                <img id="userAvatar" src={users[questionsData[props.question].author].avatarURL} alt="a random user avatar"/>
            </div>
            <fieldset className="main_fieldset" onChange={(event)=> returningAnswer(event)}>
                <div>
                <h4>...{questionsData[props.question].optionOne.text}...</h4>
                </div>
                <div>
                <Link  to={{pathname: "/question/:question_id",
                state: {question:props.question}}}><button className="main_button_style" onClick={passingQid}> {questionAnswered? "View Question": "Answer Question"}</button></Link>
                </div>
            </fieldset>
        </div>
    )
}

export default QuestionSample