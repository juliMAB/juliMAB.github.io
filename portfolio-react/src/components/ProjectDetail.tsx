import { Link } from 'react-router-dom';

interface ProjectDetailProps {
  project: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const getProjectData = (projectName: string) => {
    switch (projectName) {
      case 'thuk-thay':
        return {
          title: 'Thuk Thay',
          subtitle: 'Mobile Card Game',
          description: 'A digital adaptation of the fast-paced Laotian shedding card game. As a freelance project, I handled all aspects from programming to UI/UX design, creating an engaging multiplayer card game experience.',
          image: '/img/thuk-thay-main.PNG',
          features: [
            'Multiplayer card game mechanics',
            'Custom UI/UX design',
            'Real-time gameplay',
            'Cross-platform compatibility'
          ],
          technologies: ['Unity', 'C#', 'Photon Network', 'Mobile UI']
        };
      case 'world-traveler':
        return {
          title: 'World Traveler',
          subtitle: 'Hypercasual Mobile Game',
          description: 'A simple hypercasual voxel art game for Android. Players control a plane that flies forward automatically, tapping the screen to change directions. Features include shop system, character skins, leaderboard, and achievements.',
          image: '/img/world-traveler-main.PNG',
          features: [
            'Hypercasual gameplay',
            'Voxel art style',
            'Shop system',
            'Leaderboard and achievements'
          ],
          technologies: ['Unity', 'C#', 'Android', 'Google Play Services']
        };
      case 'stem-mies':
        return {
          title: 'stem.mies',
          subtitle: 'Rhythm Game',
          description: 'A rhythm game inspired by Geometry Dash but with a more accessible approach and rich visual accompaniment similar to Mario Maker. Features 2D visual style designed for expansion and future iPhone release.',
          image: '/img/stemmiesNewLogo.png',
          features: [
            'Rhythm-based gameplay',
            'Level editor (like Mario Maker)',
            '2D visual style',
            'Accessible design'
          ],
          technologies: ['Unity', 'C#', 'Mobile', 'Audio Systems']
        };
      default:
        return {
          title: 'Project Not Found',
          subtitle: '',
          description: '',
          image: '',
          features: [],
          technologies: []
        };
    }
  };

  const projectData = getProjectData(project);

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          {/* Header with back button */}
          <div className="centered container default">
            <div className="wrapper">
              <div className="inner">
                <Link to="/" className="heading-gradient" style={{ textDecoration: 'none' }}>
                  ← Back to Portfolio
                </Link>
                <h1 className="heading-primary">{projectData.title}</h1>
                <p className="label-small">{projectData.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="centered container default">
            <div className="wrapper">
              <div className="inner">
                <div className="project-thumbnail image">
                  <span className="frame">
                    <img src={projectData.image} alt={`${projectData.title} Screenshot`} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="centered container default">
            <div className="wrapper">
              <div className="inner">
                <h2 className="heading-gradient">About the Project</h2>
                <p className="text-description">{projectData.description}</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="project-section container columns">
            <div className="wrapper">
              <div className="inner">
                <div>
                  <h3 className="heading-gradient">Key Features</h3>
                  <ul className="text-description">
                    {projectData.features.map((feature, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem' }}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="heading-gradient">Technologies Used</h3>
                  <ul className="text-description">
                    {projectData.technologies.map((tech, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem' }}>• {tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Back to portfolio */}
          <div className="centered container default">
            <div className="wrapper">
              <div className="inner">
                <ul className="primary buttons">
                  <li>
                    <Link to="/" className="button" role="button">
                      <span className="label">Back to Portfolio</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;