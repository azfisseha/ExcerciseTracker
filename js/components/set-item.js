app.component('SetItem', {
    data(){
        return {

        }
    },

    props: {
        active: {
            type: Boolean,
            default: false,
        },
        exerciseType: {
            type: String
        },
        set: {
            type: Object,
            required: true,
        }
    },

    computed: {

    },

    mounted(){

    },

    methods: {
        deleteSet(set) {
            this.$emit('delete-set', set)
        }
    },

    emits: ['delete-set'],

    template: `
      <div class="d-flex flex-direction-row justify-content-between">
      <div>
        <label class="form-label">Reps
          <input type="number" class="form-control" v-bind="set.reps" placeholder="10" v-model="set.reps">
        </label>
      </div>
      <div>
        <label class="form-label">Weight
          <input type="number" class="form-control" v-bind="set.weight" placeholder="60" v-model="set.weight">
        </label>
      </div>
      <div class="d-flex align-items-end">
        <button class="btn btn-success"
          v-if="this.active"
        ><i class="fas fa-check"></i></button>
        <button class="btn btn-danger" @click="deleteSet(set)"><i class="fas fa-minus"></i></button>
      </div>
      </div>
    `
});