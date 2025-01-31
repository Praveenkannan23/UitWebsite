import { useEffect, useState } from 'react';
import Swal from 'sweetalert';

const Navbar = () => {
  return(
  <header className="navbar" id="navbar">
     <div className="logo">
      <a href="#" className="logo2">
      <img src="./UIT-logo.ico" alt="United InfoTech " />
      </a>
      <a href="#">
        <img src="./images/UIT logo.png" alt="United InfoTech Logo" />
      </a>
      <div className="logo3">
        <a href="#">
          <img src="./images/UIT_25-years-logo.png" alt="United InfoTech  25 Years Logo" />
        </a>
      </div>
     </div>
     <nav>
      <ul>
        <li><a href="#service">Services</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#about-milestone">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#register">Register</a></li>
      </ul>
     </nav>
  </header>
  );
};
const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="video-container">
        <img src="./images/background-image.head.jpg" alt="" className='background-image' />
      <div className="content-overlay">
        <h1>Welcome to  United InfoTech</h1>
        <p>The Best Computer Education in Coimbatore Since 1999</p>
        <p>Innovate Today</p>
      </div>
      </div>
    </section>
  );
};
const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="container">
        <div className="title">
          <h1>United Infotech</h1>
        </div>
        <div className="cards">
          <div className="card">
            <i className="icon">&#x1F393;</i>
            <span>Trending Courses</span>
          </div>
          <div className="card">
            <i className="icon">&#x1F4D6;</i>
            <span>Books & Library</span>
          </div>
          <div className="card">
            <i className="icon">&#x1F464;</i>
            <span>Certified Teachers</span>
          </div>
          <div className="card">
            <i className="icon">&#x1F4C4;</i>
            <span>Certification</span>
          </div>
        </div>
      </div>
    </section>
  )
};
const ServicesSection = () =>{
  return(
    <section className="service" id='service'>
      <h2>Our Popular Courses</h2>
      <div className="service-box">
        <div className="service-item">
          <div className="logos">
        <img src="./images/Egblogo.png" alt="" className='Ebglogo' />
          <h3 className='Heading'>EGB FOUNDATION & UNITED INFOTECH</h3>
          <img src="UIT-logo.ico" alt="" className='Ebglogo' />
          </div>
          <video autoPlay muted loop id="background-video">
          <source src="./images/UIT.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
          <h3>FACULTY TRANSFORMATION PROGRAMME</h3>
          <p>Cutting-edge websites that engage your audience.</p>
        </div>
      </div>
    </section>
   )
};
const CoursesSection = () => {
  const [flippedIndex, setFlippedIndex] = useState(null); 
  const courses = [
    { id: 1, title: 'Tally Essential', img: './images/tally_icon.png', description: 'Focuses on the fundamental features of Tally for managing accounting, inventory, and tax processes.' },
    { id: 2, title: 'Tally Essential Professional', img: './images/tally_icon.png', description: 'Provides advanced features of Tally, including managing complex business transactions, reporting, and statutory compliance.' },
    { id: 3, title: 'Tally GST Simulation', img: './images/tally_icon.png', description: 'Specializes in simulating GST transactions and filing processes, helping users gain hands-on experience with GST compliance in Tally.' },
  ];

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index); 
  };
  return (
    <section id="course">
      <h1>Our Courses</h1>
      <div className="course-container">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={`bc-card ${flippedIndex === index ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}>
            <div className="face face1">
              <img src={course.img} alt={course.title} className="course-image" />
              <h3>{course.title}</h3>
            </div>
            <div className="face face2">
              <div className="content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
const CoursesSection1 = () => {
  const [flippedIndex, setFlippedIndex] = useState(null); 
  const courses = [
    { id: 1, title: 'C Program', img: './images/c-icon.png', description: 'C is a high-performance, procedural programming language known for its low-level memory access and portability across platforms.' },
    { id: 2, title: 'C++ Program', img: './images/C++-icon.png', description: 'C++ is an object-oriented programming language that extends C, offering features like classes, inheritance, and polymorphism for more complex and scalable software development.' },
    { id: 3, title: 'Java', img: './images/java-icon.png', description: 'Java is a platform-independent, object-oriented programming language designed for portability, scalability, and security in building cross-platform applications.' },
    { id: 4, title: 'Python', img: './images/python-icon.png', description: 'Python is a versatile, high-level programming language known for its readability, simplicity, and extensive libraries, making it ideal for rapid development across a wide range of applications.' },
    { id: 5, title: 'Numpy', img: './images/numpy.png', description: 'NumPy is a powerful Python library for numerical computing, providing support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on them efficiently.' },
    { id: 6, title: 'JavaScript', img: './images/JavaScript-logo.png', description: 'JavaScript is a dynamic, high-level scripting language primarily used for creating interactive and responsive web pages, enabling client-side functionality in modern web development.' },
    { id: 7, title: 'Bootstrap', img: './images/BootStarp-icon.png', description: 'Bootstrap is a popular, open-source front-end framework that simplifies web development by providing pre-built components, responsive grids, and design templates using HTML, CSS, and JavaScript.' },
    { id: 8, title: 'MySQL', img: './images/Mysql-icon.png', description: 'MySQL is an open-source relational database management system known for its reliability, scalability, and widespread use in web applications for structured data storage.' },
    { id: 9, title: 'React JS', img: './images/react-icon.png', description: 'React JS is a JavaScript library for building dynamic and interactive user interfaces, primarily for single-page applications, using a component-based architecture.' },
    { id: 10, title: 'MongoDB', img: './images/mongoDb-icon.png', description: ' MongoDB is a NoSQL, document-oriented database designed for flexibility and scalability, allowing for the storage of unstructured or semi-structured data in JSON-like documents.' },
    { id: 11, title: 'Django', img: './images/Django-icon.png', description: 'Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design by offering built-in tools for database management, security, and routing' },
    { id: 12, title: 'Node.js', img: './images/node-images.png', description: 'Node.js is a server-side JavaScript runtime that enables the development of scalable network applications by using non-blocking, event-driven architecture.' },
  ];
  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index); 
  };
  return (
    <section id="course">
      <h1>Web Development</h1>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={`cd-card ${flippedIndex === index ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}>
            <div className="face face1">
              <img src={course.img} alt={course.title} className="course-image" />
              <h3>{course.title}</h3>
            </div>
            <div className="face face2">
              <div className="content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
const TeamSection = () => {
  return (
    <section id="gallery">
      <h2>Our Team</h2>
      <div className="image-container">
        <img src="./images/image1.jpg" alt="Team Image 1" className="gallery-image" />
        <img src="./images/image2.jpg" alt="Team Image 2" className="gallery-image" />
        <img src="./images/image3.jpg" alt="Team Image 3" className="gallery-image" />
        <img src="./images/image4.jpg" alt="Team Image 4" className="gallery-image" />
        <img src="./images/image5.jpg" alt="Team Image 5" className="gallery-image" />
        <img src="./images/image6.jpg" alt="Team Image 6" className="gallery-image" />
        <img src="./images/image1.jpg" alt="Team Image 1" className="gallery-image" />
        <img src="./images/image2.jpg" alt="Team Image 2" className="gallery-image" />
        <img src="./images/image3.jpg" alt="Team Image 3" className="gallery-image" />
        <img src="./images/image4.jpg" alt="Team Image 4" className="gallery-image" />
        <img src="./images/image5.jpg" alt="Team Image 5" className="gallery-image" />
        <img src="./images/image6.jpg" alt="Team Image 6" className="gallery-image" />
      </div>
    </section>
  );
};
const FeaturedSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    './images/featured-image1.jpg',
    './images/featured-image2.jpg',
    './images/featured-image3.jpg',
    './images/featured-image4.jpg',
    './images/featured-image5.jpg',
    './images/featured-image6.jpg',
    './images/featured-image7.jpg',
    './images/featured-image8.jpg',
    './images/featured-image9.jpg',
    './images/featured-image10.jpg',
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length); // Show two images at a time
    }, 3000); 
    return () => clearInterval(intervalId); 
  }, [images.length]);
  return (
    <section id="slider">
      <h2>Featured</h2>
      <div className="slider-track">
        <div className="slide">
          <img
            src={images[currentIndex]}
            alt={`Featured Image ${currentIndex + 1}`}
            className="featured-image"
          />
        </div>
        <div className="slide">
          <img
            src={images[(currentIndex + 1) % images.length]}  
            alt={`Featured Image ${currentIndex + 2}`}
            className="featured-image"
          />
        </div>
      </div>
    </section>
  );
};
const AboutAndMilestoneSection = () => {
  const milestones = [
    { year: '1999',img:'./images/UIT-td.png', title: 'United InfoTech', color: '#d32f2f' },
    { year: '2009',img:'./images/UIT_LOGO.png', title: 'United Institute of Technology', color: '#673ab7' },
    { year: '2018',img:'./images/public-school.png', title: 'The United Public School', color: '#fbc02d' },
    { year: '2019',img:'./images/pharmacy-logo.png', title: 'United College of Pharmacy', color: '#e64a19' },
    { year: '2019',img:'./images/medical-logo.png', title: 'United College of Medical Sciences', color: '#26c6da' },
    { year: '2020',img:'./images/medical-logo.png', title: 'United College of Nursing', color: '#8bc34a' },
    { year: '2020',img:'./images/arts-science.png', title: 'United College of Arts and Science', color: '#d32f2f' },
    { year: '2021',img:'./images/physiotherapy-logo.png', title: 'United College of Physiotherapy', color: '#673ab7' },
    { year: '2024',img:'./images/Uit-g-s.jpg', title: 'United Global solution', color: '#673ab7' },
  ];
  return (
    <section id="about-milestone" className="about-milestone">
      {/* About Section */}
      <div className="about-content">
        <h2>About United InfoTech</h2>
        <p className="about-text">
          United InfoTech offers a wide range of courses designed to equip professionals with the latest industry-relevant skills in technologies like Tally, Python, Java, React JS, Django, and more. Our training programs focus on practical, real-world applications, providing participants with hands-on experience through live projects, simulations, and interactive sessions.
          <br /><br />
          Led by industry experts, our training and development programs are designed to provide in-depth knowledge and mentoring, ensuring that participants are prepared to excel in their careers and stay competitive in the ever-evolving tech landscape.
        </p>
      </div>

      {/* Milestone Timeline Section */}
      <div className="timeline-container">
        <h2 className="timeline-title">Milestone</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item" style={{ borderColor: milestone.color }}>
              <div className="timeline-content">
              <img src={milestone.img} alt={milestone.title} /> 
                <h3>{milestone.year}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const FooterSection =() =>{
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "793a96a2-3d50-49dc-93dc-05716de69409");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Sucess!",
        text: "Registration Successfully Completed!",
        icon: "success"
      });
    }
}

  return (
    <footer>
      <div className="footer-container" id="contact">
        <div className="footer-logo">
          <img src="./UIT-logo.ico" alt="United InfoTech Logo" />
          <h3>UNITED INFOTECH</h3>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>#1274, 3rd Floor, RSB Tower, Mettupalayam Road,<br />Coimbatore – 641043.</p>
          <p>📞 +91 -0422 – 2442874 , 4384874</p>
          <p>✉ unitedinfotech@gmail.com</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="navbar">Home</a></li>
            <li><a href="#course">Courses</a></li>
            <li><a href="#slider">Features</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>
        <div className="footer-registration" id='register'>
          <h4>Register</h4>
          <form   onSubmit={onSubmit}>
            <input type="text" placeholder="Your Name" name='name' required/>
            <input type="email" placeholder="Your Email" name='email'  required/>
            <input type="number" name="Mobile number" placeholder='Mobile number' />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 United InfoTech. All rights reserved.</p>
      </div>
    </footer>
  );
};



export const Website = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <InfoSection />
    < ServicesSection />
    <CoursesSection />
    <CoursesSection1 />
    <TeamSection />
    <FeaturedSection />
    <AboutAndMilestoneSection />
    <FooterSection />
    </>
  );
};
export default  Website;
