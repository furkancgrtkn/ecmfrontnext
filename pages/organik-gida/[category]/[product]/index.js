import React, { useEffect, useState } from "react";
import { Breadcrumb, Modal, Progress } from "semantic-ui-react";
import Layout from "../../../../components/Layout/Layout";
import Link from "next/link";
import styles from "../../../../styles/ProductDetail.module.css";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

export default function productDetail() {
  const allComments = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
    { value: 11 },
    { value: 12 },
    { value: 13 },
    { value: 14 },
    { value: 15 },
    { value: 16 },
    { value: 17 },
    { value: 18 },
    { value: 19 },
    { value: 20 },
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [counter, setCounter] = useState(1);
  const [tabName, setTabName] = useState("Desc");
  const [perView, setPerView] = useState(4);
  const [perView2, setPerView2] = useState(4);
  const [sliceCount, setSliceCount] = useState(4);
  const [comments, setComments] = useState(allComments);
  const [modalOpenTwo1, setModalOpenTwo1] = useState(false);
  const [modalOpenTwoInner1, setModalOpenTwoInner1] = useState(false);

  useEffect(() => {
    window.innerWidth < 1775 ? setPerView(3) : null;
    window.innerWidth < 690 ? setPerView(2) : null;
    window.innerWidth < 690 ? setPerView2(2) : null;
    window.innerWidth < 490 ? setPerView(1) : null;
  }, []);

  return (
    <Layout>
      <div className={styles.productDetailBreadCrumb}>
        <Breadcrumb>
          <Breadcrumb.Section>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section>
            <Link href="/organik-gida">
              <a>Organik G??da</a>
            </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section>
            <Link href="/organik-gida/kuru-gidalar">
              <a>Kuru G??dalar</a>
            </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section active>
            Organik Bulgur K??y Tipi
          </Breadcrumb.Section>
        </Breadcrumb>
      </div>
      <main className={styles.productDetailMainContainer}>
        <section className={styles.productSection}>
          <div>
            <div className={styles.mainSliderContainerProduct}>
              <Swiper
                navigation
                className="productDetailMainSilder"
                thumbs={{ swiper: thumbsSwiper }}
              >
                <SwiperSlide>
                  <div className={styles.mainImageContainer}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                      alt="homepagebottomsliderImg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.mainImageContainer}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                      alt="homepagebottomsliderImg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.mainImageContainer}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                      alt="homepagebottomsliderImg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.mainImageContainer}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                      alt="homepagebottomsliderImg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.mainImageContainer}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                      alt="homepagebottomsliderImg"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={styles.thumbsSliderContainerProduct}>
              <Swiper
                onSwiper={setThumbsSwiper}
                watchSlidesVisibility
                watchSlidesProgress
                slidesPerView={perView2}
                navigation
                className="productDetailThumbs"
              >
                <SwiperSlide>
                  <div className={styles.thumbsImageContainer}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                      alt="homepagebottomsliderImg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.thumbsImageContainer}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                      alt="homepagebottomsliderImg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.thumbsImageContainer}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                      alt="homepagebottomsliderImg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.thumbsImageContainer}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                      alt="homepagebottomsliderImg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.thumbsImageContainer}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                      alt="homepagebottomsliderImg"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div>
            <div className={styles.productShippingDetail}>
              <h2>Beyorganik</h2>
              <h3>Organik Bulgur K??y Tipi</h3>
              <p className={styles.productCodeDetail}>
                <strong>??r??n Kodu:</strong> 123456789 <span>|</span>{" "}
                <strong>Stok Durumu:</strong> Stokta Var
              </p>
              <p className={styles.productDescriptionDetail}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor
              </p>
              <div className={styles.productPriceConDetail}>
                <div className={styles.prodcutPriceBlockDetail}>
                  <div className={styles.prodcutPriceDiscDetail}>
                    %50 <span>??ND??R??M</span>
                  </div>
                  <div className={styles.prodcutShipPriceDetail}>
                    <span>60,16 TL</span> 30,08 TL
                  </div>
                </div>
                <button className={styles.productFavBtnDetail}>
                  <Image
                    quality={65}
                    src="/hearticon.svg"
                    alt="arrow"
                    width="17"
                    height="17"
                  />
                </button>
              </div>
              <div className={styles.productChoice}>
                <p>RENK SE??ENEKLER??</p>
                <div className={styles.productChoices}>
                  <span style={{ backgroundColor: "#C85D5D" }}></span>
                  <span style={{ backgroundColor: "#50B539" }}></span>
                  <span style={{ backgroundColor: "#4596CC" }}></span>
                </div>
              </div>
              <div className={styles.basketProContDetail}>
                <div className={styles.basketCounterBtnDetail}>
                  <button
                    onClick={() => {
                      counter === 1 ? setCounter(1) : setCounter(counter - 1);
                    }}
                  >
                    -
                  </button>{" "}
                  <span>{counter}</span>{" "}
                  <button onClick={() => setCounter(counter + 1)}> + </button>
                </div>
                <button className={styles.addBasketSldBtnDetail}>
                  SEPETE EKLE
                </button>
              </div>
              <p className={styles.productDetailCargoT??me}>
                30 Kas??m - 02 Aral??k tarihleri aras??nda kargoda!
              </p>
              <div className={styles.prodShareIcons}>
                <i className="fas fa-share-alt"></i>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest-square"></i>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.productTabSection}>
          <div className={styles.productTabs}>
            <h6 onClick={() => setTabName("Desc")}>
              A????klamalar{tabName === "Desc" ? <span></span> : null}
            </h6>
            <h6 onClick={() => setTabName("Ship")}>
              Sipari?? Bilgileri{tabName === "Desc" ? null : <span></span>}
            </h6>
          </div>
          {tabName === "Desc" ? (
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
              <br />
              <br />
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua.
              <br />
              <br />
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          ) : (
            <div className={styles.productTabsShip}>
              <div className={styles.productTabsShipImage}>
                <div>
                  <Image quality={65} layout="fill" src="/cargo.svg" />
                </div>
                <p>Kargo ve Teslimat</p>
              </div>
              <p className={styles.productTabsShipDesc}>
                Sipari??iniz, ??al????m???? oldu??umuz kargo firmas?? taraf??ndan
                ortalama 2 i?? g??n??nde yurt i??i ve yurt d?????? teslim edilmektedir.
              </p>
              <div className={styles.productTabsShipImage}>
                <div>
                  <Image quality={65} layout="fill" src="/cardgree.svg" />
                </div>
                <p>??deme Metodlar??</p>
              </div>
              <p className={styles.productTabsShipDesc}>
                Kredi kart?? {"("}3D Secure{")"}, EFT/Havale, Kap??da ??deme
                se??enekleri ile g??venli ve kolay sipari?? verebilirsiniz.
              </p>
            </div>
          )}
        </section>
      </main>
      <section className={styles.recommendedProducts}>
        <h3>
          ??lginizi
          <br />
          ??ekebilecek
          <br />
          di??er ??r??nler
          <br />
        </h3>
        <div className={styles.reccommendedSliderCon}>
          <Swiper
            slidesPerView={perView}
            spaceBetween={0}
            scrollbar
            navigation
            className="reccommendedSlider"
          >
            <SwiperSlide>
              <div className={styles.reccommendedSliderImage}>
                <Image
                  quality={65}
                  layout="fill"
                  src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                  alt="homepagebottomsliderImg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.reccommendedSliderImage}>
                <Image
                  quality={65}
                  layout="fill"
                  src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                  alt="homepagebottomsliderImg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.reccommendedSliderImage}>
                <Image
                  quality={65}
                  layout="fill"
                  src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                  alt="homepagebottomsliderImg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.reccommendedSliderImage}>
                <Image
                  quality={65}
                  layout="fill"
                  src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                  alt="homepagebottomsliderImg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.reccommendedSliderImage}>
                <Image
                  quality={65}
                  layout="fill"
                  src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                  alt="homepagebottomsliderImg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.reccommendedSliderImage}>
                <Image
                  quality={65}
                  layout="fill"
                  src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                  alt="homepagebottomsliderImg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.reccommendedSliderImage}>
                <Image
                  quality={65}
                  layout="fill"
                  src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                  alt="homepagebottomsliderImg"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className={styles.commentSection}>
        <div className={styles.commentSecHeader}>
          <h4>De??erlendirmeler</h4>
        </div>
        <div className={styles.allRatingsContainer}>
          <div className={styles.allRatingsMinimalize}>
            <strong>4.0</strong>
            <div className={styles.allRatingsStars}>
              <div>
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/starIcon.svg"
                  alt="homepagebottomsliderImg"
                />
              </div>
              <div>
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/starIcon.svg"
                  alt="homepagebottomsliderImg"
                />
              </div>
              <div>
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/starIcon.svg"
                  alt="homepagebottomsliderImg"
                />
              </div>
              <div>
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/starIcon.svg"
                  alt="homepagebottomsliderImg"
                />
              </div>
              <div>
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/noFillStar.svg"
                  alt="homepagebottomsliderImg"
                />
              </div>
            </div>
            <p>652 De??erlendirme</p>
          </div>
          <div className={styles.allRatingProgressContainer}>
            <div className={styles.allRatingProgress}>
              <Image
                quality={65}
                width={14}
                height={14}
                src="/starIcon.svg"
                alt="homepagebottomsliderImg"
              />
              <span className={styles.ratingDeg}>5</span>
              <div className={styles.ratingProgressBar}>
                <Progress className="detailBar" percent={80} />
              </div>
              <span className={styles.ratingPercent}>%80</span>
            </div>
            <div className={styles.allRatingProgress}>
              <Image
                quality={65}
                width={14}
                height={14}
                src="/starIcon.svg"
                alt="homepagebottomsliderImg"
              />
              <span className={styles.ratingDeg}>4</span>
              <div className={styles.ratingProgressBar}>
                <Progress className="detailBar" percent={0} />
              </div>
              <span className={styles.ratingPercent}>%0</span>
            </div>
            <div className={styles.allRatingProgress}>
              <Image
                quality={65}
                width={14}
                height={14}
                src="/starIcon.svg"
                alt="homepagebottomsliderImg"
              />
              <span className={styles.ratingDeg}>3</span>
              <div className={styles.ratingProgressBar}>
                <Progress className="detailBar" percent={0} />
              </div>
              <span className={styles.ratingPercent}>%0</span>
            </div>
            <div className={styles.allRatingProgress}>
              <Image
                quality={65}
                width={14}
                height={14}
                src="/starIcon.svg"
                alt="homepagebottomsliderImg"
              />
              <span className={styles.ratingDeg}>2</span>
              <div className={styles.ratingProgressBar}>
                <Progress className="detailBar" percent={0} />
              </div>
              <span className={styles.ratingPercent}>%0</span>
            </div>
            <div className={styles.allRatingProgress}>
              <Image
                quality={65}
                width={14}
                height={14}
                src="/starIcon.svg"
                alt="homepagebottomsliderImg"
              />
              <span className={styles.ratingDeg}>1</span>
              <div className={styles.ratingProgressBar}>
                <Progress className="detailBar" percent={20} />
              </div>
              <span className={styles.ratingPercent}>%20</span>
            </div>
          </div>
        </div>
        <div className={styles.commentSecHeaderC}>
          <h4>Yorumlar</h4>
          <span>377 Yorum</span>
        </div>
        {comments.slice(0, sliceCount).map((e, index) => (
          <div key={index} className={styles.comment}>
            <div className={styles.commentInfo}>
              <div className={styles.commentStars}>
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/starIcon.svg"
                  alt="homepagebottomsliderImg"
                />
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/starIcon.svg"
                  alt="homepagebottomsliderImg"
                />
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/starIcon.svg"
                  alt="homepagebottomsliderImg"
                />
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/starIcon.svg"
                  alt="homepagebottomsliderImg"
                />
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/starIcon.svg"
                  alt="homepagebottomsliderImg"
                />
              </div>
              <span className={styles.commentDate}>1 Ocak 2021</span>
              <span className={styles.commenterName}>Furkan ??.</span>
              <div className={styles.commentFav}>
                <span>Yard??mc?? oldu mu?</span>
                <button>
                  <Image
                    quality={65}
                    src="/hearticon.svg"
                    alt="arrow"
                    width={10}
                    height={10}
                  />
                  <span>1</span>
                </button>
              </div>
            </div>
            <p className={styles.commentText}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <Modal
              onOpen={() => setModalOpenTwo1(true)}
              onClose={() => setModalOpenTwo1(false)}
              open={modalOpenTwo1}
              className="commentRepModal"
              trigger={
                <button className={styles.commentReport}>??ikayet Et</button>
              }
            >
              <div className={styles.reportCommentContainerp}>
                <h6>????KAYET ET</h6>
                <p>
                  Farkl?? ??r??ne ait olan, reklam i??eren, ba??ka kullan??c??lar??n
                  haklar??na sald??r??da bulunan, m??stehcen i??erikli ya da yasal
                  olmayan i??erik ta????yan yorumlar?? yay??nlamamaya dikkat
                  ediyoruz. Uygun olmad??????n?? d??????nd??????n??z i??erikleri "??ikayet
                  Et" butonu ile bize iletebilirsiniz.
                </p>
                <div className={styles.reportCommentContainerBtnsp}>
                  <button
                    onClick={() => setModalOpenTwo1(false)}
                    className={styles.reportCommentContainerBtn1p}
                  >
                    Vazge??
                  </button>
                  <Modal
                    onOpen={() => setModalOpenTwoInner1(true)}
                    onClose={() => setModalOpenTwoInner1(false)}
                    open={modalOpenTwoInner1}
                    className="commentRepModal"
                    trigger={
                      <button className={styles.reportCommentContainerBtn2p}>
                        ??ikayet Et
                      </button>
                    }
                  >
                    <div className={styles.reportCommentContainerDonep}>
                      <h6>????KAYET??N??Z?? ALDIK</h6>
                      <p>Geri Bildiriminiz i??in te??ekk??rler</p>
                      <button
                        onClick={() => {
                          setModalOpenTwo1(false);
                          setModalOpenTwoInner1(false);
                        }}
                        className={styles.reportCommentContainerSubp}
                      >
                        Tamam
                      </button>
                    </div>
                  </Modal>
                </div>
              </div>
            </Modal>
          </div>
        ))}
        <div
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className={styles.goTopBtnComment}
        >
          <i className="fas fa-chevron-up"></i>
        </div>
        <Link href="/organik-gida/kuru-gidalar/1/yorumlar">
          <a>
            <button className={styles.moreComment}>
              Daha Fazla <span>+</span>
            </button>
          </a>
        </Link>
      </section>
    </Layout>
  );
}
