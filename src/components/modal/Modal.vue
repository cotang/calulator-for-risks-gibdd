<template>
  <div>
    <button type="button" :class="$style.btn" @click="showModal">Рассчитать риск</button>
    <section v-if="modalShown" :class="$style.modal">
      <div :class="$style.bg" @click="hideModal"></div>
      <div :class="$style.inner">

        <section :class="$style.section" v-if="occupationScreenShown">
          <h2 :class="$style.title">Вид деятельности</h2>
          <div :class="$style.body">
            <ol>
              <li>
                <input type="radio" id="occupation-roads" value="roads" v-model="occupation">
                <label for="occupation-roads">Эксплуатация автомобильных дорог</label>
              </li>
              <li>
                <input type="radio" id="occupation-vehicle" value="vehicle" v-model="occupation">
                <label for="occupation-vehicle">Эксплуатация транспортных средств, работы и услуги по техническому обслуживанию и ремонту транспортных средств</label>
              </li>
            </ol>
          </div>
          <div :class="$style.btn_wrapper">
            <button type="button" :class="$style.btn" @click="moveToSteps">Далее</button>
          </div>
        </section>

        <section :class="$style.section" v-if="!occupationScreenShown && !resultsShown">
          <section v-if="occupation=='roads'">
            <h3 :class="$style.title">Эксплуатация автомобильных дорог (их участков) классов и категорий:</h3>
            <div :class="$style.body">
              <ol>
                <li v-for="step in steps[2]">
                  <input type="checkbox" :id='"item" + step.key' :value="step.key" v-model="listItems">
                  <label :for='"item" + step.key'>{{ step.text }}</label>
                </li>
              </ol>
            </div>

            <a href="#" :class="$style.link" @click.prevent="showDetails3">Наличие нарушений:</a>
            <div :class="$style.body" v-if="detailsShown3">
              <ol>
                <li v-for="step in steps[3]">
                  <input type="checkbox" :id='"item" + step.key' :value="step.key" v-model="listItems">
                  <label :for='"item" + step.key'>{{ step.text }}</label>
                </li>
              </ol>
            </div>
          </section>

          <section v-if="occupation=='vehicle'">
            <h3 :class="$style.title">Вид работ / услуг:</h3>
            <div :class="$style.body">
              <ol>
                <li v-for="step in steps[4]">
                  <input type="checkbox" :id='"item" + step.key' :value="step.key" v-model="listItems">
                  <label :for='"item" + step.key'>{{ step.text }}</label>
                </li>
              </ol>
            </div>
            <a href="#" :class="$style.link" @click.prevent="showDetails5">Наличие нарушений:</a>
            <div :class="$style.body" v-if="detailsShown5">
              <ol>
                <li v-for="step in steps[5]">
                  <input type="checkbox" :id='"item" + step.key' :value="step.key" v-model="listItems">
                  <label :for='"item" + step.key'>{{ step.text }}</label>
                </li>
              </ol>
            </div>
          </section>

          <div :class="$style.btn_outer" v-if="occupation">
            <div :class="$style.btn_wrapper" v-if="listItems.some(elem => (/^[24]/.test(elem)))">
              <button type="button" :class="$style.btn" @click="showResults">Показать результаты</button>
            </div>
            <div :class="$style.btn_wrapper" v-else>
              <button type="button" :class="$style.btn" @click="hideModal">Отмена</button>
            </div>
          </div>
        </section>

        <section :class="$style.section" v-if="resultsShown">
          <h3 :class="$style.title">Результат расчёта:</h3>
          <div :class="$style.body">
            <p :class="$style.results">{{resultText}}</p>  
          </div>    
          <div :class="$style.btn_wrapper">
            <button type="button" :class="$style.btn" @click="hideModal">Закрыть</button>
          </div>          
        </section>

      </div>
    </section>
  </div>
</template>


<script src="./modal.js"></script>
<style src="./modal.scss" lang="scss" module></style>