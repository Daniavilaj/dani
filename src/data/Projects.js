const Projects = [
    {
        "CardTitle": "SurveyMonkey Intern Project",
        "Color": "#34B671",
        "ColorTitle": "#1a7a45",
        "CardImage": require('../assets/images/surveymonkey/surveymonkey.png'),
        "ProjectTitle": "User's Billing Details Update Page",
        "ProjectTech": "React.js, Redux, HTML/CSS, Python.",
        "ProjectDescription": "I migrated and re-factored a complex multi-flow page of the SurveyMonkey website. The previous user's billing details update page was a modal. It was hard to maintain because it was written in old python, it had an outdated user interface design, and it used outdated front-end technologies. The modal was not mobile-friendly, it was hard to incorporate into other flows, it was buggy in terms of handling errors, and it didn't provide useful and clear feedback.\n \nThe new user's billing details update page is written in React, the new technology that SurveyMonkey is migrating to and is compatible with the company's new interface design. The page auto-populates fields with user's information previously saved in the database. Is has new features like inline error validation for credit card and autocompletion for zipcode and city. It gives useful and clear feedback with error and success banners. The new page is easier to support because it uses new technology, it provides localization giving the opportunity to be translated to different languages, it can be embedded into other flows and it gives a better overall user experience with the responsive design.",
        "CarouselMedia": [
            {
              "type": "image",
              "src": require('../assets/images/surveymonkey/before-popup.svg'),
              "alt": "before popup"
            },
            {
              "type": "image",
              "src": require('../assets/images/surveymonkey/after.svg'),
              "alt": "after standalone page"
            },
            {
              "type": "image",
              "src": require('../assets/images/surveymonkey/inline-validation.svg'),
              "alt": "inline validation"
            },
            {
              "type": "image",
              "src": require('../assets/images/surveymonkey/error-message.svg'),
              "alt": "error message"
            },
            {
              "type": "image",
              "src": require('../assets/images/surveymonkey/success-banner.svg'),
              "alt": "success banner"
            },
            {
              "type": "image",
              "src": require('../assets/images/surveymonkey/mobile-friendly.svg'),
              "alt": "mobile friendly"
            },
            {
              "type": "video",
              "src": "https://www.youtube.com/embed/Oxlp5nQOSsw",
              "title": "billing details"
            }
        ]
    },

    {
        "CardTitle": "Twitter Intern Project",
        "Color": "#1da1f2",
        "ColorTitle": "#046ca0",
        "CardImage": require('../assets/images/twitter/twitter.png'),
        "ProjectTitle": "Scribe Developer Tools Extension",
        "ProjectTech": "React.js, HTML/CSS.",
        "ProjectDescription": "I created a Developer tools extension to automate the debugging process of Scribes. Scribe is a remote logging framework used by Twitter's apps and websites that allows the analysis of feature usage. One of the features Twitter QA engineers need to test is these scribes, to check they are logged correctly by all clients. Although the data used to test scribes with the outdated process was accessible, finding and pulling out the right data buried in a huge block of batched scribe events was a lengthy and error-prone process.\n \nThe new Scribe extension is located in the developer tools, allows search and filtering through the different types of scribe events, renders event's data in a readable format and allows copying for easy sharing. The extension supports Chrome, Firefox, and Opera browsers, and it has a Night Mode build-in. Scribe extension is now on the Twitter internal Chrome Webstore, it has close to 100 users and it is constantly maintained. The new Scribe extension reduces the time QA engineers spend debugging Scribes by more than 50%. (Blurry images for confidentiality purposes)",
        "CarouselMedia": [
            {
              "type": "image",
              "src": require("../assets/images/twitter/nightmode.svg"),
              "alt": "chrome store"
            },
            {
              "type": "image",
              "src": require("../assets/images/twitter/chrome-store.svg"),
              "alt": "chrome store"
            },
            {
              "type": "video",
              "src": "https://www.youtube.com/embed/LNBvB9Yp7ms",
              "title": "scribe extension"
            }
        ]
    },

    {
        "CardTitle": "Start-up Parkner",
        "Color": "#0d258b",
        "ColorTitle": "#5088e2",
        "CardImage": require('../assets/images/parkner/parkner.png'),
        "ProjectTitle": "Parkner Start-up",
        "ProjectTech": "React.js, HTML/CSS, Illustrator, Sketch.",
        "ProjectDescription": "Parkner is a Start-up in Peru that aims to solve the parking deficit problem in Lima through a cross-platform application. Parkner allows users to register their free parking spaces (Houses, Residential and Corporate Buildings, etc) so that other users looking for a parking lot can rent them. I programmed the payment view and lot details view following design specifications handed down from the UI designer. I used Sketch to create prototypes with different flows of interaction, and Illustrator and InDesign to create and design marketing content.",
        "CarouselMedia": [
            {
              "type": "image",
              "src": require('../assets/images/parkner/logo.svg'),
              "alt": "logo"
            },
            {
              "type": "image",
              "src": require('../assets/images/parkner/2.png'),
              "title": "busca"
            },
            {
              "type": "image",
              "src": require('../assets/images/parkner/3.png'),
              "alt": "reserva"
            },
            {
              "type": "image",
              "src": require('../assets/images/parkner/4.png'),
              "alt": "estaciona"
            },
            {
              "type": "image",
              "src": require('../assets/images/parkner/5.png'),
              "alt": "seguro"
            },
            {
              "type": "image",
              "src": require('../assets/images/parkner/splash.svg'),
              "alt": "splash"
            },
        ]
    },

    {
        "CardTitle": "Web Application",
        "Color": "#686868",
        "ColorTitle": "#474747",
        "CardImage": require('../assets/images/brainywords/brainywords.svg'),
        "ProjectTitle": "Brainy Words 2000",
        "ProjectTech": "Node.js, HTML/CSS, Illustrator.",
        "ProjectLink": "http://hearatale.org:8082/",
        "ProjectDescription": "The Brainy Words 2000 web application is a free game designed to help children improve their vocabulary in a fun and engaging way. Trough the design process we conducted user research and created personas to fully understand the problem. We designed low and high-fidelity website prototypes and conducted heuristic evaluations to iterate upon designs. We built the web application with node.js and HTML/CSS. Brainy Words 2000 can be accessed through different platforms like phone, tablet or computer thanks to its responsive design. I was very involved in the user interface design and front end development, including original artwork for backgrounds.",
        "CarouselMedia": [
            {
              "type": "image",
              "src": require('../assets/images/brainywords/intro.png'),
              "alt": "intro"
            },
            {
              "type": "image",
              "src": require('../assets/images/brainywords/explore.png'),
              "alt": "explore"
            },
            {
              "type": "image",
              "src": require('../assets/images/brainywords/street.png'),
              "alt": "street"
            },
            {
              "type": "image",
              "src": require('../assets/images/brainywords/explore2.svg'),
              "alt": "explore"
            },
            {
              "type": "image",
              "src": require('../assets/images/brainywords/test.png'),
              "alt": "test"
            },
            {
              "type": "image",
              "src": require('../assets/images/brainywords/test2.png'),
              "alt": "test"
            },
            {
              "type": "image",
              "src": require('../assets/images/brainywords/track.png'),
              "alt": "track"
            },
            {
              "type": "image",
              "src": require('../assets/images/brainywords/track2.png'),
              "alt": "track"
            },
        ]
    },

    {
        "CardTitle": "Game Boy Games",
        "Color": "#dc76b0",
        "ColorTitle": "#b7488d",
        "CardImage": require('../assets/images/gameboy/gameboy.png'),
        "ProjectTitle": "Sub-Attack & Carrots Game Boy Games",
        "ProjectTech": "C, Game Boy Emulator, Usenti (Bitmap editor)",
        "ProjectDescription": "In Mobile Device Architecture class we worked on a Game Boy Advanced emulator to create games using C that manipulates device hardware. I created two games: Sub-attack, a version of Space Invaders, and Carrots, an endless runner game.\n \nThese two games were made entirely in the constraints of memory and graphics of a traditional Game Boy system. They implemented various technologies: double buffering for smooth animations; DMA (Direct Memory Access) to speed animations; indexed color, tiles, and sprites; multiple sprites to create animations; collision detection;  state machine with, Splash, Game, Pause, Win/Lose states; simultaneous and looping sound effects; two to three simultaneous and moving tiled backgrounds with alpha blending; and costume bit art.",
        "CarouselMedia": [
            {
              "type": "image",
              "src": require('../assets/images/gameboy/subattack.png'),
              "alt": "subattack"
            },
            {
              "type": "image",
              "src": require('../assets/images/gameboy/subattack-spritesheet.png'),
              "title": "subattack spritesheet"
            },
            {
              "type": "video",
              "src": "https://www.youtube.com/embed/1iAnp_6FAZc",
              "title": "subattack video"
            },
            {
              "type": "image",
              "src": require('../assets/images/gameboy/carrots.png'),
              "alt": "carrots"
            },
            {
              "type": "image",
              "src": require('../assets/images/gameboy/carrots-instructions.png'),
              "title": "carrots instructions"
            },
            {
              "type": "image",
              "src": require('../assets/images/gameboy/carrots-powerups.png'),
              "title": "carrots powerups"
            },
            {
              "type": "image",
              "src": require('../assets/images/gameboy/carrots-spritesheet.png'),
              "title": "carrots spritesheet"
            },
            {
              "type": "video",
              "src": "https://www.youtube.com/embed/vFCjqp0bLYQ",
              "title": "carrots video"
            }
        ]
    },

    {
      "CardTitle": "Unity Cutscenes",
      "Color": "black",
      "ColorTitle": "#4f4f4f",
      "CardImage": require('../assets/images/unity/unity.png'),
      "ProjectTitle": "Viking Scene & Indiana Jones Game",
      "ProjectTech": "Unity",
      "ProjectDescription": "A Cutscene is a sequence in a video game that is not interactive, breaking up the gameplay and giving a narrative context to the game.\n \nI created two cutscenes, an intro cutscene for a Viking game, and an Indiana Jones game with multiple cutscenes and user input. I used Unity’s Timeline and Cinemachine features to create the stories. The cut scenes include environments, terrains, objects, animations, user input, camera movements, sound, and effective mise-en-scene to stage and support the story.",
      "CarouselMedia": [
          {
            "type": "video",
            "src": "https://www.youtube.com/embed/u0LmMrQl_L0",
            "title": "viking cutscene"
          },
          {
            "type": "video",
            "src": "https://www.youtube.com/embed/6nJKYfHjPeQ",
            "title": "indiana jones game"
          }
      ]
    },

    {
      "CardTitle": "Data Portrait Project",
      "Color": "#a96bf9",
      "ColorTitle": "#7841a3",
      "CardImage": require('../assets/images/datavis/datavis.png'),
      "ProjectTitle": "Data Portrait Project",
      "ProjectTech": "Processing",
      "ProjectDescription": "This project is an artistic approach to information visualization of nearly 500 pictures of student’s self-reporting lifestyles, everyday life, and routines.\n \nThe process was long. It required the categorization of the set of images and parsing data like days, hours, minutes, seconds, tags, colors, and users. The final visualization has a star with the days of the week, a pallet of colors, and the hour of the day represented as a sun and a moon. In the center, the number of images that met the chosen filters is displayed.",
      "CarouselMedia": [
          {
            "type": "image",
            "src": require('../assets/images/datavis/gui.png'),
            "alt": "ui"
          },
          {
            "type": "image",
            "src": require('../assets/images/datavis/weekdays.png'),
            "alt": "weekdays"
          },
          {
            "type": "video",
            "src": "https://www.youtube.com/embed/X8NLziIrH8o",
            "title": "data portrait video"
          }
      ]
    },

    {
      "CardTitle": "Unity Arena Action Game",
      "Color": "#e2569c",
      "ColorTitle": "#b71566",
      "CardImage": require('../assets/images/spacerush/spacerush.png'),
      "ProjectTitle": "Spacerush",
      "ProjectTech": "Unity, Maya, Blender",
      "ProjectDescription": "Spacerush is an action-focused game, where the player has to fight large groups of enemies and manage resources in a small arena. The goal is to defeat waves of enemies using weapons, dodging and weaving through moving platforms while being as efficient as possible. The metric used to measure how good the player is is a score that takes into account how long the player has survived and how many enemies they have killed.\n \nThe player has access to two weapons. A sword and a single-shot rifle that will instantly kill whatever it shoots. As the game goes on, there are more enemies per wave with shorter spawn times. After defeating each wave of enemies, the player will be prompted to explore the arena to replenish ammo and health.\n \nThree types of enemies are spawn in the waves: a Buffer, that casts a buff which gives an enemy a “shield”, giving it double health. The buffer chooses the weakest enemy in the arena that does not already have a shield. It cannot buff itself or other buffers, and cannot move. A Flyer, that flies above the player and shoots medium-speed, medium-size projectiles at regular intervals. And a Brute, which is a very large and slow enemy that has large AOEs.\n \nThe arena is a space-themed environment with low detail textures, low poly three-dimensional modeling, and bright neon colors. I modeled, rigged, and animated the player and the enemies in Maya and Blender. And contributed to the programming of the gameplay in Unity.",
      "CarouselMedia": [
          {
            "type": "image",
            "src": require('../assets/images/spacerush/spacerush-title.png'),
            "alt": "spacerush"
          },
          {
            "type": "image",
            "src": require('../assets/images/spacerush/arena.png'),
            "alt": "spacerush arena"
          },
          {
            "type": "image",
            "src": require('../assets/images/spacerush/flyer.png'),
            "alt": "flyer"
          },
          {
            "type": "image",
            "src": require('../assets/images/spacerush/brute.png'),
            "alt": "brute"
          },
          {
            "type": "image",
            "src": require('../assets/images/spacerush/spaceguy.png'),
            "alt": "spaceguy"
          },
          {
            "type": "video",
            "src": "https://www.youtube.com/embed/zpn81XqeZ9I",
            "title": "spacerush video"
          }
      ]
    },

    {
      "CardTitle": "Processing Game",
      "Color": "#44a30d",
      "ColorTitle": "#377f0d",
      "CardImage": require('../assets/images/jinx/jinx.png'),
      "ProjectTitle": "Jinx",
      "ProjectTech": "Processing",
      "ProjectDescription": "Jinx was created with the thought of the metaphor: “Iteration is Design”. Jinx is a two-player game where each player has to create a pattern on a board and try to match it with its partners by iterating over the designs. The only information shared between players is the parts of the pattern that matched, forcing them to come up with a non-verbal strategy for iterating their patterns. The means of pattern-making was inspired by the board game Battleship.",
      "CarouselMedia": [
          {
            "type": "image",
            "src": require('../assets/images/jinx/jinx-title.png'),
            "alt": "jinx"
          },
          {
            "type": "image",
            "src": require('../assets/images/jinx/jinx1.png'),
            "alt": "blank grid"
          },
          {
            "type": "image",
            "src": require('../assets/images/jinx/jinx2.png'),
            "alt": "dificulty"
          },
          {
            "type": "image",
            "src": require('../assets/images/jinx/jinx3.png'),
            "alt": "player 1 pattern"
          },
          {
            "type": "image",
            "src": require('../assets/images/jinx/jinx4.png'),
            "alt": "player 2 pattern"
          },
          {
            "type": "image",
            "src": require('../assets/images/jinx/jinx5.png'),
            "alt": "overlap"
          },
          {
            "type": "video",
            "src": "https://www.youtube.com/embed/FCFqjjQK3D4",
            "title": "jinx video"
          }
      ]
    }

    // {
    //   "CardTitle": "Miscellaneous Work",
    //   "Color": "#ff9d00",
    //   "ColorTitle": "#c6790a",
    //   "CardImage": require('../assets/images/miscellaneous/miscellaneous.png'),
    //   "ProjectTitle": "Miscellaneous",
    //   "ProjectTech": "Maya, InDesign, Illustrator",
    //   "ProjectDescription": "Festivals of the world - Illustrator posters of festivals per continent to promote tourism.\n \nAtlanta Olympic Games Book - InDesign layout design exercise.\n \nMaya comic book – Maya 3D textured models to create a comic book with effective mise-en-scene elements.",
    //   "CarouselMedia": [
    //       {
    //         "type": "image",
    //         "src": require('../assets/images/miscellaneous/festivals.jpg'),
    //         "alt": "festivals around the world"
    //       },
    //       {
    //         "type": "image",
    //         "src": require('../assets/images/miscellaneous/floriade.png'),
    //         "alt": "floriade"
    //       },
    //       {
    //         "type": "image",
    //         "src": require('../assets/images/miscellaneous/balloon.png'),
    //         "alt": "balloon"
    //       },
    //       {
    //         "type": "image",
    //         "src": require('../assets/images/miscellaneous/sanfermin.png'),
    //         "alt": "sanfermin"
    //       },
    //       // {
    //       //   "type": "image",
    //       //   "src": require('../assets/images/miscellaneous/vote1.png'),
    //       //   "alt": "vote 1"
    //       // },
    //       // {
    //       //   "type": "image",
    //       //   "src": require('../assets/images/miscellaneous/vote2.png'),
    //       //   "alt": "vote 2"
    //       // },
    //       {
    //         "type": "image",
    //         "src": require('../assets/images/miscellaneous/booklayout.svg'),
    //         "alt": "atlanta olympic games"
    //       },
    //       {
    //         "type": "image",
    //         "src": require('../assets/images/miscellaneous/branding.svg'),
    //         "alt": "olympic games branding"
    //       },
    //       {
    //         "type": "image",
    //         "src": require('../assets/images/miscellaneous/numbers.svg'),
    //         "alt": "olympic games in numbers"
    //       },
    //       {
    //         "type": "image",
    //         "src": require('../assets/images/miscellaneous/tv.png'),
    //         "alt": "rabbit scene"
    //       },
    //       {
    //         "type": "image",
    //         "src": require('../assets/images/miscellaneous/rabbit2.png'),
    //         "alt": "rabbit"
    //       },
    //       {
    //         "type": "image",
    //         "src": require('../assets/images/miscellaneous/rabbit.png'),
    //         "alt": "rabbit 2"
    //       },
    //       {
    //         "type": "image",
    //         "src": require('../assets/images/miscellaneous/couch.png'),
    //         "alt": "couch"
    //       },
    //       {
    //         "type": "image",
    //         "src": require('../assets/images/miscellaneous/eyes.png'),
    //         "alt": "rabbit's eyes"
    //       },
    //   ]
    // }
]

export default Projects;