import { useState, useEffect } from "react";
import React from "react";
import NameForm from "./NameForm";

export function Openday(props) {
  const [name, setName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseSubmitted, setCourseSubmitted] = useState(false);
  const [livingResponse, setLivingResponse] = useState("");
  const [livingSubmitted, setLivingSubmitted] = useState(false);
  const [finalResponse, setFinalResponse] = useState("");
  const [finalSubmitted, setFinalSubmitted] = useState(false);

  const handleCampFacilClick = evt => {
    setFinalResponse("campfacil");
    setFinalSubmitted(true);
  };

  const handleSupportClick = evt => {
    setFinalResponse("support");
    setFinalSubmitted(true);
  };

  const handleResourceClick = evt => {
    setFinalResponse("resource");
    setFinalSubmitted(true);
  };

  const handleInPboClick = evt => {
    setLivingResponse("pbo");
    setLivingSubmitted(true);
  };

  const handleOutPbo = evt => {
    setLivingResponse("nopbo");
    setLivingSubmitted(true);
  };

  const handleAccClick = evt => {
    setCourseName("BSc (Hons) Accounting and Finance");
    setCourseSubmitted(true);
  };

  const handleCompClick = evt => {
    setCourseName("BSc (Hons) Computing and Information Systems");
    setCourseSubmitted(true);
  };

  const handlePerfClick = evt => {
    setCourseName("BA (Hons) Performing Arts");
    setCourseSubmitted(true);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setNameSubmitted(true);
  };

  const handleNameChange = evt => {
    evt.preventDefault();
    setName(evt.target.value);
  };

  useEffect(() => {
    console.log("name: ", name);
  }, [name]);

  let courseDetails;
  let liveDetails;
  let finalDetails;

  if (finalResponse === "campfacil") {
    finalDetails = (
      <div className="container">
        <h2>Campus Facilities</h2>
        <p>
          We have a wide range of on-site facilities to supplement your
          experience whilst study with us, these include:
        </p>
        <h5>Library</h5>
        <p>
          On-site library which provides you with everything you need to help
          you with your studies. Services include: an extensive range of books,
          e-books, DVDs, newspapers and journals, a PC Centre, Group Study Area
          with laptops, PCs and plasma screens, Silent Study Area, Stationery
          Shop and free Wi-Fi. You also have access to the Anglia Ruskin
          University library located in Oundle Road as well as their extensive
          online resources, Harvard Referencing and Research skills guides.{" "}
        </p>
        <h5>Nursery</h5>
        <p>
          On-site nursery offers high quality childcare in Peterborough for
          babies and young children aged 3 months to 5 years old. The nursery
          team consists of highly qualified staff who are here to care for your
          child/children whilst you study.{" "}
        </p>
        <h5>Parcs Restaurant</h5>
        <p>
          Solely ran by staff and students within the hospitality and catering
          department at the on-site College, offering a delicious range of food
          at fantastic value for money, you’re also giving our students the
          skills and experience they need to successfully complete their course
          and go on to achieve great things within the hospitality and catering
          industry.
        </p>
        <h5>Cycle Hire</h5>
        <p>
          Use one of our two bikes from our hire scheme which is designed to
          allow you the convenience of cycling without the expense. Hire the
          bike for a set period of time, along with the use of a helmet, lights
          and secure lock. The rental process is simple, visit our Student
          Support Centre to pay and collect. You'll need to check all your
          contact information is correct and decide how long you want to rent it
          for. When collecting your bike you'll need your student ID Card,
          emergency contact number and a security deposit of £30 which will be
          fully refunded when you return your bike.{" "}
        </p>
        <h5>Student Parking</h5>
        <p>
          Students can apply for a permit to park on campus, if their term time
          address is outside of the PE1 postcode. Permits are free however
          please note that there are limited spaces and it is on a first come -
          first served basis.
        </p>
        <h5>Lifestyle Fitness</h5>
        <p>
          Lifestyle Fitness can offer you a full range of facilities to help you
          achieve your goals. Benefit from a low monthly membership of only
          £15.99* and we promise that this will be the price you pay in the
          future. This low cost includes use of the gym plus a choice of 20+
          timetabled classes. Facilities include; Technogym strength and fitness
          equipment, Functional training zone, Vibration plates, Air-conditioned
          studio, Dedicated spin studio, dance studios, 3G floodlit pitches and
          Sports Hall which can accommodate badminton, basketball, dance,
          futsall, football, netball, volleyball and children’s parties.
        </p>
        <h5>Revive Hair & Beauty</h5>
        <p>
          Offering an excellent range of hair and beauty treatments at very
          competitive prices. Staff, students and members of the public can
          relax in style in one of our many on-site salons which use the latest
          industry standard equipment.{" "}
        </p>
        <h5>Prayer and Contemplation Room</h5>
        <p>
          Regardless of faith or belief, we have a Prayer & Contemplation room
          on-site for students to use for prayers, meditation or simply to
          reflect.
        </p>
        <h2>Thanks for Visiting the UCP Virtual Open Day, {name}!</h2>
      </div>
    );
  } else if (finalResponse === "support") {
    finalDetails = (
      <div className="container">
        <h2>Student Support</h2>
        <p>
          UCP has its very own Student Support Centre where our team ensure that
          all student needs are catered for. We are here to support you within
          your academic life with your educational, health and wellbeing needs.
          Our building has been carefully designed with the needs of disabled
          students in mind and together with Anglia Ruskin University we have a
          team of experienced advisers to help students obtain the necessary
          support they need. Any potential students who are concerned about
          their particular situation are welcome to contact us for a
          confidential conversation.
        </p>
        <p>
          Any degree demonstrates your ability to think and work independently
          and you will develop important skills in communication, numeracy and
          information technology. These are the qualities that many employers
          look for when recruiting.
        </p>
        <p>
          Whatever your reason for going on to Higher Education, we are sure to
          have a course that meets your needs. Maybe you want a university
          education qualification to build a new career, or to move to that next
          step on an existing career path? Studying for a formal higher
          education qualification can increase your employability, your lifetime
          earnings and could help you find a fulfilling job.
        </p>
        <p>
          Throughout your time at UCP you’ll also have a personal tutor who will
          listen to you, encourage you and support you, as well as helping you
          maximise your academic opportunities.
        </p>
        <p>
          <a href="https://www.ucp.ac.uk/supporting-you/">
            More information on Student Support can be found here
          </a>
        </p>
        <h2>Thanks for Visiting the UCP Virtual Open Day, {name}!</h2>
      </div>
    );
  } else if (finalResponse === "resource") {
    finalDetails = (
      <div className="container-fluid">
        <h2>Learning Resources</h2>
        <div className="card-deck mb-4">
          <div className="card">
            <div className="card-header">e-Vision</div>
            <div className="card-body">
              Is your online information gateway for your studies. Which allows
              you to access and change your personal details as well as viewing
              your modules, assessment deadlines and transcript of your results.
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Virtual Learning Environment (VLE)
            </div>
            <div className="card-body">
              UCP also offers an extensive Virtual Learning Environment (VLE)
              and access to Anglia Ruskin University libraries via online
              resources and our Guild House campus on Oundle Road, Peterborough.
              If you still are a little worried about the skills needed for
              academic study rest assured as we have a team of lecturers
              delivering a matrix of study skills which include Harvard
              referencing, essay planning, seminar confidence boosting sessions
              and help with maths for those considering a degree in computing or
              business. Just remember we are here to help!
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              ARU Library – Oundle Road Peterborough
            </div>
            <div className="card-body">
              Access to online resources, books, journals, articles, newspapers,
              past exam papers, special collections, e-books, box of broadcasts
              and much more.
            </div>
          </div>
        </div>

        <div className="card-deck mb-4">
          <div className="card">
            <div className="card-header">Library+</div>
            <div className="card-body">
              The Library+ at Peterborough Regional College is an excellent
              learning and resource centre and is available for you to use and
              to help with your studies. Facilities include a large drop-in PC
              Centre providing access to the Internet and Microsoft Office as
              well as many other software packages; a wide range of books for
              reference and loan; newspapers, journals and e-journals; group and
              silent study areas; facilities to watch DVDs; photocopying
              facilities; and a selection of stationery for sale. The team are
              always pleased to help you use the various services available and
              can offer useful advice to help you find the resources you need.
            </div>
          </div>
          <div className="card">
            <div className="card-header">Get IT Sorted</div>
            <div className="card-body">
              Getting access to all of the things that you need to begin your
              studies can be daunting, which is why we run drop-in sessions to
              help you Get IT Sorted. Sessions run on weekdays during Welcome
              Week and the first week of teaching. There's no need to book, just
              bring along your devices (laptop, phone, tablet) and we'll show
              you how to get connected. We promote these events throughout the
              year on social media and through posters so keep your eye out for
              the upcoming dates.
            </div>
          </div>
          <div className="card">
            <div className="card-header">Student Printing</div>
            <div className="card-body">
              Our new print service provides greater flexibility in when and
              where you print. Print to a single print queue and then release
              your print from any of our student printers within our building in
              the open access areas. Nothing will be printed until you are ready
              to collect – then simply tap into any student printer using your
              ID Card or log in directly on the printer and select your print
              requests on the screen.
            </div>
          </div>
        </div>

        <div className="card-deck">
          <div className="card">
            <div className="card-header">Student Email</div>
            <div className="card-body">
              We use Microsoft Outlook Web App in order for you to be able to
              send and receive emails. Emails can be sent internally to any
              member of staff, or externally as required. You will be able to
              access your student email from any PC with an internet connection.
              It will give you email, calendar, contact and task management
              features. You will be able to access your email from an internet
              browser by navigating to My.Anglia and clicking on the Email Login
              link. We recommend that you access your student email at least
              twice a week during term time to check for important information.
            </div>
          </div>
          <div className="card">
            <div className="card-header">Turnitin UK</div>
            <div className="card-body">
              A text-matching software, is widely used by a large number of
              Universities within the UK and matches text of submitted work to
              that in a large database of online sources. This software
              highlights plagiarism by comparing the students’ submitted work
              for text matches to outside sources such as the current and
              archived internet, journal articles and previously submitted
              student papers. This is not software to ‘catch-out’ students, but
              to help enhance and develop your good academic practice.
            </div>
          </div>
        </div>
        <h2>Thanks for Visiting the UCP Virtual Open Day, {name}!</h2>
      </div>
    );
  }

  if (courseName === "BSc (Hons) Accounting and Finance") {
    courseDetails = (
      <div className="container">
        <br></br>
        <h2>Accounting and Finance? Sweet!</h2>
        <p>
          Knowledge and understanding in this course is designed around the
          graduate being able to obtain exemptions from the Association of
          Chartered Certified Accountants (ACCA) upon its completion. These
          exemptions are subject to approval. It also includes a wide range of
          skills identified by both employers and ACCA as being important for
          accountancy and finance graduates in the 21st century.
        </p>

        <p>
          Ethics and sustainable business are covered, as is the ability to
          communicate effectively both in writing and orally, to work in teams
          and to be able to think critically and solve problems.
        </p>

        <p>
          The teaching and learning includes a diverse and dynamic range of
          strategies including practical classes and workshops.
        </p>
        <a href="https://www.ucp.ac.uk/a-z-courses/undergraduate-courses/bsc-hons-accounting-and-finance-20/">
          Find out more here!
        </a>
      </div>
    );
  } else if (courseName === "BSc (Hons) Computing and Information Systems") {
    courseDetails = (
      <div className="container">
        <br></br>
        <h2>Computing and Information Systems? Awesome!</h2>
        <p>
          What sets this course apart is its flexibility - with 16 optional
          modules to choose from in years 2 and 3. It is ideal if you are
          looking for a wide range of computing skills: from web design and
          development with PHP and JavaScript, computer programming in languages
          such as C# and Python, mobile app coding in Java, and embedded systems
          with C++. You will develop skills in cyber security, database
          management and CISCO network systems support, and have the option to
          study specialised subjects such as AI with Machine Learning and Big
          Data. We will help you develop a systematic, creative and flexible
          approach to problem solving that computing professionals rely on.
        </p>

        <p>
          The course is designed with modules to promote your professional
          growth and personal development. You will be encouraged to acquire key
          practical skills to help you build a broad base and deep knowledge of
          computing. This will allow you to make informed choices when
          developing specialist in-depth knowledge in your preferred areas.
        </p>

        <p>
          <a href="https://www.ucp.ac.uk/a-z-courses/undergraduate-courses/bsc-hons-computing-and-information-systems-20/">
            Find out more here!
          </a>
        </p>
        <p>
          <a href="http://localhost:5500/index.html">Or here!</a>
        </p>
      </div>
    );
  } else if (courseName === "BA (Hons) Performing Arts") {
    courseDetails = (
      <div className="container">
        <br></br>
        <h2>Performing Arts? Great!</h2>
        <p>
          This Performing Arts degree is a practice-based course, equipping you
          with the interdisciplinary skill set required by the contemporary
          performer. Through core ‘Performance Skills’ and ‘Academic,
          Professional, Research and Employability Skills’ pathways, you will
          develop the foundations necessary to the autonomous, public-facing,
          and industry-engaged assessments later in the course.
        </p>

        <p>
          You will also be introduced to a range of performance-making
          disciplines, including:
        </p>

        <ul className="text-left">
          <li>New Media Performance and Production</li>
          <li>Directing and Devising</li>
          <li>Adapting Shakespeare</li>
          <li>Writing for Performance</li>
          <li>Performance Practice-as-Research</li>
          <li>Applied Performance Project</li>
        </ul>
      </div>
    );
  }

  if (livingResponse === "pbo") {
    liveDetails = (
      <div className="container">
        <br />
        <h2>Living in Peterborough?</h2>
        <p>
          If you're moving to Peterborough, you may be interested in looking at
          student accomodation. More information about UCP's available student
          accomodation can be found:{" "}
          <a href="https://www.ucp.ac.uk/student-accommodation/">here</a>
        </p>
        <p>
          If you aren't moving to Peterborough just to study the degree, you
          probably know what Peterborough has to offer. Instead, you're probably
          more interested in what UCP has to offer!
        </p>
        <p>
          You can find out all about our timetabling, how we can support you and
          employment opportunities right
          <a href="https://www.ucp.ac.uk/welcome-to-ucp/"> here</a>
        </p>
      </div>
    );
  } else if (livingResponse === "nopbo") {
    liveDetails = (
      <div className="container">
        <br />
        <h2>Staying Somewhere Else?</h2>
        <p>
          That's cool too! The city of Peterborough has many things to offer if
          you've got any free time during your course. From the 900 year old
          cathedral, to some more rural sites like Burghley House and Sacrewell
          Farm and County Centre, there's something for everyone. Even you, {name}! Not
          forgetting, of course, Queensgate Shopping and the nightlife comprised
          of 3 theatres and a wide range of bars, restaurants and nightclubs.
        </p>
        <p>
          <a href="https://www.visitpeterborough.com/things-to-do">
            See more here
          </a>
        </p>
        <p>
          You may also be interested in what the UCP campus has to offer you,
          seeing as you'll be spending a lot of your time there! UCP has a
          library, nursery, a restaurant and can offer student parking, cycle
          hire, an on-site prayer and contemplation room, discount gym
          membership and and on-site hair and beauty salons.
        </p>
        <p>
          <a href="https://www.ucp.ac.uk/on-site-facilities/">See more here</a>
        </p>
      </div>
    );
  }

  return (
    <>
      <NameForm
        value={name}
        onSubmit={handleSubmit}
        onChange={handleNameChange}
      />
      {nameSubmitted ? (
        <div className="container">
          <br></br>
          <h2>Hello {name}</h2>
          <p>
            Thanks for checking out UCP, {name}. It means a lot! Now, what
            course are you interested in?
          </p>
          <button
            onClick={handleAccClick}
            type="button"
            className="btn btn-primary btn-lg btn-block"
          >
            BSc (Hons) Accounting and Finance
          </button>
          <button
            onClick={handleCompClick}
            type="button"
            className="btn btn-primary btn-lg btn-block"
          >
            BSc (Hons) Computing and Information Systems
          </button>

          <button
            onClick={handlePerfClick}
            type="button"
            className="btn btn-primary btn-lg btn-block"
          >
            BA (Hons) Performing Arts
          </button>
        </div>
      ) : null}

      {courseDetails}

      {courseSubmitted ? (
        <>
          <br />
          <div className="container">
            <h2>
              Right {name}, will you be living in Peterborough while studying with us?
            </h2>
            <button
              className="btn btn-primary btn-lg btn-block"
              onClick={handleInPboClick}
            >
              Yes, I Will!
            </button>
            <button
              className="btn btn-primary btn-lg btn-block"
              onClick={handleOutPbo}
            >
              Nope, I'm Coming From Somewhere Else!
            </button>
          </div>
        </>
      ) : null}

      {liveDetails}

      {livingSubmitted ? (
        <>
          <br />
          <div className="container">
            <h2>We hope you feel a bit more knowledgeable about UCP!</h2>
            <p>
              We thought you might be interested in some of the information
              below. Click around to see!
            </p>
            <button
              className="btn btn-primary btn-block btn-lg"
              onClick={handleCampFacilClick}
            >
              Campus Facilities
            </button>
            <button
              className="btn btn-primary btn-block btn-lg"
              onClick={handleSupportClick}
            >
              UCP Support
            </button>
            <button
              className="btn btn-primary btn-block btn-lg"
              onClick={handleResourceClick}
            >
              Learning Resources
            </button>
          </div>
        </>
      ) : null}

      {finalDetails}

      <br />
    </>
  );
}

export default Openday;
