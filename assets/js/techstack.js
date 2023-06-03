AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language.</li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes.</li>",
  },
  {
    langImage:"assets/images/techstack-page/sklearn.png",
    langName:"Scikit-Learn",
    langDesc:"<li>Scikit-learn is a free software machine learning library for the Python programming language.</li>"
  },
  {
    langImage:"assets/images/techstack-page/tf.png",
    langName:"TensorFlow",
    langDesc:"<li>TensorFlow is a free and open-source software library for machine learning and artificial intelligence.</li>"
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git & Github",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
    langDesc:"<li>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.</li>"
  },
  {
    langImage:"assets/images/techstack-page/java.png",
    langName:"Java",
    langDesc:"<li>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</li>"
  },
  {
    langImage: "assets/images/techstack-page/mysql.png",
    langName: "MySql",
    langDesc: "<li>MySQL is an open-source relational database management system.</li>",
  },
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</li>",
  },
  {
    langImage: "assets/images/techstack-page/flask.png",
    langName: "Flask",
    langDesc: "<li>Flask is a micro web framework written in Python.</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
