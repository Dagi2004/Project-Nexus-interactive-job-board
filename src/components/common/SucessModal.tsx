import { SucesssModalProps } from "../../interfaces";
import Button from "./Button";
import sucessModalImage from "../../../src/assets/images/successModalImage.png"
const SucesssModal:React.FC<SucesssModalProps>=({onClose})=>{
    return(
<div className="fixed inset-0 bg-gray-900 bg-opacity-30 p-4   flex w-full justify-center  items-center">
<div className="bg-white shadow-md rounded-lg w-full max-w-md mx-4 overflow-hidden ">
<img src={sucessModalImage} alt="sucessModalImage" className="md:w-[250px] w-[100px] h-auto mx-auto" />
<h2 className="text-2xl font-bold text-blue-600 text-center">🎉 Thank You!</h2>
<p className="text-gray-600 text-center mt-2">
Your job application has been successfully submitted. <br />
You will receive a message soon!
</p>
<div className="flex justify-center my-6">
<Button buttonBackgroundColor="blue" buttonDimension="medium" butttonLabel="Close" type="button" action={onClose}/>
</div>
</div>
</div>
    )
    
}
export default SucesssModal


