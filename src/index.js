import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)