export default function Home() {
  // Redirecionar para o index.html
  if (typeof window !== 'undefined') {
    window.location.href = '/index.html';
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: '#000',
      color: '#fff'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Carregando portfolio...</h1>
        <p>Redirecionando para <a href="/index.html" style={{ color: '#3B82F6' }}>/index.html</a></p>
      </div>
    </div>
  );
}
