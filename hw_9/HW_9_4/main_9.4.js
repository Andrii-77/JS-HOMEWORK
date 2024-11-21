let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    const divCourse = document.createElement('div');
    divCourse.classList.add('item');
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    const p = document.createElement('p');
    p.classList.add('description');
    h1.innerText = course.title;
    p.innerText = course.monthDuration;
    divCourse.append(h1, p);
    document.body.appendChild(divCourse);
}