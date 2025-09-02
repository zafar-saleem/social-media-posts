export const Button = ({onEvent, isLoading, children}) => {
  return (
    <button onClick={onEvent}>
      {children} {isLoading ? "calculating..." : ""}
    </button>
  )
}
