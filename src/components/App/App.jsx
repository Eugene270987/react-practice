import './App.scss';
import Form from "../Form/Form";
import Wrapper from "../Wrapper/Wrapper";
import ExampleEffect from "../ExampleEffect/ExampleEffect";
import Posts from "../Posts/Posts";
function App() {
    return (
    <div>
        <Form/>
        <Wrapper color="lightblue">
            <h2>Text inside of the Wrapper</h2>
            <button>Click me!</button>
        </Wrapper>
        <ExampleEffect/>
        <Posts></Posts>
    </div>
  );
}

export default App;
