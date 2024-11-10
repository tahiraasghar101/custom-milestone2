import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="heading">
        <h1>Welcome to My Portfolio</h1>
      </div>

      <div className="container">
        <h2 className="main">Tahira Asghar</h2>
        <p className="para">
          I'm an aspiring front-end developer focused on building responsive and user-friendly web experiences.
        </p>
      </div>

      <div className="link">
        <ul>
          <li>
            <button className="btn">
              <Link href="/about">About</Link>
            </button>
          </li>
          <li>
            <button className="btn">
              <Link href="/contact">Contact</Link>
            </button>
          </li>
        </ul>
      </div>

      <div className="image-container">
        <img src="/hello.jpeg" alt="profile picture" width="250" height="250" className="profile-image" />
      </div>

      <div>
        <button className="view-work-button">
          <Link href="/component">View My Work</Link>
        </button>
      </div>
    </>
  );
}
