const LabeledInput = ({onChange, name,type="text",children}) => {
  return (
    <label>
        {children}
        <input type={type} onChange={onChange}/>
    </label>
  )
};

export default LabeledInput;
