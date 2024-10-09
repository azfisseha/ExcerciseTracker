app.component('card-collection-item', {
    props: {
        item: {
            type: Object,
            required: true
        },
        itemType: {
            type: String,
            required: true
        }
    },

    methods: {
        openWorkout(name){
            this.$emit('open-workout', name);
        }
    },
    template: `
    <div class="col">
    <div class="card">
        <div class="row g-0">
            <div class="col-2 d-flex align-items-center justify-content-center ">
                <a href="workout.html" 
                class="btn btn-primary rounded-circle text-center p-0" 
                style="width: 30px; height: 30px;"
                @click="openWorkout(item.name)">
                    <i class="m-0 fas fa-info" ></i>
                </a>
            </div>
            <div class="col-10">
                <div class="card-body d-flex justify-content-between ps-0">
                    <div class="ms-0 me-auto">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">Last completed: {{item.lastCompletionDate}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    `
});