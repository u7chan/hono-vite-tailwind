import { render } from 'hono/jsx/dom'
import Counter from './ui/Counter'

function App() {
  return (
    <>
      <h1 className='bg-gray-300 text-center font-bold text-3xl'>Hello Hono!</h1>
      <div className='mt-2 grid place-items-center gap-2'>
        <Counter />
      </div>
    </>
  )
}

const root = document.getElementById('root')
root && render(<App />, root)
