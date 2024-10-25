// hero
var heroData = [
    {
      id: 1,
      image: require('../assets/images/house1.jpeg'),
      title: 'The perfect design for your website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: require('../assets/images/house2.jpeg'),
      title: 'Start Your Future Financial Plan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('../assets/images/inter2.jpg'),
      title: 'Enjoy the Difference',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.twitter.com'
    }
  ]

//   team members
const teamsData = [
    {
      id: 1,
      image: require("../assets/images/civil.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Gabriel Hart",
      designation: "CEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 2,
      image: require("../assets/images/architec.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "David Antony",
      designation: "Manager",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 3,
      image: require("../assets/images/foreman.jpg"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Nicholas Perry",
      designation: "UX Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 4,
      image: require("../assets/images/avatar-5.png"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Sarah Wills",
      designation: "Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 5,
      image: require("../assets/images/avatar-4.png"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Sophia Pitt",
      designation: "Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 6,
      image: require("../assets/images/avatar-4.png"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Taylor Lopez",
      designation: "Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 7,
      image: require("../assets/images/avatar-1.png"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Ryan Giggs",
      designation: "Content Writer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
      id: 8,
      image: require("../assets/images/avatar-2.png"),
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "David Smith",
      designation: "SEO Expert",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
  ];

    //  projects
    const servicesData = [
        {
          id: 1,
          icon: "fas fa-clone",
          title: "Architectural ",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
        },
        {
          id: 2,
          icon: "fas fa-snowflake",
          title: "Creative Design",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
        },
        {
          id: 3,
          icon: "fas fa-plug",
          title: "Consultancy",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
        },
        {
          id: 4,
          icon: "fas fa-desktop",
          title: "Retina Ready",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
        },
        {
          id: 5,
          icon: "fas fa-trophy",
          title: "Brower Compatibility",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
        },
        {
          id: 6,
          icon: "fas fa-life-ring",
          title: "Repair and maintanance",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
        },
      ];

       //testimonials

var testimonialsData = [
    {
      id: 1,
      image:require('../Assets/images/avatar-1.png'),
      name: "Willis Odhiambo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.",
      designation: "Manager",
    },
    {
      id: 2,
      image:require('../Assets/images/avatar-1.png'),
      name: "Joseph Murage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!",
      designation: "Accountant",
    },
    {
      id: 3,
      image:require('../Assets/images/avatar-1.png'),
      name: "Jenniffer Moraa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?",
      designation: "CEO",
    },
  ];   
  // <Col>
  // <blockquote>
  //     <p>{testimonials.description}</p>
  //     <cite>
  //         <span className='name'>{testimonials.name}</span>
  //         <span className='designation'>{testimonials.designation}</span>
  //     </cite>
  // </blockquote>
  
  // </Col>