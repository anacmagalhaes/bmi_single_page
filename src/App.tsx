import { useState } from "react";

function App() {
  const [altura, setAltura] = useState<number>()
  const [peso, setPeso] = useState<number>()
  const [imc, setImc] = useState<number>(0)
  const [resultado, setResultado] = useState<string>('');
  const calcularImc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resultImc = (Number(peso) / ((Number(altura) / 100) * (Number(altura) / 100)));
    setImc(resultImc)

    if (resultImc < 18.5) {
      setResultado('Abaixo do peso normal');
    } else if (resultImc > 18.5 && resultImc <= 25) {
      setResultado('Peso normal');
    } else if (resultImc > 25 && resultImc <= 30) {
      setResultado('Sobrepeso');
    } else if(resultImc > 30 && resultImc <= 35){
      setResultado('Obesidade grau I');
    } else if(resultImc > 35 && resultImc <= 40){
      setResultado('Obesidade grau II');
    } else if(resultImc > 40){
      setResultado('Obesidade grau III');
    } else {
      setResultado('Nenhum resultado');
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-purple-200">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center bg-purple-50 p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-black">Cálculo de IMC</h1>
          <form onSubmit={calcularImc} className="flex flex-col">
            <div>
              <label htmlFor="peso" className="font-bold"> Peso (kg): </label>
              <input type="number" id="peso" min="1" onChange={(e) => setPeso(Number(e.target.value))} value={peso} placeholder="Em KG" className="border-black border-2 mb-5 p-2 rounded placeholder:text-gray-500"></input>
            </div>
            <div>
              <label htmlFor="altura" className="font-bold"> Altura (cm): </label>
              <input type="number" id="altura" min="1" onChange={(e) => setAltura(Number(e.target.value))} value={altura} placeholder="Em CM" className="border-black border-2 mb-5 p-2 rounded placeholder:text-gray-500"></input>
            </div>
            <button type="submit" className="mt-2 px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition-colors">
              Calcular IMC
            </button>
          </form>
          <div className="flex flex-row mt-4">
            <h2 className="font-bold">IMC:</h2>
            <h3 className="ml-1">{imc.toFixed(2)}</h3>
          </div>
          <div className="flex flex-row mt-4">
            <h2 className="font-bold">Resultado:</h2>
            <h3 className="ml-1">{resultado}</h3>
          </div>
        </div>
      </div>
      <footer className="bg-purple-950 opacity-50 text-white text-center py-4">
        <p>&copy; 2025. Desenvolvido por Ana Carolina.</p>
      </footer>
    </div>
  )
}

export default App
