// Code goes here

(function() {
  var app = angular.module('gsmArenaStore', ["store-directives"]);

  app.controller('GalleryController', function() {
    this.imageIndex = 0;
    this.setCurrent = function(imageNumber) {
      console.log(imageNumber);
      this.imageIndex = imageNumber || 0;
    };
  });
  app.controller('StoreController', function() {
	  var phones = [{
		    name: 'Samsung Galaxy A9 Pro',
		    description: "Also known as Samsung A9 Pro Duos (2016) with dual-SIM card slots",
		    network: "GSM/HSPA/LTE",
		    price: 899,
		    launch: "2016, March",
		    body: [{
		    	Dimensions: "-",
			    Weight: "-",
			    Build: "Corning Gorilla Glass 4 back panel",
			    SIM: "Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by)"
		    }],
		    display: [{
		    	Type: "Super AMOLED capacitive touchscreen, 16M colors",
			    Size: "6.0 inches",
			    Resolution: "1080 x 1920 pixels (~367 ppi pixel density)",
			    Multitouch: "Yes",
			    Protection: "Corning Gorilla Glass 4"
		    }],
		    platform: [{
		    	OS: "Android OS, v6.0.1 (Marshmallow)",
			    Chipset: "Qualcomm MSM8976 Snapdragon 652",
			    CPU: "Quad-core 1.8 GHz Cortex-A72 & quad-core 1.2 GHz Cortex-A53",
			    GPU: "Adreno 510"
		    }],
		    memory: [{
		    	Internal: "32 GB, 4GB RAM",
			    Slots: "microSD, up to 128 GB (dedicated slot)"
		    }],
		    camera: [{
		    	Primary:	"16 MP, f/1.9, autofocus, OIS, LED flash",
		    	Features:	"1/2.8 sensor size, geo-tagging, touch focus, face detection, panorama, HDR",
		    	Video:	"1080p@30fps",
		    	Secondary:	"8 MP, f/1.9, 1080p"
		    }],
		    battery: "Non-removable Li-Ion 5000 mAh battery",
		    images: [
	             "http://localhost:8080/GSMArena/images/samsung-galaxy-a9-2016-.jpg",
	             "http://localhost:8080/GSMArena/images/samsung-galaxy-a9-2016-1-.jpg"
		    ],
		    reviews: [{
		      stars: 5,
		      body: "I love this phone!",
		      author: "jay@thomas.com",
		      createdOn: 1397490980837
		    }, {
		      stars: 3,
		      body: "Specifications are very impressive. Can't wait to purchase when it is released in Singapore.",
		      author: "tim@hater.com",
		      createdOn: 1397490980837
		    },
		    ]
		  },{
			    name: 'Apple iPhone SE',
			    description: "Big things come in small packets. This would prove it.",
			    network: "GSM / CDMA / HSPA / EVDO / LTE",
			    price: 399,
			    launch: "2016, March",
			    body: [{
			    	Dimensions: "123.8 x 58.6 x 7.6 mm (4.87 x 2.31 x 0.30 in)",
				    Weight: "113 g (3.99 oz)",
				    Build: "Corning Gorilla Glass 4 back panel",
				    SIM: "Nano-SIM"
			    }],
			    display: [{
			    	Type: "LED-backlit IPS LCD, capacitive touchscreen, 16M colors",
				    Size: "4.0 inches (~60.8% screen-to-body ratio)",
				    Resolution: "640 x 1136 pixels (~326 ppi pixel density)",
				    Multitouch: "Yes",
				    Protection: "Corning Gorilla Glass 4"
			    }],
			    platform: [{
			    	OS: "iOS 9.3",
				    Chipset: "Apple A9",
				    CPU: "Dual-core 1.84 GHz Twister",
				    GPU: "PowerVR GT7600 (six-core graphics)"
			    }],
			    memory: [{
			    	Internal: "16/64 GB, 2 GB RAM",
				    Slots: "No"
			    }],
			    camera: [{
			    	Primary:	"12 MP, f/2.2, 29mm, phase detection autofocus, dual-LED (dual tone) flash, check quality",
			    	Features:	"1/3 sensor size, 1.22 µm pixel size, geo-tagging, simultaneous 4K video and 8MP image recording, touch focus, face/smile detection, HDR (photo/panorama)",
			    	Video:	"2160p@30fps, 1080p@30/60fps, 1080p@120fps, 720p@240fps, check quality",
			    	Secondary:	"1.2 MP, f/2.4, 31mm, 720p@30fps, face detection, HDR, FaceTime over Wi-Fi or Cellular"
			    }],
			    battery: "Non-removable Li-Ion 5000 mAh battery",
			    images: [
		             "http://localhost:8080/GSMArena/images/apple-iphone-5se-ofic.jpg",
		             "http://localhost:8080/GSMArena/images/apple-iphone-5se-ofic-1.jpg"
			    ],
			    reviews: [{
			      stars: 5,
			      body: "I love this thing!",
			      author: "jay@thomas.com",
			      createdOn: 1397490980837
			    }, {
			      stars: 3,
			      body: "Specifications are too good. Can't wait to purchase when it is released in Singapore.",
			      author: "tim@hater.com",
			      createdOn: 1397490980837
			    },
			    ]
			  
		  }];
    this.products = phones;
  });

})();