import Logo from "../assets/Logo/logo.png";
export const TopHeader = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-1">
                <div className="logo">
                  <a className="navbar-brand" href="#">
                    <img
                      className="nav_logo"
                      src={Logo}
                      alt="Mattress Recycling Centre Logo"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-10 col-sm-11 col-11">
                <div className="nav_heading">
                  <h1 className="nav-heading-text">
                    Mattress Recycling Centre Leeds Ltd
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
