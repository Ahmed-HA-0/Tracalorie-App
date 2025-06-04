class Storage {
  static getCaloriesLimit(def = 2000) {
    let caloriesLimit;
    if (localStorage.getItem('caloriesLimit') === null) {
      caloriesLimit = def;
    } else {
      caloriesLimit = +localStorage.getItem('caloriesLimit');
    }
    return caloriesLimit;
  }
  static setCaloriesLimit(caloriesLimit) {
    localStorage.setItem('caloriesLimit', caloriesLimit);
  }

  static getTotalCalories(def = 0) {
    let caloriesTotal;
    if (localStorage.getItem('caloriesTotal') === null) {
      caloriesTotal = def;
    } else {
      caloriesTotal = +localStorage.getItem('caloriesTotal');
    }
    return caloriesTotal;
  }

  static setTotalCalories(caloriesTotal) {
    localStorage.setItem('caloriesTotal', caloriesTotal);
  }

  static getMeals() {
    let meals;
    if (localStorage.getItem('meals') === null) {
      meals = [];
    } else {
      meals = JSON.parse(localStorage.getItem('meals'));
    }
    return meals;
  }

  static setMeals(meal) {
    const meals = Storage.getMeals();
    meals.push(meal);
    localStorage.setItem('meals', JSON.stringify(meals));
  }

  static getWorkouts() {
    let workouts = undefined;

    if (localStorage.getItem('workouts') === null) {
      workouts = [];
    } else {
      workouts = JSON.parse(localStorage.getItem('workouts'));
    }
    return workouts;
  }

  static removeMeals(id) {
    const meals = Storage.getMeals();
    meals.forEach((meal, indx) => {
      if (meal.id === id) {
        meals.splice(indx, 1);
      }
    });

    localStorage.setItem('meals', JSON.stringify(meals));
  }
  static setWorkouts(workout) {
    const workouts = Storage.getWorkouts();
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }
  static removeWorkouts(id) {
    const workouts = Storage.getWorkouts();
    workouts.forEach((workout, indx) => {
      if (workout.id === id) {
        workouts.splice(indx, 1);
      }
    });

    localStorage.setItem('workouts', JSON.stringify(workouts));
  }

  static clearAll() {
    localStorage.removeItem('caloriesTotal');
    localStorage.removeItem('meals');
    localStorage.removeItem('workouts');
  }
}

export default Storage;
