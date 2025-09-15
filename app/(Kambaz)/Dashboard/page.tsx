import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.png" width={200} height={150} alt="React JS course"/>
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1357" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.png" width={200} height={150} alt="Database management system"/>
            <div>
              <h5> CS1357 Database Management System </h5>
              <p className="wd-dashboard-course-title">
                Database management system
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2359" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.png" width={200} height={150} alt="Algorithms"/>
            <div>
              <h5> CS2359 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Algorithms
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3773" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.png" width={200} height={150} alt="Network security"/>
            <div>
              <h5> CS3773 Network Security </h5>
              <p className="wd-dashboard-course-title">
                Network security
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4815" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.png" width={200} height={150} alt="Data mining"/>
            <div>
              <h5> CS4815 Data mining </h5>
              <p className="wd-dashboard-course-title">
                Data mining
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4901" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.png" width={200} height={150} alt="Deep Learning"/>
            <div>
              <h5> CS4901 Deep Learning </h5>
              <p className="wd-dashboard-course-title">
                Deep Learning
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/6550" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.png" width={200} height={150} alt="Machine Learning"/>
            <div>
              <h5> CS6550 Machine Learning </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}

