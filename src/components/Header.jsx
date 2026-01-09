function Header({ isAuthenticated, onLogout }) {
  return (
    <header style={{ padding: "10px", borderBottom: "1px solid pink" }}>
      <h2>Job Tracker</h2>
      {isAuthenticated && <button onClick={onLogout}>Logout</button>}
    </header>
  );
}

export default Header;
