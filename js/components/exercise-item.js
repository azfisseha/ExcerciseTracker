app.component('ExerciseItem', {
    data: function() {
            return{
                accordionCollapse: null,
            }
    },

    props: {
        active: {
            type: Boolean,
            default: false,
        },
        exercise: {
            type: Object,
            required: true,
        }
    },

    emits: ['delete-set'],

    methods: {
        toggleExercise(){
            this.accordionCollapse.toggle();
        },
        deleteSet(set){
            this.exercise.sets.splice(this.exercise.sets.indexOf(set), 1);
        }
    },

    mounted(){
        this.accordionCollapse = $(this.$refs.theAccordion);
    },

    template: `
    <div class="accordion-item">
                <h2 class="accordion-header">
                    <div class="d-flex justify-content-between align-items-center bg-primary p-1">
                        <button class="accordion-button bg-primary text-white me-2" type="button"
                                @click="toggleExercise()">
                            {{exercise.name}}
                        </button>
                        <a href="" class="btn btn-outline-light btn-sm">
                            <i class="fas fa-ellipsis-v"></i>
                        </a>
                    </div>
                </h2>
                <div class="accordion-collapse collapse" ref="theAccordion">
                    <div class="accordion-body">
                      <set-item
                        v-for="set in exercise.sets"
                        :set="set"
                        :active=this.active
                        @delete-set="deleteSet(set)">
                      </set-item>
                      
                        <div class="w-100 d-flex justify-content-center">
                            <!--TODO: match the created set with the type of workout-->
                            <button 
                                @click="exercise.sets.push({reps: exercise.sets[exercise.sets.length -1].reps, 
                                    weight: exercise.sets[exercise.sets.length -1].weight})"
                                class="btn btn-primary">
                                Add Set
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    `
});