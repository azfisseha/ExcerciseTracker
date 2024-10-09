app.component('AppNav', {
   data() {
        return {

        }
   },

    props: {

    },

    methods: {

    },

    computed() {

    },

    template: `
      <header>
    <nav class="navbar navbar-expand navbar-light bg-light d-none d-sm-flex">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">Workout</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav  ms-auto mb-2 mb-0">
                    <li class="nav-item">
                        <a class="btn btn-rounded btn-primary" href="workout_collection.html">Start A Workout</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="workout_collection.html">Workouts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">History</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="exercises.html">Exercises</a>
                    </li>
                    <!--                    <li class="nav-item">
                                            <a class="nav-link" href="#">Community</a>
                                        </li>-->
                </ul>
            </div>
        </div>
    </nav>
    <nav class="d-sm-none fixed-bottom bg-light py-2">
        <div class="container d-flex justify-content-around">
            <button class="btn btn-primary btn-sm text-center rounded-circle p-3">
                <i class="fas fa-play"></i>
            </button>
            <button class="btn btn-outline-primary btn-sm text-center rounded-circle p-3">
                <i class="fas fa-plus"></i>
            </button>
            <button class="btn btn-outline-primary btn-sm text-center rounded-circle p-3">
                <i class="fas fa-history"></i>
            </button>
            <button class="btn btn-outline-primary btn-sm text-center rounded-circle p-3">
                <i class="fas fa-dumbbell"></i>
            </button>
            <!--           <button class="btn btn-outline-primary btn-sm text-center rounded-circle p-3">
                            <i class="fas fa-users"></i>
                        </button>-->
        </div>
    </nav>
      </header>
    `
});