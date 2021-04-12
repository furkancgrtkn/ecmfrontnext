import Layout from "../../components/Layout/Layout";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/ProductsOrganic.module.css'
import Link from 'next/link'
import { Breadcrumb } from 'semantic-ui-react'

export default function organikgida() {
    return (
        <Layout>
            <Head>
                <title>Organik Gıdalar</title>
            </Head>
            <main className={styles.productsMainContainer}>
                <Breadcrumb>
                    <Breadcrumb.Section>
                        <Link href="/">
                            <a>Anasayfa</a>
                        </Link>
                    </Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right angle' />
                    <Breadcrumb.Section active>
                        Organik Gıda
                    </Breadcrumb.Section>
                </Breadcrumb>
                <h1>ORGANİK GIDA</h1>
                <div className={styles.parent}>
                    <div className={styles.div1}>
                        <Link href={`/organik-gida/bulgur`}>
                            <a>
                                <Image
                                    unoptimized={true}
                                    layout="fill"
                                    src="https://i.hizliresim.com/DXk8kj.png"
                                    alt="homepagetopsliderImg"
                                />
                                <p className={styles.divProductText} style={{ width: '250px' }}>Lorem</p>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.div2}>
                        <Link href={`/organik-gida/bulgur`}>
                            <a>
                                <Image
                                    unoptimized={true}
                                    layout="fill"
                                    src="https://i.hizliresim.com/SU1tr2.png"
                                    alt="homepagetopsliderImg"
                                />
                                <p className={styles.divProductText} style={{ right: '10px', bottom: '10px' }}>Lorem</p>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.div3}>
                        <Link href={`/organik-gida/bulgur`}>
                            <a>
                                <Image
                                    unoptimized={true}
                                    layout="fill"
                                    src="https://i.hizliresim.com/bh2mYz.png"
                                    alt="homepagetopsliderImg"
                                />
                                <p className={styles.divProductText} style={{ right: '10px', bottom: '10px' }}>Lorem</p>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.div4}>
                        <Link href={`/organik-gida/bulgur`}>
                            <a>
                                <Image
                                    unoptimized={true}
                                    layout="fill"
                                    src="https://i.hizliresim.com/XjuOCX.png"
                                    alt="homepagetopsliderImg"
                                />
                                <p className={styles.divProductText}>Lorem</p>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.div5}>
                        <Link href={`/organik-gida/bulgur`}>
                            <a>
                                <Image
                                    unoptimized={true}
                                    layout="fill"
                                    src="https://i.hizliresim.com/KrcWjx.png"
                                    alt="homepagetopsliderImg"
                                />
                                <p className={styles.divProductText}>Lorem</p>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.div6}>
                        <Link href={`/organik-gida/bulgur`}>
                            <a>
                                <Image
                                    unoptimized={true}
                                    layout="fill"
                                    src="https://i.hizliresim.com/eshUad.png"
                                    alt="homepagetopsliderImg"
                                />
                                <p className={styles.divProductText} style={{ left: '18px' }} >Lorem</p>
                            </a>
                        </Link>
                    </div>

                </div>

                <div className={styles.parentm}>
                    <div className={styles.div1m}>
                        <Link href={`/organik-gida/bulgur`}>
                            <a>
                                <Image
                                    unoptimized={true}
                                    layout="fill"
                                    src="https://i.hizliresim.com/DXk8kj.png"
                                    alt="homepagetopsliderImg"
                                />
                                <p className={styles.divProductTextm}>Lorem</p>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.div2m}>
                        <Link href={`/organik-gida/bulgur`}>
                            <a>
                                <Image
                                    unoptimized={true}
                                    layout="fill"
                                    src="https://i.hizliresim.com/eshUad.png"
                                    alt="homepagetopsliderImg"
                                />
                                <p className={styles.divProductTextm} style={{ left: '18px' }} >Lorem</p>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.div3m}>
                        <Link href={`/organik-gida/bulgur`}>
                            <a>
                                <Image
                                    unoptimized={true}
                                    layout="fill"
                                    src="https://i.hizliresim.com/DXk8kj.png"
                                    alt="homepagetopsliderImg"
                                />
                                <p className={styles.divProductTextm}>Lorem</p>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.div4m}>
                        <Link href={`/organik-gida/bulgur`}>
                            <a>
                                <Image
                                    unoptimized={true}
                                    layout="fill"
                                    src="https://i.hizliresim.com/eshUad.png"
                                    alt="homepagetopsliderImg"
                                />
                                <p className={styles.divProductTextm} style={{ left: '18px' }}>Lorem</p>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.div5m}>
                        <Link href={`/organik-gida/bulgur`}>
                            <a>
                                <Image
                                    unoptimized={true}
                                    layout="fill"
                                    src="https://i.hizliresim.com/DXk8kj.png"
                                    alt="homepagetopsliderImg"
                                />
                                <p className={styles.divProductTextm}>Lorem</p>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.div6m}>
                        <Link href={`/organik-gida/bulgur`}>
                            <a>
                                <Image
                                    unoptimized={true}
                                    layout='fill'
                                    src="https://i.hizliresim.com/eshUad.png"
                                    alt="homepagetopsliderImg"
                                />
                                <p className={styles.divProductTextm} style={{ left: '18px' }} >Lorem</p>
                            </a>
                        </Link>
                    </div>

                </div>
            </main>
        </Layout>
    )
}
