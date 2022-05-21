import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";

const blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);

  return (
    // <div className={styles.con}>
    //   <div>
    //     <Link href="/blogposts/learn-js">
    //       <h1>Post 1: Learn Javascript</h1>
    //     </Link>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    //       dolorum eius quos repellendus! Distinctio accusamus vel quis culpa hic
    //       a corporis id, ducimus nihil voluptate? Animi ipsa voluptatum
    //       praesentium repudiandae, mollitia illum ducimus porro dolore, minus
    //       sit veniam eos sequi! Iure natus minus quidem culpa architecto facilis
    //       nemo laboriosam qui?
    //     </p>
    //   </div>
    //   <div>
    //     <Link href="/blogposts/learn-ts">
    //       <h1>Post 2: Learn Typescript</h1>
    //     </Link>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    //       dolorum eius quos repellendus! Distinctio accusamus vel quis culpa hic
    //       a corporis id, ducimus nihil voluptate? Animi ipsa voluptatum
    //       praesentium repudiandae, mollitia illum ducimus porro dolore, minus
    //       sit veniam eos sequi! Iure natus minus quidem culpa architecto facilis
    //       nemo laboriosam qui?
    //     </p>
    //   </div>
    //   <div>
    //     <Link href="/blogposts/learn-react">
    //       <h1>Post 3: Learn React</h1>
    //     </Link>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    //       dolorum eius quos repellendus! Distinctio accusamus vel quis culpa hic
    //       a corporis id, ducimus nihil voluptate? Animi ipsa voluptatum
    //       praesentium repudiandae, mollitia illum ducimus porro dolore, minus
    //       sit veniam eos sequi! Iure natus minus quidem culpa architecto facilis
    //       nemo laboriosam qui?
    //     </p>
    //   </div>
    //   <div>
    //     <Link href="/blogposts/learn-c++">
    //       <h1>Post 4: Learn C++</h1>
    //     </Link>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    //       dolorum eius quos repellendus! Distinctio accusamus vel quis culpa hic
    //       a corporis id, ducimus nihil voluptate? Animi ipsa voluptatum
    //       praesentium repudiandae, mollitia illum ducimus porro dolore, minus
    //       sit veniam eos sequi! Iure natus minus quidem culpa architecto facilis
    //       nemo laboriosam qui?
    //     </p>
    //   </div>
    // </div>
    <>
      {blogs.map((blogItem) => {
        return (
          <div className={styles.con}>
            <Link href={`/blogposts/${blogItem.slug}`}>
              <a>
                <h1>{blogItem.title}</h1>
              </a>
            </Link>
            <p>{blogItem.content.substr(0, 200)}</p>
          </div>
        );
      })}
    </>
  );
};

export default blog;
