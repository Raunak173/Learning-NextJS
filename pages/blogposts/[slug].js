import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/slug.module.css";

const slug = () => {
  const router = useRouter();
  console.log(router.query);
  const { slug } = router.query;
  return (
    <div className={styles.con}>
      <h1 className={styles.heading}>Title of the page: {slug}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
        voluptatibus mollitia, officiis vitae soluta magnam porro cumque earum
        possimus natus pariatur quos commodi maxime placeat, maiores architecto
        tempora consectetur. Voluptatum nulla rem vero, officia libero, porro
        temporibus veniam accusantium molestias, aliquam dolorem est ipsa enim
        atque fugiat at laudantium quaerat neque sequi reprehenderit ab magnam
        ipsam? Dignissimos nostrum sunt, rem quibusdam temporibus doloribus! Qui
        aliquid veritatis dicta sunt eligendi iusto aut et pariatur facere,
        tempora reprehenderit earum sequi, expedita illum, blanditiis error!
        Architecto illum repudiandae assumenda aperiam ipsa temporibus numquam
        corrupti officiis, suscipit unde quisquam in fugiat laboriosam
        necessitatibus error?
      </p>
    </div>
  );
};

export default slug;
