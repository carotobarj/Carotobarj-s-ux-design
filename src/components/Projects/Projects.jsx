import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="container projects-container">
      <h1 className="projects-txt">projects</h1>
      <div className="projects projects-1">
        <div className="projects-img"></div>
        <div className="projects-info">
          <h1 className="name">Api-Foods</h1>
          <h3 className="position">Single Page Application</h3>
          <h4 className="about">
          Was developed for my Individual Project on the Henry Fullstack Developer bootcamp. The data is extracted from the Spoonacular API.
          </h4>
          <a href="https://github.com/carotobarj/Api-Foods" target={"blank"} className="contact-projects">
            <span>See More...</span>
          </a>
        </div>
      </div>

      <div className="projects projects-2">
        <div className="projects-img"></div>
        <div className="projects-info">
          <h1 className="name">E-social</h1>
          <h3 className="position">Web Page</h3>
          <h4 className="about">
          webpage created to build a community where the users can sell and buy used and unique books on the platform exchange.
          </h4>
          <a href="https://e-social-book.netlify.app/" target={"blank"} className="contact-projects">
            <span>See More...</span>
          </a>
        </div>
      </div>

      <div className="projects projects-3">
        <div className="projects-img"></div>
        <div className="projects-info">
          <h1 className="name">Comming Soon...</h1>
          <h3 className="position"></h3>
          <h4 className="about">
         Comming soon new projects!
                   </h4>
          <a href="#contact" className="contact-projects">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
