<nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            {(this.props.user) ?
                <li><Link className="nav-link" to="/animals">Animals</Link></li>
            : null }
            <li>Locations</li>
            {(this.props.user) ?
                <>
                <li><Link className="nav-link" to="/employees">Employees</Link></li>
                <li>Owners</li>
                <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
                </>
                : <li><Link className="nav-link" to="/login">Login</Link></li>
            }
          </ul>
        </nav>