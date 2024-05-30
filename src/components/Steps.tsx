import { AiOutlineStar, AiOutlineUser } from "react-icons/ai"
import { FiSend } from "react-icons/fi"
import './Steps.css'

type StepProps = {
  currentStep: number
}

export default function Steps({currentStep}: StepProps) {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Identificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
        <FiSend />
        <p>Enviar</p>
      </div>
    </div>
  )
}
