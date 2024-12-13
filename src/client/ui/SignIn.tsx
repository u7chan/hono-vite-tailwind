import type { FC } from 'hono/jsx'
import { useNavigaton } from '../hooks/useNavigation'

const SingIn: FC = () => {
  const { goto } = useNavigaton()
  const handleSubmit = (e: Event) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Response error => ${res.status} ${res.statusText}`)
        }
        goto('/dashboard')
      })
      .catch((e) => {
        console.error(e)
        alert('ログインに失敗しました')
      })
  }
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md'>
        <h2 className='text-center font-bold text-2xl'>Example</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='block font-medium text-gray-700 text-sm' htmlFor='email'>
              メールアドレス
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-500'
            />
          </div>
          <div>
            <label className='block font-medium text-gray-700 text-sm' htmlFor='password'>
              パスワード
            </label>
            <input
              type='password'
              id='password'
              name='password'
              required
              className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-500'
            />
          </div>
          <button
            type='submit'
            className='mt-4 w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300'
          >
            ログイン
          </button>
        </form>
      </div>
    </div>
  )
}

export default SingIn
