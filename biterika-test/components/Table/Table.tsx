import React from "react";

const Table = () => {
  return (
    <div className="table">
      <div className="table__md-wrap">
        <div className="table__head table__head--col-8 is-tablet mb-15 mb-lg-2">
          <div className="table__row">
            <div className="table__col">
              <span className="small-xl-text color-sub">Кампания</span>
            </div>
            <div className="table__col widescreen-lg">
              <span className="small-xl-text color-sub">Креативы</span>
            </div>
            <div className="table__col widescreen-lg">
              <span className="small-xl-text color-sub">Место проведения</span>
            </div>
            <div className="table__col">
              <span className="small-xl-text color-sub">Локации</span>
            </div>
            <div className="table__col">
              <span className="small-xl-text color-sub">Транспорт</span>
            </div>
            <div className="table__col">
              <span className="small-xl-text color-sub">Показ</span>
            </div>
            <div className="table__col">
              <span className="small-xl-text color-sub">Бюджет</span>
            </div>
            <div className="table__col"></div>
          </div>
        </div>
        <div className="table__body filter-tabs__content">
          <div className="filter-tabs__item active" data-content="1">
            <div className="card card--col-8">
              <div className="card__wrap xxl-center">
                <div className="card__col first flex-column">
                  <h5 className="medium-text">Кампания в Чангу</h5>
                  <ul className="info-list mb-1 mb-lg-15">
                    <li className="info-list__item">
                      <span className="sub-text">ID 14657</span>
                    </li>
                    <li className="info-list__item">
                      <span className="sub-text">12 янв 2023 в 14:45</span>
                    </li>
                  </ul>
                  <div className="flex-column md-reverse">
                    <div className="status small success">
                      <span className="info-icon img-wrap mr-05">
                        <img
                          src="https://static.biterika.team/brobooster/assets/images/icons/dot-success.svg"
                          alt=""
                        />
                      </span>
                      <span className="small-text">В работе</span>
                    </div>
                    <p className="medium-text widescreen-lg-none mt-1 mt-md-0 mb-md-1">
                      Индонезия, Бали
                    </p>
                  </div>
                </div>
                <div className="card__col second widescreen-lg">
                  <p className="medium-text">Индонезия, Бали</p>
                </div>
                <div className="card__cols-block mt-1 mt-md-0">
                  <div className="card__row four">
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Локации</span>
                      <span className="medium-text">3</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Транспорт</span>
                      <span className="medium-text">4</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Показ</span>
                      <span className="medium-text">13/45 ч</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Бюджет</span>
                      <span className="medium-text">1600$</span>
                    </div>
                  </div>
                </div>
                <div className="card__col third flex-auto">
                  <div className="card__img-wrap">
                    <div className="card__sm-img card__icon-wrap img-cover">
                      <img
                        src="https://static.biterika.team/brobooster/assets/images/creatives/creative-2.webp"
                        alt="card"
                      />
                      <span className="card__icon fixed">
                        <span className="small-icon img-wrap">
                          <img
                            src="https://static.biterika.team/brobooster/assets/images/icons/camera.svg"
                            alt=""
                          />
                        </span>
                      </span>
                    </div>
                    <div className="card__sm-img img-cover">
                      <img
                        src="https://static.biterika.team/brobooster/assets/images/creatives/creative-3.webp"
                        alt="card"
                      />
                    </div>
                    <div className="card__sm-img img-cover">
                      <img
                        src="https://static.biterika.team/brobooster/assets/images/creatives/creative-1.webp"
                        alt="card"
                      />
                    </div>
                  </div>
                  <div className="card__audio flex-row mt-1">
                    <span className="small-icon img-wrap mr-05">
                      <img
                        src="https://static.biterika.team/brobooster/assets/images/icons/sound.svg"
                        alt="sound"
                      />
                    </span>
                    <span className="small-text">Аудио дорожка</span>
                  </div>
                </div>

                <div className="card__details-col fixed">
                  <div className="menu-wrap js-menu-wrap">
                    <button
                      type="button"
                      className="btn-more second js-menu-btn"
                    >
                      <svg className="icon icon-small">
                        <use xlinkHref="#more-16"></use>
                      </svg>
                    </button>
                    <div className="menu menu--right js-menu-list">
                      <div className="menu__wrap">
                        <ul>
                          <li>
                            <a href="campaing-edit.html" className="menu__btn">
                              Изменить
                            </a>
                          </li>
                          <li>
                            <button type="button" className="menu__btn">
                              Дублировать
                            </button>
                          </li>
                          <li>
                            <a href="support.html" className="menu__btn">
                              Перейти в поддержку
                            </a>
                          </li>
                          <li>
                            <button type="button" className="menu__btn">
                              Удалить
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a
                    href="campaing-page.html"
                    className="btn-more second ml-3 ml-lg-4"
                  >
                    <svg className="icon icon-small">
                      <use xlinkHref="#arrow-right-16"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-tabs__item active" data-content="2">
            <div className="card card--col-8">
              <div className="card__wrap xxl-center">
                <div className="card__col first flex-column">
                  <h5 className="medium-text">Кампания в Чангу</h5>
                  <ul className="info-list mb-1 mb-lg-15">
                    <li className="info-list__item">
                      <span className="sub-text">ID 14657</span>
                    </li>
                    <li className="info-list__item">
                      <span className="sub-text">12 янв 2023 в 14:45</span>
                    </li>
                  </ul>
                  <div className="flex-column md-reverse">
                    <div className="status small neutral">
                      <span className="info-icon img-wrap mr-05">
                        <img
                          src="https://static.biterika.team/brobooster/assets/images/icons/dot-sub.svg"
                          alt=""
                        />
                      </span>
                      <span className="small-text">На модерации</span>
                    </div>
                    <p className="medium-text widescreen-lg-none mt-1 mt-md-0 mb-md-1">
                      Россия, Новосибирск
                    </p>
                  </div>
                </div>
                <div className="card__col second widescreen-lg">
                  <p className="medium-text">Россия, Новосибирск</p>
                </div>
                <div className="card__cols-block mt-1 mt-md-0">
                  <div className="card__row four">
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Локации</span>
                      <span className="medium-text">1</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Транспорт</span>
                      <span className="medium-text">1</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Показ</span>
                      <span className="medium-text">30 ч</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Бюджет</span>
                      <span className="medium-text">400$</span>
                    </div>
                  </div>
                </div>
                <div className="card__col third flex-auto">
                  <div className="card__img-wrap">
                    <div className="card__sm-img card__icon-wrap img-cover">
                      <img
                        src="https://static.biterika.team/brobooster/assets/images/creatives/creative-1.webp"
                        alt="card"
                      />
                      <span className="card__icon fixed">
                        <span className="small-icon img-wrap">
                          <img
                            src="https://static.biterika.team/brobooster/assets/images/icons/camera.svg"
                            alt=""
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card__details-col fixed">
                  <div className="menu-wrap js-menu-wrap">
                    <button
                      type="button"
                      className="btn-more second js-menu-btn"
                    >
                      <svg className="icon icon-small">
                        <use xlinkHref="#more-16"></use>
                      </svg>
                    </button>
                    <div className="menu menu--right js-menu-list">
                      <div className="menu__wrap">
                        <ul>
                          <li>
                            <a href="campaing-edit.html" className="menu__btn">
                              Изменить
                            </a>
                          </li>
                          <li>
                            <button type="button" className="menu__btn">
                              Дублировать
                            </button>
                          </li>
                          <li>
                            <a href="support.html" className="menu__btn">
                              Перейти в поддержку
                            </a>
                          </li>
                          <li>
                            <button type="button" className="menu__btn">
                              Удалить
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a
                    href="campaing-page.html"
                    className="btn-more second ml-3 ml-lg-4"
                  >
                    <svg className="icon icon-small">
                      <use xlinkHref="#arrow-right-16"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-tabs__item active" data-content="3">
            <div className="card card--col-8">
              <div className="card__wrap xxl-center">
                <div className="card__col first flex-column">
                  <h5 className="medium-text">Российская</h5>
                  <ul className="info-list mb-1 mb-lg-15">
                    <li className="info-list__item">
                      <span className="sub-text">ID 14657</span>
                    </li>
                    <li className="info-list__item">
                      <span className="sub-text">12 янв 2023 в 14:45</span>
                    </li>
                  </ul>
                  <div className="flex-column md-reverse">
                    <div className="status small stopped">
                      <span className="info-icon img-wrap mr-05">
                        <img
                          src="https://static.biterika.team/brobooster/assets/images/icons/pause.svg"
                          alt=""
                        />
                      </span>
                      <span className="small-text">Приостановлена</span>
                    </div>
                    <p className="medium-text widescreen-lg-none mt-1 mt-md-0 mb-md-1">
                      Россия, Новосибирск
                    </p>
                  </div>
                </div>
                <div className="card__col second widescreen-lg">
                  <p className="medium-text">Россия, Новосибирск</p>
                </div>
                <div className="card__cols-block mt-1 mt-md-0">
                  <div className="card__row four">
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Локации</span>
                      <span className="medium-text">1</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Транспорт</span>
                      <span className="medium-text">1</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Показ</span>
                      <span className="medium-text">13/45 ч</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Бюджет</span>
                      <span className="medium-text">600$</span>
                    </div>
                  </div>
                </div>
                <div className="card__col third flex-auto">
                  <div className="card__img-wrap">
                    <div className="card__sm-img card__icon-wrap img-cover">
                      <img
                        src="https://static.biterika.team/brobooster/assets/images/creatives/creative-1.webp"
                        alt="card"
                      />
                      <span className="card__icon fixed">
                        <span className="small-icon img-wrap">
                          <img
                            src="https://static.biterika.team/brobooster/assets/images/icons/camera.svg"
                            alt=""
                          />
                        </span>
                      </span>
                    </div>
                    <div className="card__sm-img img-cover">
                      <img
                        src="https://static.biterika.team/brobooster/assets/images/creatives/creative-2.webp"
                        alt="card"
                      />
                    </div>
                  </div>
                  <div className="card__audio flex-row mt-1">
                    <span className="small-icon img-wrap mr-05">
                      <img
                        src="https://static.biterika.team/brobooster/assets/images/icons/sound.svg"
                        alt="sound"
                      />
                    </span>
                    <span className="small-text">Аудио дорожка</span>
                  </div>
                </div>
                <div className="card__details-col fixed">
                  <div className="menu-wrap js-menu-wrap">
                    <button
                      type="button"
                      className="btn-more second js-menu-btn"
                    >
                      <svg className="icon icon-small">
                        <use xlinkHref="#more-16"></use>
                      </svg>
                    </button>
                    <div className="menu menu--right js-menu-list">
                      <div className="menu__wrap">
                        <ul>
                          <li>
                            <a href="campaing-edit.html" className="menu__btn">
                              Изменить
                            </a>
                          </li>
                          <li>
                            <button type="button" className="menu__btn">
                              Дублировать
                            </button>
                          </li>
                          <li>
                            <a href="support.html" className="menu__btn">
                              Перейти в поддержку
                            </a>
                          </li>
                          <li>
                            <button type="button" className="menu__btn">
                              Удалить
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a
                    href="campaing-page.html"
                    className="btn-more second ml-3 ml-lg-4"
                  >
                    <svg className="icon icon-small">
                      <use xlinkHref="#arrow-right-16"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-tabs__item active" data-content="4">
            <div className="card card--col-8">
              <div className="card__wrap xxl-center">
                <div className="card__col first flex-column">
                  <h5 className="medium-text">Кампания в Чангу</h5>
                  <ul className="info-list mb-1 mb-lg-15">
                    <li className="info-list__item">
                      <span className="sub-text">ID 14657</span>
                    </li>
                    <li className="info-list__item">
                      <span className="sub-text">12 янв 2023 в 14:45</span>
                    </li>
                  </ul>
                  <div className="flex-column md-reverse">
                    <div className="status small neutral">
                      <span className="info-icon img-wrap mr-05">
                        <img
                          src="https://static.biterika.team/brobooster/assets/images/icons/dot-sub.svg"
                          alt=""
                        />
                      </span>
                      <span className="small-text">На модерации</span>
                    </div>
                    <p className="medium-text widescreen-lg-none mt-1 mt-md-0 mb-md-1">
                      Россия, Новосибирск
                    </p>
                  </div>
                </div>
                <div className="card__col second widescreen-lg">
                  <p className="medium-text">Россия, Новосибирск</p>
                </div>
                <div className="card__cols-block mt-1 mt-md-0">
                  <div className="card__row four">
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Локации</span>
                      <span className="medium-text">1</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Транспорт</span>
                      <span className="medium-text">1</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Показ</span>
                      <span className="medium-text">30 ч</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Бюджет</span>
                      <span className="medium-text">400$</span>
                    </div>
                  </div>
                </div>
                <div className="card__col third flex-auto">
                  <div className="card__img-wrap">
                    <div className="card__sm-img card__icon-wrap img-cover">
                      <img
                        src="https://static.biterika.team/brobooster/assets/images/creatives/creative-1.webp"
                        alt="card"
                      />
                      <span className="card__icon fixed">
                        <span className="small-icon img-wrap">
                          <img
                            src="https://static.biterika.team/brobooster/assets/images/icons/camera.svg"
                            alt=""
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card__details-col fixed">
                  <div className="menu-wrap js-menu-wrap">
                    <button
                      type="button"
                      className="btn-more second js-menu-btn"
                    >
                      <svg className="icon icon-small">
                        <use xlinkHref="#more-16"></use>
                      </svg>
                    </button>
                    <div className="menu menu--right js-menu-list">
                      <div className="menu__wrap">
                        <ul>
                          <li>
                            <a href="campaing-edit.html" className="menu__btn">
                              Изменить
                            </a>
                          </li>
                          <li>
                            <button type="button" className="menu__btn">
                              Дублировать
                            </button>
                          </li>
                          <li>
                            <a href="support.html" className="menu__btn">
                              Перейти в поддержку
                            </a>
                          </li>
                          <li>
                            <button type="button" className="menu__btn">
                              Удалить
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a
                    href="campaing-page.html"
                    className="btn-more second ml-3 ml-lg-4"
                  >
                    <svg className="icon icon-small">
                      <use xlinkHref="#arrow-right-16"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-tabs__item active" data-content="5">
            <div className="card card--col-8">
              <div className="card__wrap xxl-center">
                <div className="card__col first flex-column">
                  <h5 className="medium-text">Российская</h5>
                  <ul className="info-list mb-1 mb-lg-15">
                    <li className="info-list__item">
                      <span className="sub-text">ID 14657</span>
                    </li>
                    <li className="info-list__item">
                      <span className="sub-text">12 янв 2023 в 14:45</span>
                    </li>
                  </ul>
                  <div className="flex-column md-reverse">
                    <div className="flex-row">
                      <div className="status small error">
                        <span className="info-icon img-wrap mr-05">
                          <img
                            src="https://static.biterika.team/brobooster/assets/images/icons/error-6.svg"
                            alt=""
                          />
                        </span>
                        <span className="small-text">Отклонен</span>
                      </div>
                      <span className="tooltip ml-1">
                        <span
                          role="button"
                          className="tooltip__btn small-icon img-wrap"
                        >
                          <img
                            src="https://static.biterika.team/brobooster/assets/images/icons/info-16.svg"
                            alt=""
                          />
                        </span>
                        <span className="tooltip__text left-50" role="tooltip">
                          {" "}
                          Креатив содержит сцены курения или употребления
                          алкоголя
                        </span>
                      </span>
                    </div>
                    <p className="medium-text widescreen-lg-none mt-1 mt-md-0 mb-md-1">
                      Россия, Новосибирск
                    </p>
                  </div>
                </div>
                <div className="card__col second widescreen-lg">
                  <p className="medium-text">Россия, Новосибирск</p>
                </div>
                <div className="card__cols-block mt-1 mt-md-0">
                  <div className="card__row four">
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Локации</span>
                      <span className="medium-text">1</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Транспорт</span>
                      <span className="medium-text">1</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Показ</span>
                      <span className="medium-text">13/45 ч</span>
                    </div>
                    <div className="card__row-col flex-column">
                      <span className="small-text tablet-none">Бюджет</span>
                      <span className="medium-text">1600$</span>
                    </div>
                  </div>
                </div>
                <div className="card__col third flex-auto">
                  <div className="card__img-wrap">
                    <div className="card__sm-img img-cover">
                      <img
                        src="https://static.biterika.team/brobooster/assets/images/creatives/creative-3.webp"
                        alt="card"
                      />
                    </div>
                  </div>
                  <div className="card__audio flex-row mt-1">
                    <span className="small-icon img-wrap mr-05">
                      <img
                        src="https://static.biterika.team/brobooster/assets/images/icons/sound.svg"
                        alt="sound"
                      />
                    </span>
                    <span className="small-text">Аудио дорожка</span>
                  </div>
                </div>

                <div className="card__details-col fixed">
                  <div className="menu-wrap js-menu-wrap">
                    <button
                      type="button"
                      className="btn-more second js-menu-btn"
                    >
                      <svg className="icon icon-small">
                        <use xlinkHref="#more-16"></use>
                      </svg>
                    </button>
                    <div className="menu menu--right js-menu-list">
                      <div className="menu__wrap">
                        <ul>
                          <li>
                            <a href="campaing-edit.html" className="menu__btn">
                              Изменить
                            </a>
                          </li>
                          <li>
                            <button type="button" className="menu__btn">
                              Дублировать
                            </button>
                          </li>
                          <li>
                            <a href="support.html" className="menu__btn">
                              Перейти в поддержку
                            </a>
                          </li>
                          <li>
                            <button type="button" className="menu__btn">
                              Удалить
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a
                    href="campaing-page.html"
                    className="btn-more second ml-3 ml-lg-4"
                  >
                    <svg className="icon icon-small">
                      <use xlinkHref="#arrow-right-16"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
