import { type FC, useState } from 'hono/jsx'

const Counter: FC = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount((cur) => cur + 1)
  }
  return (
    <>
      <div>
        Count: <span className='font-bold'>{count}</span>
      </div>
      <div>
        <button
          type='button'
          onClick={handleClick}
          className='select-none rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
        >
          Add
        </button>
      </div>
    </>
  )
}

export default Counter
