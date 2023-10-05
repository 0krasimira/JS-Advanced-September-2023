function constructionCrew(obj) {

if(obj.dizziness == true) {
 obj.levelOfHydrated += obj.weight * obj.experience * 0.1
 obj.dizziness = false
} 

return(obj)
}

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}))

console.log('------')
console.log(constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}))