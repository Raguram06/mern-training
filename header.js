function Header() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 0, boxShadow: 'none', background: 'transparent', border: 'none' }}>
      <div className="logo-rr" style={{ margin: '18px auto 8px auto' }}>RR</div>
      <h2 className="signin-title" style={{ margin: 0 }}>Sign In</h2>
    </div>
  );
}
export default Header;