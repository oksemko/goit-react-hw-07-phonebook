// import { ColorRing } from 'react-loader-spinner';

// import styles from './Loader.module.css';


// export const Loader = () => {
//   <div className={styles.ColorRing}>
//     <ColorRing
//       height="200"
//       width="200"
//       radius="48"
//       arialabel="blocks-loading"
//     />
//   </div>
// }

import styles from './Loader.module.css';

export const Loader = () => {
  return (
  <div className={styles.container}>
    <div className={styles.box}>
      <div className={styles.loader}><span></span></div>
      <div className={styles.loader}><span></span></div>
      <div className={styles.loader}><i></i></div>
      <div className={styles.loader}><i></i></div>
  </div>
    </div>
  )
}
