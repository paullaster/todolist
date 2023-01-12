import Form from "./Form";
import LabeledInput from "./LabeledInput";

const CreateToDo = ({onChange}) => {
    <Form>
        <LabeledInput
         onChange={onChange}
        >
          Create to do
        </LabeledInput>
    </Form>
};

export default CreateToDo;