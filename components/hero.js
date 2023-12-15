import styles from 'styles/hero.module.css'

const Hero = ({ title, subtitle, imageOn = false }) => {
  return (
    <div className={styles.text}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      {imageOn && <figure> [画像] </figure>}
    </div>
  )
}
export default Hero
