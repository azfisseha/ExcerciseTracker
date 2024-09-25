const app = Vue.createApp({
    data: function(){
        return {
            currentWorkout: "Push",
            savedExercises: [
                {
                    name: 'Incline Bench Press',
                    type: 'Barbell',
                    muscle: 'Chest',
                },
                {
                    name: 'Shoulder Press',
                    type: 'Dumbbell',
                    muscle: 'Shoulder',
                },
                {
                    name: 'Pushups',
                    type: 'Bodyweight',
                    muscle: 'Chest',
                },
                {
                    name: 'Treadmill',
                    type: 'Cardio',
                    muscle: 'Cardio',
                },
                {
                    name: 'Tricep Extensions',
                    type: 'Dumbbell',
                    muscle: 'Triceps'
                },
                {
                    name: 'Bicep Curls',
                    type: 'Dumbbell',
                    muscle: 'Biceps'
                },
                {
                    name: 'Pull Ups',
                    type: 'Bodyweight',
                    muscle: 'Lats'
                },
                {
                    name: 'Lat Pulldowns',
                    type: 'Machine',
                    muscle: 'Lats',
                },
                {
                    name: 'Leg Extensions',
                    type: 'Machine',
                    muscle: 'Quads',
                },
                {
                    name: 'Leg Curls',
                    type: 'Machine',
                    muscle: 'Hamstrings',
                },
                {
                    name: 'Leg Press',
                    type: 'Machine',
                    muscle: 'Glutes',
                }
            ],
            savedWorkouts: [
                {
                    name: 'Push',
                    lastCompletionDate: '9/2',
                    exercises: [
                        {
                            name: 'Incline Bench Press',
                            type: 'Barbell',
                            muscle: 'Chest',
                            sets: [
                                {
                                    reps: 10,
                                    weight: 180,
                                    complete: true
                                },
                                {
                                    reps: 10,
                                    weight: 180,
                                    complete: false
                                },
                                {
                                    reps: 0,
                                    weight: 180,
                                    complete: false
                                }
                            ]
                        },
                        {
                            name: 'Shoulder Press',
                            type: 'Dumbbell',
                            muscle: 'Shoulder',
                            sets: [
                                {
                                    reps: 15,
                                    weight: 30,
                                    complete: true
                                },
                                {
                                    reps: 12,
                                    weight: 30,
                                    complete: false
                                },
                                {
                                    reps: 0,
                                    weight: 30,
                                    complete: false
                                }
                            ]
                        },
                        {
                            name: 'Pushups',
                            type: 'Bodyweight',
                            muscle: 'Chest',
                            sets: [
                                {
                                    reps: 10,
                                    complete: true
                                },
                                {
                                    reps: 10,
                                    complete: false
                                },
                                {
                                    reps: 0,
                                    complete: false
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Pull',
                    lastCompletionDate: '9/3',
                    exercises: []
                },
                {
                    name: 'Legs',
                    lastCompletionDate: '9/4',
                    exercises: []
                }
            ],
        }
    },
    methods: {
        openWorkout(name){
            this.currentWorkout = this.savedWorkouts.find(workout => workout.name = name);
        },
        deleteSet(set, exercise){
            const exIndex = this.currentWorkout.exercises.indexOf(exercise);
            const ex = this.currentWorkout.exercises[exIndex];
            ex.sets.splice(ex.sets.indexOf(set), 1);
        }
    },
    mounted: function () {
        if(localStorage.getItem('savedWorkouts')){
            this.savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts'));
        }
        if(localStorage.getItem('currentWorkout')){
            this.currentWorkout = JSON.parse(localStorage.getItem('currentWorkout'));
        }
    },
    watch: {
        savedWorkouts: {
            handler(newList){
                localStorage.setItem('savedWorkouts', JSON.stringify(newList))
            }
        },
        currentWorkout: {
            handler(newWorkout){
                localStorage.setItem('currentWorkout', JSON.stringify(newWorkout))
            }
        }
    }
});