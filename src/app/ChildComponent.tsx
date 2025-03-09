import callback from "./callback.module.css";

export const ChildComponent = ({ onClickHandler, state }: {
  onClickHandler: (val: any) => void,
  state: string,
}) => {
  
  console.log("Child Component: ", state);

  return (
    <>
      <form onSubmit={onClickHandler} className={callback.form}>
        <input type="text" name="name" className={`${callback.textbox}`} />
        <button type="submit" className={callback.button}>Click</button>
      </form>
    </>
  )
}
