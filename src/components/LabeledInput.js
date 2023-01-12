const LabeledInput = ({onChange, children}) => {
  return (
    <label>
        {children}
        <input
        onChange={onChange}
        />
    </label>
  )
};

export default LabeledInput;
