import React from "react";
import Icon from "@/assets/iconMedium.svg";

const Buttons = () => {
  return (
    <div className="flex-row">
      <a href="new-campaing.html" className="btn secondary">
        Создать кампанию
      </a>
      <div className="nav-wrap">
        <button type="button" className="btn-main ml-5 js-open-nav">
          <svg className="icon icon-medium mr-1">
            <use xlinkHref="#globe"></use>
          </svg>
          <span className="medium-text text-medium color-sub">Русский</span>
        </button>
        <div className="nav-wrapper js-nav">
          <div className="nav js-tabs">
            <div className="nav__wrap">
              <ul className="nav__head js-tabs-buttons">
                <li data-tab="tab-one" className="nav__head-btn active">
                  Язык
                </li>
                <li data-tab="tab-two" className="nav__head-btn">
                  Валюта
                </li>
              </ul>
              <div className="nav__content">
                <div className="nav__content-tab active" data-content="tab-one">
                  <div className="nav__picker-wrap js-lang-picker">
                    <div className="nav__top mb-15 mb-md-2">
                      <h4 className="sub-title mb-1 mb-md-15">Для вас</h4>
                      <div className="nav__row">
                        <button
                          type="button"
                          data-language="en"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-4.png"
                              alt="flag"
                            />
                          </span>
                          <span> English </span>
                        </button>
                        <button
                          type="button"
                          data-language="zh"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-2.png"
                              alt="flag"
                            />
                          </span>
                          <span> 中国人 </span>
                        </button>
                        <button
                          type="button"
                          data-language="es"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-3.png"
                              alt="flag"
                            />
                          </span>
                          <span> Español </span>
                        </button>
                      </div>
                    </div>
                    <div className="nav__block">
                      <h4 className="sub-title mb-1 mb-md-15">Все языки</h4>
                      <div className="nav__row">
                        <button
                          type="button"
                          data-language="ru"
                          className="nav__lang-btn nav__lang-btn--mob active"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-1.jpg"
                              alt="flag"
                            />
                          </span>
                          <span>Русский</span>
                        </button>
                        <button
                          type="button"
                          data-language="zh"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-2.png"
                              alt="flag"
                            />
                          </span>
                          <span> 中国人 </span>
                        </button>
                        <button
                          type="button"
                          data-language="es"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-3.png"
                              alt="flag"
                            />
                          </span>
                          <span> Español </span>
                        </button>
                        <button
                          type="button"
                          data-language="en"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-4.png"
                              alt="flag"
                            />
                          </span>
                          <span> English </span>
                        </button>
                        <button
                          type="button"
                          data-language="th"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-5.png"
                              alt="flag"
                            />
                          </span>
                          <span> ไทย </span>
                        </button>
                        <button
                          type="button"
                          data-language="pt"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-6.png"
                              alt="flag"
                            />
                          </span>
                          <span> Português </span>
                        </button>
                        <button
                          type="button"
                          data-language="id"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-7.png"
                              alt="flag"
                            />
                          </span>
                          <span> Bahasa Indonesia </span>
                        </button>
                        <button
                          type="button"
                          data-language="vi"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-8.png"
                              alt="flag"
                            />
                          </span>
                          <span> Tiếng Việt </span>
                        </button>
                        <button
                          type="button"
                          data-language="fr"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-9.png"
                              alt="flag"
                            />
                          </span>
                          <span> Français </span>
                        </button>
                        <button
                          type="button"
                          data-language="hi"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-10.png"
                              alt="flag"
                            />
                          </span>
                          <span> हिन्दी </span>
                        </button>
                        <button
                          type="button"
                          data-language="it"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-11.png"
                              alt="flag"
                            />
                          </span>
                          <span> Italiano </span>
                        </button>
                        <button
                          type="button"
                          data-language="de"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-12.png"
                              alt="flag"
                            />
                          </span>
                          <span> Deutsch </span>
                        </button>
                        <button
                          type="button"
                          data-language="tr"
                          className="nav__lang-btn nav__lang-btn--mob"
                        >
                          <span className="nav__lang-icon">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/countries/flag-13.png"
                              alt="flag"
                            />
                          </span>
                          <span> Türkçe </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav__content-tab" data-content="tab-two">
                  <div className="nav__picker-wrap js-lang-picker">
                    <div className="nav__top mb-15 mb-md-2 md-lg-15">
                      <h4 className="sub-title mb-1 mb-md-15">Для вас</h4>
                      <div className="nav__row">
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency active"
                        >
                          <span className="mb-05">Российский рубль</span>
                          <span className="small-text color-sub">RUB – ₽</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Американский доллар</span>
                          <span className="small-text color-sub">USD – $</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Евро</span>
                          <span className="small-text color-sub">EUR – €</span>
                        </button>
                      </div>
                    </div>
                    <div className="nav__block">
                      <h4 className="sub-title mb-1 mb-md-15">Вся валюта</h4>
                      <div className="nav__row">
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Российский рубль</span>
                          <span className="small-text color-sub">RUB – ₽</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Евро</span>
                          <span className="small-text color-sub">EUR – €</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Евро</span>
                          <span className="small-text color-sub">EUR – €</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Американский доллар</span>
                          <span className="small-text color-sub">USD – $</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Сингапурский доллар</span>
                          <span className="small-text color-sub">SGD – $S</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Сингапурский доллар</span>
                          <span className="small-text color-sub">SGD – $S</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Австралийский доллар</span>
                          <span className="small-text color-sub">AUD – A$</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Китайский юань</span>
                          <span className="small-text color-sub">CNY – ¥</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Китайский юань</span>
                          <span className="small-text color-sub">CNY – ¥</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Индонезийская рупия</span>
                          <span className="small-text color-sub">IDR – Rp</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Тайский бат</span>
                          <span className="small-text color-sub">THB – ฿</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Тайский бат</span>
                          <span className="small-text color-sub">THB – ฿</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Индонезийская рупия</span>
                          <span className="small-text color-sub">IDR – Rp</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Филипинское песо</span>
                          <span className="small-text color-sub">PHP – ₱</span>
                        </button>
                        <button
                          type="button"
                          data-currency="#"
                          className="nav__lang-btn nav__lang-btn--currency"
                        >
                          <span className="mb-05">Филипинское песо</span>
                          <span className="small-text color-sub">PHP – ₱</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn-main ml-4">
        <Icon />
      </button>
    </div>
  );
};

export default Buttons;
