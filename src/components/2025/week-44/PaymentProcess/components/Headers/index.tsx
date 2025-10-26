import { ReviewHeader } from "./Components/Review";
import styles from "../../PaymentProcess.module.css";
import { ProcessingHeader } from "./Components/Processing";
import { ConfirmationHeader } from "./Components/Confirmation";
import { ComponentTitleProp } from "../../types";

const RenderHeaders: any = {
  review: ({ title }: ComponentTitleProp) => <ReviewHeader title={title} />,
  processing: ({ title }: ComponentTitleProp) => <ProcessingHeader title={title} />,
  confirmation: ({ title }: ComponentTitleProp ) => <ConfirmationHeader title={title} />,
}

export const Headers = ({ title }: ComponentTitleProp) => {
  return (
    <div className={styles.views_headers}>
      {RenderHeaders[title]({title})}
    </div>
  )
}
