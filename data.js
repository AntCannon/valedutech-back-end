module.exports = () => {
  const advisoryMap = {
    "1": {
      "seats": 30,
      "cohort": {
        "grade": 6,
        "advisory": "Apple",
        "ict": false,
        "year": 2024,
        "cohortId": "2024-6-Apple",
        "collegeGradYear": 2035
      }
    },
    "2": {
      "seats": 30,
      "cohort": {
        "grade": 6,
        "advisory": "Banana",
        "ict": false,
        "year": 2024,
        "cohortId": "2024-6-Banana",
        "collegeGradYear": 2035
      }
    },
    "3": {
      "seats": 30,
      "cohort": {
        "grade": 6,
        "advisory": "Strawberry",
        "ict": false,
        "year": 2024,
        "cohortId": "2024-6-Strawberry",
        "collegeGradYear": 2035
      }
    },
    "4": {
      "seats": 30,
      "cohort": {
        "grade": 6,
        "advisory": "Orange",
        "ict": false,
        "year": 2024,
        "cohortId": "2024-6-Orange",
        "collegeGradYear": 2035
      }
    }
  }

  const data = {
    students: []  
  }

  for (let i = 1; i <= 120; null) {
    for (let key in advisoryMap) {
      for (let j = advisoryMap[key].seats; j > 0; j--) {
        const student = {
          "id": i,
          "firstName": "Scholar",
          "lastName": `Number ${i}`
        }
        data.students.push({...student, ...advisoryMap[key].cohort})
        if (data.students[i-1].advisory === "Orange") {
          const rng = Math.floor(Math.random() * 2)
          if (rng === 1 ) {
            data.students[i-1].ict = true
          }
        }
        i++
      }
    }
  }

  return data
}