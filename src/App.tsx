import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const handleRegister = (formData: any) => {
    const nome = formData.get("nome");
    const tarefa = formData.get("tarefa");
    console.log(nome);
    console.log(tarefa);
    setMessage("bem vindo " + nome + "tarefa atual " + tarefa);
  };
  return (
    <div>
      <h1>Form + Action</h1>

      <form action={handleRegister}>
        <input type="text" name="nome" required placeholder="digite seu nome" />
        <br />
        <input
          type="text"
          name="tarefa"
          required
          placeholder="digite a tarefa"
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
      {message}
    </div>
  );
}

export default App;
