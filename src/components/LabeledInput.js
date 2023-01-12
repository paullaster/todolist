const LabeledInput = ({children}) => {
  return (
    <label>
        {children}
        <input type={type} name="" value="">
    </label>
  )
};

export default LabeledInput;
