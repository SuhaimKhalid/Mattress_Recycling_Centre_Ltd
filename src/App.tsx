import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { TopHeader } from "./Components/TopHeader";
import { FooterSection } from "./Components/FooterSection";

import cover from "./assets/Images/1.jpg";

import Pocket_Springs from "./assets/Images/2.jpg";

import Metal_Springs from "./assets/Images/3.jpg";

import Shoddy_Pads from "./assets/Images/5.png";

import Polyester from "./assets/Images/s2.jpg";

import Foam from "./assets/Images/s2.jpg";

const App: React.FC = () => {
  const sliderImages = [
    {
      src: cover,
      alt: "Cover",
    },
    {
      src: Pocket_Springs,
      alt: "Pocket Springs",
    },
    {
      src: Metal_Springs,
      alt: "Metal Springs",
    },
    {
      src: Shoddy_Pads,
      alt: "Shoddy Pads",
    },
    {
      src: Polyester,
      alt: "Polyester",
    },
    {
      src: Foam,
      alt: "Foam",
    },
  ];

  return (
    <>
      <TopHeader />
      <main>
        <section className="mission_section text-center py-4">
          <div className="container">
            <p className="mission_text">
              With the mission of diverting as many mattresses as possible from
              ending up un-recycled in landfills or general waste sites.
              <b> Mattress Recycling Centre Leeds Ltd </b>
              offers the public and businesses the opportunity to recycle
              uncontaminated mattresses. This process allows all materials and
              components to be recovered, reprocessed, and returned to
              manufacturers for use in producing new, sustainable products.
            </p>
          </div>
        </section>

        <section className="image_section">
          <div className="container">
            <div className="row">
              {sliderImages.map((img, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-md-6 col-sm-6 col-6 Images_col"
                >
                  <img src={img.src} alt={img.alt} />
                  <p className="image_txt">{img.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="second_section">
          <div className="container">
            <ul>
              <li>
                We also provide a disposal option for wet, dirty, and
                contaminated mattresses. Any recoverable materials, such as
                metal, are removed, and the remaining waste is sent for
                incineration to minimise landfill use.
              </li>
              <li>
                From a single mattress drop-off to a full lorry load, we welcome
                all your recycling needs with care.
              </li>
              <li>
                For information, bookings, or advice, please feel free to
                contact our team.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default App;
