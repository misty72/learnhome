export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1>Welcome to LearnHome</h1>
      <p>Your homeschool platform starter built with Next.js.</p>
      <div style={{ marginTop: '1.5rem', fontSize: '1rem', color: '#555' }}>
        Use <code>npm run dev</code> to start the development server.
      </div>
    </main>
  )
}
