document.addEventListener('DOMContentLoaded', function() {
    // Set background image for the body
    document.body.style.backgroundImage = "url('images/texture.jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    const coursesData = [
        { title: 'Blockchain Basics', description: 'Learn the fundamentals of Blockchain.', image: 'images/course1.jpeg', courseLink: 'https://letstearntechnologies.s3.amazonaws.com/Blockchain+Course.mp4' },
        { title: 'Cryptocurrency Basics', description: 'Explore the world of Crypto', image: 'images/course2.jpeg', courseLink: 'https://letstearntechnologies.s3.amazonaws.com/Cryptocurrency+Course.mp4' },
        { title: 'Web Development', description: 'Learn Web Development', image: 'images/course3.jpeg', courseLink: 'https://letstearntechnologies.s3.amazonaws.com/Web+Development+Course.mp4' },
        { title: 'Data Science', description: 'Deep Dive in Data Science', image: 'images/course4.jpeg', courseLink: 'https://letstearntechnologies.s3.amazonaws.com/Data+Science+Course.mp4' },
        { title: 'Application Development', description: 'Build Applications', image: 'images/course5.jpeg', courseLink: 'https://letstearntechnologies.s3.amazonaws.com/Android+Development+Course.mp4' },
        { title: 'AWS', description: 'Learn AWS', image: 'images/course6.jpeg', courseLink: 'https://letstearntechnologies.s3.amazonaws.com/AWS+Course.mp4' },
        // Add more courses as needed
    ];

    const coursesContainer = document.getElementById('coursesContainer');

    coursesData.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course');

        const image = document.createElement('img');
        image.src = course.image;
        image.alt = `${course.title} Image`;

        // Set equal dimensions for all images
        image.style.width = '300px';
        image.style.height = '200px';

        const title = document.createElement('h2');
        title.textContent = course.title;
        title.style.textAlign = 'center'; // Center-align the title

        const description = document.createElement('p');
        description.textContent = course.description;
        description.style.textAlign = 'center'; // Center-align the description

        const enrollLink = document.createElement('a');
        enrollLink.href = course.courseLink; // Use the actual course link
        enrollLink.textContent = 'Go to Course';
        enrollLink.target = '_blank';

        courseCard.appendChild(image);
        courseCard.appendChild(title);
        courseCard.appendChild(description);
        courseCard.appendChild(enrollLink);

        coursesContainer.appendChild(courseCard);
    });
});
