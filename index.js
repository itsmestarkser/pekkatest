const WABOT = require('wabot');

const wabot = new WABOT();

// Default when no assignment is found for the message
wabot.on('message', (res) => {
    if (res.data.type === 'document' || res.data.type === 'video'){
        wabot.sendMessage({
            "idChat": res.data.from,
            "message": `Thanks for your file.`
        });

        wabot.downloadFile(res.data.id)
        .then((file) => {
            console.log('file downloaded.💾..', file);
        })
        .catch((err) => {
            console.log('error downloading file🚫', err);
        })
    } else {
        wabot.sendMessage({
            "idChat": res.data.from,
            "message": `Hey its me pekka-ser created by stark`
        });
    }
});

wabot.on('ready', (session) => {
	console.log('READY', session);
    //console.log('Clossing Session');
    //wabot.closeSession();
});







			
	


({
	intentsConfig: {
		"bann": {
			"active": true,
			"timeInterval": 10, // time in seconds 
			"maxBann": 3, // maximum number of messages supported in timeInterval seconds
			"timeBann": 10, // maximum number of messages supported in timeInterval seconds
		},
		"message": {
			"userBanned": "*We report that you have been temporarily banned. Please try again after {{TIMEBANN}} minutes*"
		}
	}
});


wabot.on('message', (res) => {
	if (res.data.body === 'stark') {
        // Send Image from path
        wabot.sendImage({
            "idChat":  res.data.from,
            "caption":  "how is he🤖",
            "file":  path.join(__dirname, "./img/image0.jpg")
        });

        // Send image from url
        wabot.sendImage({
            "idChat":  res.data.from,
            "caption":  "contact me:http://wa.me.//+919072233245",
            "file": "https://i.imgur.com/qG3nAN5.png"
        });
    } else if (res.data.caption === 'image') {
        // Send image base64
        wabot.sendImage({
            "idChat":  res.data.from,
            "caption":  "Image from base64",
            "file": res.media
        });
    }   
});





wabot.on('message', (res) => {
	if (res.data.caption === 'sticker') {
        wabot.sendSticker({
            "idChat":  res.data.from,
            "file":  res.media
        });   
    }  
});

({
	intentsConfig: {
		removeBgApis: ["2NkJmJPEm4XAeTyvyr554FGHC"]
	}
});


wabot.on('message', (res) => {
	if (res.data.body === 'location') {
        wabot.sendLocation({
			"idChat": res.data.from,
			"lat": "-33.0467291",
			"lng": "-71.6169808",
			"title": "Home"
		});
    }  
});

wabot.on('message', (res) => {
	if (res.data.body === 'contact') {
        wabot.sendVcard({
			"idChat":  res.data.from,
			"contactName":  "Luis Cruz",
			"vcard": {
				firstName:  "STARK",
				lastName:  "ser",
				birthday:  "28-12-2006",
				url:  "https://github.com/CYBER-STARK",
				nickname:  "STARK",
				cellPhone:  "+919072233245",
				email:  "starkser7@gmail.com",
				photo:  path.join(__dirname, "test.jpg")
			}
		});
    }  
});


({
	intentsConfig: {
		commands: [
            {
                "name":  "help",
                "contains": [],
                "exact": ["@help", "help", "@commands", "commands", "@command", "command", "what can you do"]
            },
            {
                "name":  "makeJoke",
                "contains": [],
                "exact": ["@joke", "@jokes", "joke", "jokes", "tell me a joke"]
            },
            {
                "name":  "getImage",
                "contains": [],
                "exact": ["@image", "@images", "image", "images", "give me a picture"]
            },
            {
                "name":  "getNews",
                "contains": [],
                "exact": ["@news", "news", "give me news"]
            }
        ]
	}
});

wabot.on('help', (res) => {
	wabot.sendMessage({
	"idChat":  res.data.from,
	"message":  "*This is a help.*"
	});
});

wabot.on('makeJoke', (res) => {
	wabot.sendMessage({
	"idChat":  res.data.from,
	"message":  "This is a joke"
	});
});

wabot.on('getImage', (res) => {
	wabot.sendImage({
	"idChat":  res.data.from,
	"caption":  "𝑯𝑬𝒀  𝑰𝑻𝑺 𝑺𝑻𝑨𝑹𝑲",
	"file":  "https://i.imgur.com/qG3nAN5.png"
	});
});

wabot.on('getNews', (res) => {
	wabot.sendLink({
	"idChat":  res.data.from,
	"caption":  "This is a description",
	"link": "https://www.google.com/amp/s/www.twentyfournews.com/%3famp=1"
	});
});

wabot.start();

