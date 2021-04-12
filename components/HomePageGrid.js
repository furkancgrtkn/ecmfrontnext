import styles from '../styles/HomePageGrid.module.css'
import Image from 'next/image'

export default function HomePageGrid() {
    return (
        <div className={styles.gridWrapper}>
            <div className={styles.parent}>
                <div className={styles.div1}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divText}>LOREM IPSUM</p>
                </div>
                <div className={styles.div2}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divText}>LOREM IPSUM</p>
                </div>
                <div className={styles.div3}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divText}>LOREM IPSUM</p>
                </div>
            </div>

            <div className={styles.parent2}>
                <div className={styles.div4}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div5}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div6}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div7}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div8}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divText} style={{ color: "black" }}>LOREM IPSUM</p>
                </div>
            </div>

            <div className={styles.parenthm}>
                <div className={styles.div1hm}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divTexthm}>LOREM IPSUM</p>
                </div>
                <div className={styles.div2hm}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divTexthm}>LOREM IPSUM</p>
                </div>
                <div className={styles.div3hm}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divTexthm}>LOREM IPSUM</p>
                </div>
            </div>
            <div className={styles.parent2hm}>
                <div className={styles.div4hm}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divTexthm} style={{ color: "white" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div5hm}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divTexthm} style={{ color: "white" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div6hm}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divTexthm} style={{ color: "white" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div7hm}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divTexthm} style={{ color: "white" }}>LOREM IPSUM</p>
                </div>
                <div className={styles.div8hm}>
                    <Image unoptimized={true} layout='fill' alt="homepagegrid1" src="https://i.hizliresim.com/lN1Tyq.png" />
                    <p className={styles.divTexthm} style={{ color: "white" }}>LOREM IPSUM</p>
                </div>
            </div>
        </div>
    )

}

