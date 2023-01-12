const LabeledInput = ({onChange, name,type="text",children}) => {
  return (
    <label>
        {children}
        <input type={type} name={name} onChange={onChange}/>
    </label>
  )
};

export default LabeledInput;
