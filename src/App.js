import Layout from "./components/Layout";
import Todos from "./components/Todos";
import TodoContextProvider from "./context/TodoContext";


function App() {
  return (
    <Layout>
      <h1>Todos</h1>

      <TodoContextProvider>
        <Todos/>
      </TodoContextProvider>


    </Layout>
  );
}

export default App;
