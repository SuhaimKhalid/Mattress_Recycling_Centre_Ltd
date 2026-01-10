export const FooterSection = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="img_col col-lg-7 col-md-12">
              <iframe
                title="Mattress Recycling Centre Leeds Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.344694221643!2d-1.555454523722126!3d53.81894343925818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x82b1ae2a0670775d%3A0x42e164fc4b1b2fe7!2sMattress%20Recycling%20Centre%20Leeds!5e0!3m2!1sen!2suk!4v1764709747570!5m2!1sen!2suk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="info_footer col-lg-5 col-md-12">
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  388 Meanwood Rd, Leeds LS72JF <br /> Mattress Recycling Centre
                  Leeds
                </li>
                <li>
                  <i className="fas fa-phone"></i> 07990239318
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a
                    href="mailto:accounts@mattressrecyclingcentreleeds.co.uk"
                    className="email-text"
                  >
                    Email: accounts@mattressrecyclingcentreleeds.co.uk
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p>
            Mattress Recycling Centre Leeds operates as part of ER Group.
            <br />
            Explore ER Group to see the full range of services we provide and
            find out how we can support you with additional recycling solutions.
          </p>
        </div>
      </footer>
    </>
  );
};
