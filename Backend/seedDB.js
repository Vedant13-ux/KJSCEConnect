const { Certificate } = require('crypto');
const faker = require('faker');
const db = require('./models/index');
const internship = require('./models/internship');


function seedDB() {
    var data = {};
    for (let i = 0; i < 7; i++) {
        data = {
            faculty: "5fb77fb565055a20043cd8ca",
            title: 'Python Programming',
            skillsRequired: ['Python', "java", 'Node.Js', 'MongoDB'],
            duration: `${Math.floor(Math.random() * 13)} months`,
            applyBy: Date.now(),
            numberOpenings: Math.floor(Math.random() * 3),
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque delectus tempore eos quibusdam, tenetur quas nihil asperiores molestiae ad sunt, dolore, minima blanditiis? Error unde sapiente, temporibus sit eius neque.",
            perks: 'Certificate',
            type: 'Work from Home'
        }
        db.InternshipDetails.create(data)
            .then((intenship) => console.log(internship))
            .catch(err => console.log(err))
    }
    data = {};
    for (let i = 0; i < 7; i++) {
        data = {
            title: faker.lorem.words(3),
            content: faker.lorem.lines(3),
            image: faker.image.imageUrl(),
            author: "5fb247e8d6a6e304d0eeb65d",
            hashtags: faker.lorem.word(1)
        }
        db.Post.create(data)
            .then((intenship) => console.log(internship))
            .catch(err => console.log(err))
    }
}
module.exports = seedDB;