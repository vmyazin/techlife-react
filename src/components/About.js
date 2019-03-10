import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section className="textual">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 m-t-2">
            <p>&lt; <NavLink to="/">на главную</NavLink></p>
            <h2>О нас</h2><br />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h3>Дмитрий</h3>
            <p>Рисует всё подряд, в последнее время даже шрифты. Любит технологии, неформальное кино, современное искусство, электронную музыку и большие города в разных странах. Знает много кофеен, которые навещает по всему миру.</p>

            <p>В Москве учился на прикладную математику, в Бостоне на дизайн и мультипликацию. Жил в Сан-Франциско, Пхукете, Риге, сейчас в основном в Москве.</p>

            <p>Кем только не работал, но в последние годы в основном в области разработки веб и мобильных приложений и платформ, как менеджер и дизайнер.</p>
          </div>

          <div className="col-xs-12 col-sm-6">
            <h3>Василий</h3>
            <p>Дизайнер по жизни и по призванию, Василий родился и вырос в городе Липецке, Россия. С юного возраста он тянулся к компьютерам, рисованию и программированию.</p>

            <p>В 12 лет он создавал карты для игры Doom и по ночам ему снились кошмары о монстрах с Марса. Примерно в это же время стал изучать C++, который так и не освоил, но приобрел общие навыки в программировании. В 14 лет сделал первый веб-сайт изучив HTML за одну ночь (!) –  о британской группе The Prodigy.</p>

            <p>Одновременно с общеобразовательной школой закончил художественную. В университете учился на художника-инженера. В 2002-м уехал на ПМЖ в США, где проживал и набирался профессионального опыта в Лос-Анджелесе, Сан-Франциско и Нью-Йорке. Последние пару лет путешествует по миру, предпочитая Латинскую Америку и Юго-Восточную Азию.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
