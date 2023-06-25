const styles = {
  wrapper: 'flex w-full items-center justify-center pt-16 lg:pt-20',
  container: 'space-y-10',
  heroTitle: 'xl:pr-40 text-6xl font-bold',
  heroParagraph: 'xl:pr-40',
  heroCta: 'flex items-center space-x-10',
  mintButton:
    'rounded-xl border border-gray-100 bg-transparent px-8 py-4 font-semibold text-gray-100 transition-all hover:bg-gray-100 hover:text-[#1d1d1d]',
}

const Hero = () => {

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>SolShuffle</h1>
        <p className={styles.heroParagraph}>
          *This is NOT a real NFT drop, it is for learning purposes!*
        </p>
        <p className={styles.heroParagraph}>
          sample text
        </p>
        <div className={styles.heroCta}>
        </div>
      </div>
    </main>
  )
}

export default Hero
