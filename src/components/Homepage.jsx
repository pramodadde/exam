
import logo1 from "../image/collage_logo.png";
function Homepage() {
  return (
    <> 
      <body>
        <nav>

          <div className="text-center">
            <img src={logo1} className="rounded mx-auto d-block" alt="..." height="80px" width="100px" />
          </div>
          <div className="p-5 text-center h3" >
            Walchand College of Engineering
          </div>

        </nav>
        <div className="text-center p-3 p-3 mb-2 bg-secondary bg-gradient">

          <a href="/student_login.html">
          
            <button type="button" className="btn btn-secondary">student login</button></a>
          <button type="button" className="btn btn-primary m-3">college login</button>
          <button type="button" className="btn btn-success">Teacher login</button>
        </div>


      </body>
      </>
  );
}

export default Homepage;
