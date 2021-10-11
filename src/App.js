import { useState, useCallback, useMemo } from "react";
import Title from "./components/Title";
import MyForm from "./components/Forms/MyForm";
import MyList from "./components/Lists/MyList";

function App() {
  const [valores, setValores] = useState([]);

  /// Optimizacion => es necesario retornar siempre
  /// la misma instancia de la funcion
  const handleSubmit = useCallback((values) => {
    setValores((data) => [...data, values]); // usa el state para resetear
  }, []);

  const iterador = 5000000;
  console.time("memo");
  const memoized = useMemo(() => {
    /// funcion pesada
    let total = 0;
    for (let i = 0; i < iterador; i++) {
      total = total * iterador;
    }
    return total;
  }, [iterador]); /// deps: el valor que puede potencialmente cambiar
  console.timeEnd("memo");

  /// OPTIMIZACIONES DE useMemo, useCallback o memo
  /// solo son necesarias cuando hay problemas de performance

  return (
    <div>
      <Title>Mi título</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  );
}

export default App;
