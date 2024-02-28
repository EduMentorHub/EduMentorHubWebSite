import './Faq.css'
import NavBar from '../NavBar/NavBar';
import textData from '../../textData';
import transition from '../../transition';
import { useState } from "react";
import BottomBar from '../BottomBar/BottomBar';

function Faq(){
	
	const [showFull, setShowFull] = useState(Array(textData.faqQuestionList.length).fill(false));

	return(
		<div>
			<div className = "Faq">
				<h1>{textData.gotAquestion}</h1>
				<p>{textData.gotAquestionPara}</p>
				<div className="faqQuestions">
					{
						textData.faqQuestionList.map((questions, index) => (
							<div className = "questions">
								<div className="questionsTitle">
									<h1>{questions[0]}</h1>
									{(questions.length == 3) ? (
										<p onClick={() =>{
											const updatedShowFull = [...showFull];
											updatedShowFull[index] = !updatedShowFull[index];
											setShowFull(updatedShowFull);
											}}>{showFull[index] ?  '-' : '+'}
										</p>
										) : null
									}
								</div>
								{(questions.length == 3) ? (
										<p>{showFull[index] ? questions[1] : questions[2]}</p>
									) : (
										<p>{questions[1]}</p>
									)
								}
							</div>
						))
					}
				</div>
			</div>
			<BottomBar />
		</div>
	)
}

export default transition(Faq);