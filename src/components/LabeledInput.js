const LabeledInput = ({onChange, type='text', children}) => {
  return (
    <label>
        {children}
        <input
        onChange={onChange}
        type={type}
        />
    </label>
  )
};

export default LabeledInput;
