import type { FC } from 'hono/jsx'

const Dashboard: FC = () => {
  const name = 'XXX'
  const email = 'xxx@xxx'
  return (
    <div className='flex min-h-screen flex-col bg-gray-100'>
      {/* Header */}
      <header className='flex items-center justify-between bg-blue-600 p-4 text-white'>
        <h1 className='font-bold text-2xl'>Example</h1>
        <button
          type='button'
          className='rounded bg-gray-300 px-3 py-1 text-gray-800 hover:bg-gray-200'
        >
          ログアウト
        </button>
      </header>

      {/* Main Content */}
      <main className='flex-grow p-6'>
        <div className='mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md'>
          <h2 className='mb-4 font-semibold text-xl'>こんにちは、{name}!</h2>
          <p className='mb-4'>あなたのアカウント情報を以下に表示します。</p>

          <div className='space-y-4'>
            <div className='rounded bg-gray-50 p-4 shadow'>
              <h3 className='font-medium'>メールアドレス</h3>
              <p>{email}</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-gray-800 p-4 text-center text-white'>&copy; 2024 Example</footer>
    </div>
  )
}

export default Dashboard
