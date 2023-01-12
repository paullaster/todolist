import Button from "./Button";
import Form from "./Form";
import LabeledInput from "./LabeledInput";

const CreateToDo = () => {
  return (
    <Form>
      <LabeledInput >Create a new to do</LabeledInput>
      <Button> Add </Button>
    </Form>
  );
};

export default CreateToDo;
