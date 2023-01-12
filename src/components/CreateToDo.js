import Button from "./Button";
import Form from "./Form";
import LabeledInput from "./LabeledInput";

const CreateToDo = ({onClickHandler, onChangeHandler}) => {
  return (
    <Form>
      <LabeledInput 
      onChange={onChangeHandler}
      >Create a new to do</LabeledInput>
      <Button 
      onClick = {onClickHandler}
      > Add  new task </Button>
    </Form>
  );
};

export default CreateToDo;
