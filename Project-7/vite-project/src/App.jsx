import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

// images
import logo from "./image/logo.png";
import frame from "./image/frame.png";
import frame1 from "./image/frame (1).png";
import frame2 from "./image/frame (2).png";
import frame3 from "./image/frame (3).png";
import frame4 from "./image/frame (4).png";
import frame5 from "./image/frame (5).png";
import frame6 from "./image/frame (6).png";


import rectangle from "./image/rectangle.png";
import rectangle1 from "./image/rectangle (1).png";
import rectangle2 from "./image/rectangle (2).png";
import rectangle3 from "./image/rectangle (3).png";
import rectangle4 from "./image/rectangle (4).png";
import rectangle5 from "./image/rectangle (5).png";
import rectangle6 from "./image/rectangle (6).png";
import rectangle7 from "./image/rectangle (7).png";
import rectangle8 from "./image/rectangle (8).png";
import rectangle9 from "./image/rectangle (9).png";
import rectangle10 from "./image/rectangle (10).png";
import rectangle11 from "./image/rectangle (11).png";
import rectangle12 from "./image/rectangle (12).png";
import rectangle13 from "./image/rectangle (13).png";
import rectangle14 from "./image/rectangle (14).png";
import rectangle15 from "./image/rectangle (15).png";
import rectangle16 from "./image/rectangle (16).png";
import rectangle17 from "./image/rectangle (17).png";
import rectangle18 from "./image/rectangle (18).png";
import rectangle19 from "./image/rectangle (19).png";


import { useEffect } from "react";
import Card1 from "./components/Card1/Card1";
import Card2 from "./components/Card2/Card2";
import { useTranslation } from "react-i18next";

// images

