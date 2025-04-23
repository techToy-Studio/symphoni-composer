import type {ReactNode} from 'react';
import styles from './styles.module.css';

// Import the video file
import videoSource from '@site/static/vid/GIF-FirstPersonGameplay.mp4';

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.featureVideo}
        controls
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
