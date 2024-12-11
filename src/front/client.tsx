import { render } from 'hono/jsx/dom'

function App() {
  return (
    <html lang='ja'>
      <body class='bg-gray-300'>
        <h1 class='text-3xl font-bold text-center'>Hello Hono!</h1>
      </body>
    </html>
  )
}

const root = document.getElementById('root')
root && render(<App />, root)
