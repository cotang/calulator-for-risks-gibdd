import params from '../../params';

export default {
  name: 'modal',
  components: {},
  mixins: [],
  data() {
    return {
      modalShown: false,
      occupationScreenShown: true,
      occupation: '',
      listItems: [],
      score: 0,
      detailsShown3: false,
      detailsShown5: false,
      resultsShown: false,
      steps: params.steps,
      risks: params.risks
    };
  },
  computed: {
    result: function() {
      let steps = this.steps;
      let listItems = this.listItems;
      let values = listItems.map(function(item) {
        let val;
        for (var stepNum in steps) {
          let stepType = steps[stepNum];
          stepType.forEach(function(step){
            if (item == step.key){
              val = step.value
            }
          });
        };
        return val;
      });

      let max = 0;
      values.forEach(function(item){
        if (item > max){
          max = item;
        }        
      })
      if (values.indexOf(-10) != -1 &&
      !listItems.some(elem => (/(?!37|56)^[35]/.test(elem))) &&
      max >= 80 ){
        max -= 10;
        console.log('minus 10')
      }
      return max;
    },
    resultText: function(){
      let score = this.score;
      let objectScore = this.risks;
      for (var key in objectScore) {
        if (score == key){
          return objectScore[key];
        }
      }
    }
  },

  mounted() {    
  },

  methods: {
    showModal(){
      this.modalShown = true;     
    },
    hideModal(){
      this.modalShown = false;
      this.occupationScreenShown = true;
      this.occupation = '';
      this.listItems = [];
      this.score = 0;
      this.detailsShown3 = false,
      this.detailsShown5 = false,
      this.resultsShown = false;
    },
    showResults(){
      if (this.listItems.length > 0 && this.result > 0) {
        this.resultsShown = true;
        this.score = this.result;
      }
    },
    moveToSteps(){
      if (this.occupation){
        this.occupationScreenShown = false;
      }      
    },
    showDetails3(){
      this.detailsShown3 = (this.detailsShown3) ? false : true;
    },
    showDetails5(){
      this.detailsShown5 = (this.detailsShown5) ? false : true;
    }
  }
};