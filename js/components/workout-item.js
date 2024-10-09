app.component('WorkoutItem', {
    data: function() {
        return{
            workoutActive: false,
        }
    },

    props: {
        active: {
            type: Boolean,
            default: false,
        },
        workout: {
            type: Object,
        }
    },

    emits: ['delete-workout'],

    methods: {
        deleteWorkout(workout){
            this.$emit('delete-workout', workout);
        },
        startWorkout(){
            this.workoutActive = true;
        }
    },

    mounted(){
      this.workoutActive = this.active;

      this.$nextTick(() => {
        if(this.$refs.exerciseItems && this.$refs.exerciseItems.length > 0){
          this.$refs.exerciseItems[0].toggleExercise();
        }
      });
    },

    template: `
      <div class="container pt-5 pb-2">
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="ms-lg-5">{{this.workout.name}}</h2>
            <span class="d-flex gap-4"
              v-if="!this.workoutActive"
            >
            <button 
              class="btn btn-outline-danger btn-sm me-lg-5"
              @click="startWorkout()"
            >
              <i class="fas fa-play"></i>
            </button>
            <button 
              class="btn btn-outline-danger btn-sm me-lg-5"
              @click="deleteWorkout(workout)"
            >
              <i class="fas fa-trash"></i>
            </button>
            </span>

            <span class="d-flex gap-4"
              v-else
            >
              <h3>1:02</h3>
            </span>

          </div>
          <div class="accordion accordion-flush" id="workoutAccordion">
            <exercise-item
                v-for="exercise in this.workout.exercises"
                :exercise="exercise"
                :active=this.workoutActive
                ref="exerciseItems"
            ></exercise-item>
          </div>
      </div>
    `
});