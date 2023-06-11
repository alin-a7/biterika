import { Campaign } from "@/store/types";

import React from "react";

const RowItem = ({
  title,
  id,
  state,
  city,
  locations,
  transports,
  display,
  budget,
  photos,
}: Campaign) => {
  return (
    <div className="filter-tabs__item active" data-content="1">
      <div className="card card--col-8">
        <div className="card__wrap xxl-center">
          <div className="card__col first flex-column">
            <h5 className="medium-text">{title}</h5>
            <ul className="info-list mb-1 mb-lg-15">
              <li className="info-list__item">
                <span className="sub-text">ID {id}</span>
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
                <span className="small-text">{state}</span>
              </div>
              <p className="medium-text widescreen-lg-none mt-1 mt-md-0 mb-md-1">
                {city}
              </p>
            </div>
          </div>
          <div className="card__col second widescreen-lg">
            <p className="medium-text">{city}</p>
          </div>
          <div className="card__cols-block mt-1 mt-md-0">
            <div className="card__row four">
              <div className="card__row-col flex-column">
                <span className="small-text tablet-none">Локации</span>
                <span className="medium-text">{locations}</span>
              </div>
              <div className="card__row-col flex-column">
                <span className="small-text tablet-none">Транспорт</span>
                <span className="medium-text">{transports}</span>
              </div>
              <div className="card__row-col flex-column">
                <span className="small-text tablet-none">Показ</span>
                <span className="medium-text">{display} ч</span>
              </div>
              <div className="card__row-col flex-column">
                <span className="small-text tablet-none">Бюджет</span>
                <span className="medium-text">{budget}$</span>
              </div>
            </div>
          </div>
          <div className="card__col third flex-auto">
            <div className="card__img-wrap">
              {photos.map((src, index) => (
                <Image key={index} src={src} />
              ))}
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
              <button type="button" className="btn-more second js-menu-btn">
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
  );
};

const Image = ({ src }: { src: string }) => {
  return (
    <div className="card__sm-img card__icon-wrap img-cover">
      <img src={src} alt="card" />
      <span className="card__icon fixed">
        <span className="small-icon img-wrap">
          <img
            src="https://static.biterika.team/brobooster/assets/images/icons/camera.svg"
            alt=""
          />
        </span>
      </span>
    </div>
  );
};

export default RowItem;
