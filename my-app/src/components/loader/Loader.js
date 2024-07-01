import React from "react";
import ReactDOM from "react-dom";

import LoaderImg from "../../assets/loader.gif";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img style={{ width: "50px" }} src={LoaderImg} alt="Loading..." />
      </div>
    </div>
  );
};

// export const Spinner = () => {
//     return (
//         <div classNAme="--center-all">
//             <img style={{ width: '50px' }}
//                 src={LoaderImg}
//                 alt='loading...' />

//         </div>
//     );
// };
export default Loader;
