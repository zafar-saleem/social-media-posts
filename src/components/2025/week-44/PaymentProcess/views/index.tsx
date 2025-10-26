import { ComponentStateProp } from "../types"
import { ConfirmationView } from "./components/ConfirmationView"
import { PaymentDetailsView } from "./components/PaymentDetailsView"
import { ProcessingView } from "./components/ProcessingView"

export const ViewsContainer = ({ title, setTitle }: ComponentStateProp) => {
  if (title === 'review') {
    return <PaymentDetailsView title={title} setTitle={setTitle} />
  }
  
  if (title === 'processing') {
    return <ProcessingView title={title} />
  }
  
  return <ConfirmationView title={title} />
}
