// time = 0 - 59

let time;
if (0 <= time && time < 15) {
    console.log("Перша чверть години.")
} else if (15 <= time && time < 30) {
    console.log("Друга чверть години.")
} else if (30 <= time && time < 45) {
    console.log("Третя чверть години.")
} else {
    console.log("Четверта чверть години.")
}