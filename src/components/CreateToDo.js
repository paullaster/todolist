import Button from "./Button";
import Form from "./Form";
import LabeledInput from "./LabeledInput";

const CreateToDo = () => {
  return (
    <Form>
      <LabeledInput >Create a new to do</LabeledInput>
      <Button> Add  new task </Button>
    </Form>
  );
};

export default CreateToDo;