// Material UI
import FacebookIcon from '@mui/icons-material/Facebook';
import Navbar from "./components/Drawer/Drawer";
import TemporaryDrawer from "./components/Drawer/Drawer";
import Switcher from "./components/Switcher/Switcher";
import Swiper1 from "./components/Swiper/Swiper";
// Material UI

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [t, i18n] = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="">
      <header className="container1 dark:bg-[gray] dark:text-white">

        <nav className="container111 flex justify-between sm:justify-center items-center p-[34px_31px]">
          <img  data-aos="fade-right" src={logo} className="sm:hidden" alt="" />
          <div className="flex gap-[20px] items-center">
            <ul data-aos="fade-down-right" className="flex items-center gap-[22px] xl:hidden">
              <li>{t("Главная")}</li>
              <li>{t("О нас")}</li>
              <li>{t("Продукция")}</li>
              <li>{t("Процесс")}</li>
              <li>{t("Надёжность")}</li>
              <li>{t("Клиенты")}</li>
              <li>{t("Связаться с нами")}</li>
            </ul>
            <div className="hidden xl:block">
        <TemporaryDrawer/>

        </div>
        <div data-aos="fade-up-left" className="flex gap-[10px]">
            <button className="text-[20px] font-[700]" onClick={()=> changeLanguage("ru")}>Ru</button>
            <button className="text-[20px] font-[700]" onClick={()=> changeLanguage("en")}>En</button>
            <Switcher/>
        </div>
            <button data-aos="fade-left" className=" p-[9px_20px] bg-[#212B31] text-white rounded-[4px]">
              {t("Заказать демо")}
            </button>
          </div>
        </nav>
        <div className="container11">
          <div className=" flex flex-col">
            <div className="flex flex-col items-center justify-center gap-[88px] mt-[74px]">
              <div className="max-w-[818px] mx-auto flex flex-col gap-[30px]">
                <h1 data-aos="fade-down" className="font-[400] text-[48px] text-center leading-[64px]">
                  {t("Умная доставка материалов для сложных строительных площадок")}
                </h1>
                <div data-aos="fade-up" className="flex gap-[16px] justify-center">
                  <button className="p-[9px_20px] bg-[#212B31] text-white rounded-[4px]">
                    {t("Заказать демо")}
                  </button>
                  <button className="p-[9px_20px] bg-none rounded-[4px] border-[1px] border-solid border-[#DADEDF]">
                    {t("Подробнее")}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-[36px]">
                <img data-aos="zoom-out" src={rectangle} alt="" />
                <img data-aos="zoom-out" src={rectangle1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="container1 py-[144px] dark:bg-black text-white">
        <div className="container11">
          <div className="flex justify-between lg:flex-wrap lg:justify-center lg:gap-[50px]">
            <Card1
              img={frame}
              h1={t("Повышение эффективности")}
              p={t("Эффективные проекты стоят дешевле и завершаются в срок.")}
            />

            <Card1
              img={frame}
              h1={t("Снижение потерь")}
              p={t("Тщательно отслеживайте движение стройматериалов, чтобы избежать краж и повреждений.")}
            />

            <Card1
              img={frame}
              h1={t("Повышение безопасности")}
              p={t("Обеспечьте здоровье и благополучие людей, работающих на вашей площадке.")}
            />
          </div>
        </div>
      </section>

      <section className="container1 dark:bg-[gray] dark:text-white">
        <div className="container11 flex flex-col gap-[40px] items-center justify-center">
          <div className="flex flex-col gap-[16px]">
            <h1 data-aos="fade-down" className="text-center dark:text-white text-[#72787D] font-[400] text-[32px] leading-[48px]">
              {t("Строительство - это хаос")}
            </h1>
            <p data-aos="fade-up" className="text-center dark:text-white text-[#72787D] font-[400] text-[20px] leading-[32px]">
              {t("Хаос может быть удивительной творческой силой, воздвигающая новые здания из пыли. Хаос вызывает несчастные случаи, задержки и потери. Он вводит проекты в стресс и разочарование. Это означает, что вы действительно не контролируете ситуацию.")}
            </p>
          </div>
          <img data-aos="zoom-out" src={rectangle2} alt="" />
        </div>
      </section>

      <section className="container1 py-[140px] dark:bg-[#4f4e4e] ">
        <div className="container11 flex flex-col gap-[168px]">
          <h1 data-aos="fade-up" className=" dark:text-[white] font-[400] text-[32px] text-center text-[#212B31] max-w-[781px] mx-auto leading-[48px]">
            {t("Пора навести порядок на вашей стройплощадке и взять под контроль свой проект")}
          </h1>
          <div className="flex flex-col gap-[71px]">
            <div className="flex justify-between items-start  lg:flex-wrap lg:justify-center lg:gap-[50px]">
              <div data-aos="fade-right" className="max-w-[542px] flex flex-col gap-[28px] items-start lg:items-center">
                <div className="flex flex-col gap-[16px]">
                  <h1 className="lg:text-center dark:text-[white]  font-[400] text-[32px] text-[#212B31] leading-[48px]">
                    {t("Мы заботимся о доставке на стройплощадку и о людях, которые на них рассчитывают")}
                  </h1>
                  <p className="font-[400] dark:text-[white]  text-[20px] text-[#72787D] leading-[32px]">
                    {t("Мы знаем всё о гордости от сияющего нового здания. Нам также известно всё о разочаровании от попыток завершить проект в срок и в рамках бюджета.")}
                  </p>
                </div>
                <button className="bg-[#FFD042] h-[16px]">
                  <p className="lg:text-center dark:text-[white]  relative top-[-12px]">
                    {t("Мы здесь, чтобы помочь.")}
                  </p>
                </button>
              </div>

              <img data-aos="fade-left" src={rectangle3} alt="" />
            </div>
            <div className="flex flex-col gap-[10px] lg:gap-[25px]">
              <div className="flex items-center justify-between lg:flex-wrap lg:items-center lg:justify-center lg:gap-[25px]">
                <img data-aos="fade-left" src={rectangle4} alt="" />
                <img data-aos="fade-left" src={rectangle5} alt="" />
                <img data-aos="zoom-out" src={rectangle6} alt="" />
                <img data-aos="fade-right" src={rectangle7} alt="" />
                <img data-aos="fade-right" src={rectangle8} alt="" />
              </div>
              <img data-aos="zoom-out" src={rectangle9} className="mx-auto" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="container1 dark:bg-[gray] dark:text-white ">
        <div className="container11  py-[140px] flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[16px] max-w-[827px] mx-auto">
            <h1 data-aos="zoom-out-up" className=" dark:text-white text-center text-[#72787D] font-[400] text-[32px] leading-[48px]">
              {t("Что такое СтройКонтроль?")}
            </h1>
            <p data-aos="zoom-out-down" className=" dark:text-white text-center text-[#72787D] font-[400] text-[20px] leading-[32px]">
            {t("СтройКонтроль - это интеллектуальная система управления доставкой, предоставляющая информацию и контроль материалов на сложных строительных площадках в режиме реального времени.")}
            </p>
          </div>

          <div className="lg:flex lg:flex-col lg:gap-[75px]">
            <div className="flex relative items-center justify-between">
              <div data-aos="zoom-out-right" className="flex flex-col gap-[19px]">
                <h1>{t("Отслеживайте доставку по всей цепочке поставок")}</h1>
                <p className="max-w-[500px] text-[#72787D] dark:text-white ">
                  {t("От поставщика до субподрядчика - вы всегда знаете, где находятся ваши материалы, благодаря чему обычные отходы уходят в прошлое и сокращаются несчастные случаи на месте.")}
                </p>
              </div>
              <img data-aos="zoom-out-right" src={rectangle10} className="md:absolute md:right-0 md:h-[100%] md:opacity-[25%]" alt="" />
            </div>

            <div data-aos="zoom-out-up" className="flex relative items-center justify-between md:justify-end">
              <img data-aos="zoom-out-right" src={rectangle10} className="md:absolute md:left-0 md:h-[100%] md:opacity-[25%]" alt="" />

              <div data-aos="zoom-out-right" className="flex flex-col gap-[19px]">
                <h1>{t("Оптимизируйте и контролируйте свое прибытие на место")}</h1>
                <p className="max-w-[500px] text-[#72787D] dark:text-white ">
                {t("Транспортные средства доставки прибывают в фиксированные промежутки времени в заранее назначенные отсеки, где разгрузочное оборудование готово и ждет их.")}
                </p>
              </div>
            </div>

            <div className="flex relative items-center justify-between">
              <div data-aos="zoom-out-right" className="flex flex-col gap-[19px]">
                <h1>Возьмите под контроль данные в режиме реального времени</h1>
                <p className="max-w-[500px] text-[#72787D] dark:text-white ">
                {t("Интеллектуальная отчетность дает вам возможность принимать решения в зависимости от того, как обстоят дела в данный момент. Больше никаких ручных отчетов по заливке бетона или ежемесячной проверки 10.000 накладных со счетами, все это доступно онлайн без каких-либо усилий.")}
                </p>
              </div>
              <img data-aos="zoom-out-right" src={rectangle10} className="md:absolute md:right-0 md:h-[100%] md:opacity-[25%]" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="container1 dark:bg-[black] dark:text-white">
        <div className="container11 py-[138px] flex flex-col gap-[43px]">
          <div className="flex flex-col gap-[16px] max-w-[827px] mx-auto">
            <h1  data-aos="zoom-in-left"   className="text-center text-[#72787D] font-[400] text-[32px] leading-[48px]">
              {t("Доставка стала проще")}
            </h1>
            <p  data-aos="zoom-in-left"  className="text-center text-[#72787D] font-[400] text-[20px] leading-[32px]">
          {t("Мы позаботимся обо всех ваших различных поставках и их многочисленных специализированных требованиях к разгрузке.")}
            </p>
          </div>
      <div className="flex flex-col gap-[22px] items-center">
          <div  data-aos="zoom-in-left" className="flex flex-wrap justify-between gap-y-[33px] sm:justify-center">
            <Card2 img={frame1} h1={t("Бетон")} p={t("Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.")} />
            <Card2 img={frame1} h1={t("Утилизация отходов")} p={t("Отходы контролируются и сортируются, а заполненность контейнеров отслеживается в цифровом виде.")} />
            <Card2 img={frame1} h1={t("Опалубка")} p={t("Вся опалубка отслеживается от прибытия до отправления, а ее состояние контролируется, что сводит к минимуму потери и повреждения.")} />
            <Card2 img={frame1} h1={t("Сборные панели")} p={t("Сборные панели прибывают по очереди, их хранение на месте отслеживается, а их установка планируется и контролируется.")} />
            <Card2 img={frame1} h1={t("Бетон")} p={t("Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.")} />
            <Card2 img={frame1} h1={t("Бетон")} p={t("Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.")} />
            <Card2 img={frame1} h1={t("Бетон")} p={t("Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.")} />
            <Card2 img={frame1} h1={t("Бетон")} p={t("Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.")} />
            <Card2 img={frame1} h1={t("Бетон")} p={t("Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.")} />

          </div>
        <div>
          <div className="flex items-end">
          <button className="bg-[#FFD042] h-[10px]">
                  <p className="relative top-[-13px]">
                    {t("и все остальные материалы,")}
                  </p>
                </button>
            <p className="text-[#72787D] md:hidden">{t("которые поступают или покидают вашу площадку")}</p>
          </div>
        </div>
      </div>
        </div>
      </section>

      <section className="container1 dark:bg-[#280606]">
        <div className="container11 pb-[144px] flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[16px] max-w-[857px] mx-auto">
            <h1 data-aos="zoom-out-up" className="text-center text-[#72787D] font-[400] text-[32px] leading-[48px]">
              {t("Надёжность")}
            </h1>
            <p data-aos="zoom-out-up" className="text-center text-[#72787D] font-[400] text-[20px] leading-[32px]">
          {t("Благодаря надёжному строительству выигрывают все - муниципальные органы выполняют свои обязанности перед гражданами, инвесторы получают сертификаты своих проектов, а генеральные подрядчики получают повышенную репутацию.")}
            </p>
          </div>
        <div className="flex flex-col gap-[62px]">
        <div className="">
          <Swiper1 img={frame2}/>


        </div>
        <div data-aos="fade-up"
     data-aos-duration="3000" className="p-[40px] flex items-center justify-between bg-[#F6F8F9] rounded-[5px]">
          <div className="flex gap-[24px] items-center">
            <img src={frame3} alt="" />
            <h1 className="font-[500] text-[18px] text-[#212B31] ">
              {t("Надёжная конструкция СтройКонтроль входит в стандартную комплектацию.")}
            </h1>
            </div>
          <button className="p-[13px_25px] bg-[] border-[#DADEDF] rounded-[4px] border-solid border-[1px]">{t("Подробнее")}</button>
        </div>
        </div>  
        </div>
      </section>

      <section className="container1 bg-[#212B31] text-white overflow-x-hidden">
        <div className="container11 p-[144px_0_118px_0] flex flex-col gap-[127px]">
        <div className="flex justify-between xl:relative">
          <div className="flex flex-col gap-[50px] items-start">
            <h1 data-aos="zoom-out-right" className="text-[32px]">{t("Создан для строительства")}</h1>

            <div className="flex flex-col gap-[24px]">
              <div data-aos="zoom-out-right" className="flex items-start gap-[32px]">
                <img src={rectangle11} className="mt-[7px]" alt="" />
              <div className="max-w-[429px] flex flex-col gap-[10px]">
                <h1 className="">{t("Хорошо виден в любых условиях")}</h1>
                <p className=" opacity-[75%]">{t("Независимо от того, солнечно или темно, найдется подходящий режим экрана")}</p>
              </div>
              </div>

              <div data-aos="zoom-out-right" className="flex items-start gap-[32px]">
                <img src={rectangle11} className="mt-[7px]" alt="" />
              <div className="max-w-[532px] flex flex-col gap-[10px]">
                <h1 className="">{t("Поддержка международных языков")}</h1>
                <p className=" opacity-[75%]">На современной стройке работают люди со всего мира. Язык не является проблемой для СтройКонтроля.</p>
              </div>
              </div>

              <div data-aos="zoom-out-right" className="flex items-start gap-[32px]">
                <img src={rectangle11} className="mt-[7px]" alt="" />
              <div className="max-w-[543px] flex flex-col gap-[10px]">
                <h1 className="">Работает на любом устройстве - мобильном телефоне, планшете, ноутбуке</h1>
                <p className=" opacity-[75%]">Люди на разных должностях используют разные устройства. СтройКонтроль автоматически настраивается в соответствии с требованиями. Вы также можете проецировать панели мониторинга живого проекта на настенные экраны.</p>
              </div>
              </div>

            </div>

            <div data-aos="zoom-out-right" className="flex gap-[16px] justify-center md:mx-auto">
                  <button className="p-[9px_20px] bg-[#FFFFFF] text-black rounded-[4px]">
                    {t("Заказать демо")}
                  </button>
                  <button className="p-[9px_20px] bg-none rounded-[4px] border-[1px] border-solid border-[#DADEDF]">
                    {t("Подробнее")}
                  </button>
                </div>
          </div>
          <img src={rectangle12} data-aos="zoom-out-left" className=" xl:absolute xl:right-0 xl:opacity-[20%] xl:h-[100%]" alt="" />
        </div>
 

 
 
 
 
 
 
          <div className=" flex justify-between lg:flex-wrap lg:justify-center lg:gap-[75px]">

            <Card1 img={frame4} h1="Привлечение субподрядчика" p="Для выполнения этой работы вам понадобятся ваши субподрядчики. У нас есть проверенный и надежный процесс для этого."/>
            <Card1 img={frame4} h1="Привлечены ключевые поставщики" p="У нас уже есть ключевые поставщики, использующие программное обеспечение, что обеспечивает еще больший контроль и прозрачность информации."/>
            <Card1 img={frame4} h1="100% соответствие" p="У нас есть безупречный список обеспечения соответствия требованиям, которые необходимы вам для успешного выполнения проекта с помощью СтройКонтроль."/>
          </div>
        </div>
      </section>

      <section className="container1 dark:bg-[gray] dark:text-white">
        <div className="container11 pt-[143px] pb-[50px] flex justify-between lg:flex-wrap lg:justify-center lg:gap-[100px]">
          <div className="flex flex-col gap-[60px] items-start">
            <div className="max-w-[462px] flex flex-col gap-[21px]">
              <h1 data-aos="zoom-out-left" className="text-[#212B31] dark:text-white  text-[32px] lg:text-center">Как с нами работать</h1>
              <p data-aos="zoom-out-left" className="text-[#72787D] dark:text-white  text-[20px] lg:text-center">Начать работу со СтройКонтроль легко, достаточно заказать демо-версию.</p>
            </div>
            <img data-aos="zoom-out-left" src={rectangle13} className="lg:mx-auto" alt="" />
          </div>

          <div className="flex flex-col items-start gap-[30px] lg:items-center">
          <div className="flex flex-col gap-[30px]">
            <div data-aos="zoom-out-right" className="flex items-start max-w-[520px] gap-[32px] lg:flex-col lg:items-center">
              <div className="p-[11px_17px] text-[#72787D] dark:text-white  border-[#DADEDF] border-solid border-[1px]">
                1
              </div>
              <div className="flex flex-col gap-[10]">
                <h1 className="text-[#212B31] text-[17px] dark:text-white  lg:text-center">Заказать демо</h1>
                <p className="font-[400] leading-[24px] text-[16px] text-[#72787D] dark:text-white  lg:text-center">Вы увидите презентацию, в которой подробно объясняется, как работает СтройКонтроль для решения задач строительной логистики в таких сложных проектах, как ваш.</p>
                </div>
            </div>

            <div data-aos="zoom-out-right" className="flex items-start max-w-[520px] gap-[32px] lg:flex-col lg:items-center">
              <div className="p-[11px_17px] text-[#72787D] dark:text-white  border-[#DADEDF] border-solid border-[1px]">
                2
              </div>
              <div className="flex flex-col gap-[10]">
                <h1 className="text-[#212B31] text-[17px] dark:text-white  lg:text-center">Согласование сделки</h1>
                <p className="font-[400] leading-[24px] dark:text-white  text-[16px] text-[#72787D] lg:text-center">Мы обсудим ваш строительный проект и предложим реализацию СтройКонтроль, которая идеально соответствует вашим потребностям и будет иметь для вас ценность.</p>
                </div>
            </div>

            <div data-aos="zoom-out-right" className="flex items-start max-w-[520px] gap-[32px] lg:items-center lg:flex-col">
              <div className="p-[11px_17px] text-[#72787D] dark:text-white  border-[#DADEDF] border-solid border-[1px]">
                3
              </div>
              <div className="flex flex-col gap-[10]">
                <h1 className="text-[#212B31] text-[17px] dark:text-white  lg:text-center">Подготовка</h1>
                <p className="font-[400] leading-[24px] dark:text-white  text-[16px] text-[#72787D] lg:text-center">Мы полностью обучаем вашу команду тому, как использовать систему, с помощью онлайн-видеоуроков и обеспечиваем постоянную всестороннюю поддержку.</p>
                </div>
            </div>

            <div data-aos="zoom-out-right" className="flex items-start max-w-[520px] gap-[32px] lg:flex-col lg:items-center">
              <div className="p-[11px_17px] dark:text-white  text-[#72787D] border-[#DADEDF] border-solid border-[1px]">
                4
              </div>
              <div className="flex flex-col gap-[10]">
                <h1 className="text-[#212B31] text-[17px] dark:text-white  lg:text-center">Внедрение и интеграция</h1>
                <p className="font-[400] dark:text-white  leading-[24px] text-[16px] text-[#72787D] lg:text-center">Мы настраиваем программное обеспечение так, чтобы оно точно моделировало вашу площадку, а затем помогаем вам интегрировать его с программным обеспечением Business Intelligence для получения новых мощных аналитических данных.</p>
                </div>
            </div>
          </div>
          <div data-aos="zoom-out-right" className="flex gap-[16px] justify-center">
                  <button className="p-[9px_20px] bg-[#212B31] text-white rounded-[4px]">
                    {t("Заказать демо")}
                  </button>
                  <button className="p-[9px_20px] bg-none rounded-[4px] border-[1px] border-solid border-[#DADEDF]">
                    {t("Подробнее")}
                  </button>
                </div>
          </div>

        </div>
      </section>

      <section className="container1 dark:bg-[black] dark:text-white">
        <div className="container11 pt-[96px] pb-[50px] flex flex-col gap-[55px]">
        <div className="flex flex-col gap-[16px] max-w-[827px] mx-auto">
            <h1 data-aos="zoom-out-up" className="text-center dark:text-white text-[#212B31] font-[400] text-[32px] leading-[48px]">
              {t("Почему нужно выбрать нас?")}
            </h1>
            <p data-aos="zoom-out-up" className="text-center dark:text-white text-[#72787D] font-[400] text-[20px] leading-[32px]">
          {t("В строительной логистике всегда есть возможности для улучшения.")}
            </p>
          </div>

          <div className="flex justify-between items-start lg:flex-wrap lg:justify-center lg:gap-[75px]">
            <div className="flex flex-col gap-[30px] lg:order-2">
              <div data-aos="flip-left" className="flex gap-[16px] items-start max-w-[394px] lg:flex-col lg:items-center">
                <img src={frame5} alt="" />
                <div className="flex flex-col gap-[10px]">
                  <h1 className="font-[400] text-[18px] dark:text-white text-[#212B31] leading-[24px] lg:text-center">Отмеченное наградами ПО</h1>
                  <p className="font-[400] text-[16px] dark:text-white text-[#72787D] leading-[24px] lg:text-center">Всемирно известное программное обеспечение, признанное государственными учреждениями, инновационными группами и техническими организациями</p>
                </div>
              </div>

              <div data-aos="flip-left" className="flex gap-[16px] items-start max-w-[394px] lg:flex-col lg:items-center">
                <img src={frame5} alt="" />
                <div className="flex flex-col gap-[10px]">
                  <h1 className="font-[400] text-[18px] dark:text-white text-[#212B31] leading-[24px] lg:text-center">Большой потенциал</h1>
                  <p className="font-[400] text-[16px] dark:text-white text-[#72787D] leading-[24px] lg:text-center">Входит в топ-25 самых многообещающих стартапов ConTech по версии Cemex Ventures, Moscow Consulting Group, BuiltWorld и PwC</p>
                </div>
              </div>

              <div data-aos="flip-left" className="flex gap-[16px] items-start max-w-[394px] lg:flex-col lg:items-center">
                <img src={frame5} alt="" />
                <div className="flex flex-col gap-[10px]">
                  <h1 className="font-[400] text-[18px] dark:text-white text-[#212B31] leading-[24px] lg:text-center">Выбор лидеров рынка</h1>
                  <p className="font-[400] text-[16px] dark:text-white text-[#72787D] leading-[24px] lg:text-center">Рекомендуемый поставщик технологий для 3 из 10 ведущих генеральных подрядчиков в Европе</p>
                </div>
              </div>

              <div data-aos="flip-left" className="flex gap-[16px] items-start max-w-[394px] lg:items-center lg:flex-col">
                <img src={frame5} alt="" />
                <div className="flex flex-col gap-[10px]">
                  <h1 className="font-[400] text-[18px] dark:text-white text-[#212B31] leading-[24px] lg:text-center">Устойчивое развитие и безопасность</h1>
                  <p className="font-[400] text-[16px] dark:text-white text-[#72787D] leading-[24px] lg:text-center">Способствует снижению выбросов CO2 и повышает безопасность на месте</p>
                </div>
              </div>
            </div>

            <div data-aos="flip-right" className="p-[60px_90px] dark:bg-[gray] bg-[#F6F8F9]  relative flex flex-col gap-[28px] lg:order-1">
              <h1 className="font-[400] text-[30px] max-w-[435px] dark:text-white text-[#212B31] leading-[48px] lg:text-center">Мы видим огромный потенциал в таких решениях, как СтройКонтроль, и хотим использовать их для улучшения наших строительных процессов.</h1>
              <div className="flex gap-[8px] items-center dark:text-white lg:flex-col">
                <img src={rectangle14} alt="" />
                <div>
                  <h1 className=" font-[400] text-[16px] dark:text-white  text-[#212B31] leading-[19px] lg:text-center">Волков Матвей</h1>
                  <p className="font-[400] text-[16px] dark:text-white text-[#72787D] leading-[19px] lg:text-center">Генеральный директор ООО “СпецСтрой”</p>
                </div>
              </div>
              <img src={frame6} className=" absolute top-[40px] left-[40px]" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="container1 dark:bg-[#4b4b4b]">
        <div className="container11 pt-[139px] pb-[50px] flex justify-center gap-[110px] md:flex-wrap">
          <div data-aos="flip-up" className="flex flex-col gap-[32px] items-center">
            <img src={rectangle15} alt="" />
            <p className="max-w-[109px] text-[#72787D] dark:text-white text-center">50 лучших инструментов ConTech</p>
          </div>
          <div className="flex flex-col gap-[41px] items-center">
          <div data-aos="flip-up" className="flex flex-col gap-[44px] items-center">
            <img src={rectangle16} alt="" />
            <p className="max-w-[109px] text-[#72787D] dark:text-white text-center">25 лучших стартапов ConTech в ЕС</p>
          </div>

          <div data-aos="flip-up" className="flex flex-col gap-[32px] items-center">
            <img src={rectangle17} alt="" />
            <p className="max-w-[109px] text-[#72787D] dark:text-white text-center">2018 - 50 лучших стартапов ЕС PropTech</p>
          </div>
          </div>
          <div>
          <div data-aos="flip-up" className="flex flex-col gap-[33px] items-center">
            <img src={rectangle18} alt="" />
            <p className="max-w-[109px] text-[#72787D] dark:text-white text-center">50 лучших стартапов Global ConTech</p>
          </div>
          </div>
        </div>
      </section>

      <section className="container1 dark:bg-[#5d3c00]">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="container11 pt-[150px] pb-[75px]">
      <div className=" relative flex flex-col p-[117px_38px] gap-[54px]">
          <h1 className="font-[400] text-center text-[48px] text-[#212B31] dark:text-[gray] leading-[64px]">Готовы оптимизировать логистику доставки для вашего сложного проекта?</h1>
          <div className="flex gap-[16px] justify-center">
                  <button className="p-[9px_20px] bg-[#212B31] text-white rounded-[4px]">
                    {t("Заказать демо")}
                  </button>
                  <button className="p-[9px_20px] bg-[white] rounded-[4px] border-[1px] border-solid border-[#DADEDF]">
                    {t("Связаться с нами")}
                  </button>
                </div>
                <img src={rectangle19} className=" absolute top-0 left-0 w-[100%] h-[100%] z-[-1]" alt="" />

      </div>
        </div>
      </section>

      <footer className="container1 dark:bg-[#4b4b4b] dark:text-white">
        <div className="container11 pt-[150px] pb-[160px] flex justify-between items-start sm:justify-center">
          <div  className="flex flex-col gap-[21px] items-start text-[#72787D]">
            <img src={logo} alt="" />
            <div className="flex flex-col gap-[10px]">
              <div>
                <p className="sm:text-center">г. Москва</p>
                <p className="sm:text-center">Пресненская наб., 88, оф. 527</p>
              </div>

              <div>
                <p className="sm:text-center">info@stroycontrol.ru</p>
                <p className="sm:text-center">+7 (945) 123-45-67</p>
              </div>
            </div>
          <FacebookIcon className="sm:mx-auto text-[#73787C80]"/>
          </div>

          <div className="flex flex-col gap-[22px] sm:hidden">
            <h1>Наш продукт</h1>
            <div className="flex flex-col gap-[8px] text-[#72787D]">
              <span>Процесс</span>
              <span>Продукция</span>
            </div>
          </div>

          <div  className="flex flex-col gap-[22px] sm:hidden">
            <h1>Обслуживание</h1>
            <div className="flex flex-col gap-[8px] text-[#72787D]">
              <span>Клиенты</span>
              <span>Надёжность</span>
            </div>
          </div>

          <div className="flex flex-col gap-[22px] sm:hidden">
            <h1>Компания</h1>
            <div className="flex flex-col gap-[8px] text-[#72787D]">
              <span>О нас</span>
              <span>Связаться с нами</span>
            </div>
          </div>
        </div>
      </footer>

      <div className="container1 dark:bg-[black] dark:text-white">
        <div className="container11  flex justify-between py-[32px] border-[#DADEDF] border-solid border-t-[1px]">
          <p>© 2020 СтройКонтроль, Все права защищены.</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </div>
  );
}

export default App;
