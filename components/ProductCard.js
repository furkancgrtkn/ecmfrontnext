import React from 'react'
import styles from '../styles/ProductCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ customSlideIndex, indexNo, modalOpen, productInfos }) {
    return (
        <div className={styles.productContainer}>
            <div className={styles.productIcons}>
                <button onClick={() => {
                    modalOpen(true)
                    customSlideIndex(indexNo)
                }}>
                    <Image unoptimized={true} src="/productSearchIcon.svg" alt="arrow" width="17" height="17" />
                </button>
                <button>
                    <Image unoptimized={true} src="/hearticon.svg" alt="arrow" width="17" height="17" />
                </button>
            </div>
            <Link href='/organik-gida/kuru-gidalar/1'>
                <a>
                    <div className={styles.productImage}>
                        <Image
                            unoptimized={true}
                            layout='fill'
                            src="https://i.hizliresim.com/cexkDr.png"
                            alt="homepagebottomsliderImg"
                        />
                    </div>
                    <div className={styles.productInfo}>
                        <h2>{productInfos.title}</h2>
                        <h3>{productInfos.subTitle}</h3>
                        <p>{productInfos.price}</p>
                        <h2>{productInfos.name}</h2>
                    </div>
                </a>
            </Link>
            <button className={styles.addBasketBtn}>SEPETE EKLE</button>
        </div>
    )
}
