/*global particlesJS*/

particlesJS("particles",

	{
		"particles": {
			"number": {
				"value": 25,
				"density": {
					"enable": true,
					"value_area": 100
				}
			},
			"color": {
				"value": "#1e1e1e"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#1e1e1e"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.25,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.25,
					"sync": false
				}
			},
			"size": {
				"value": 2.5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 100,
					"size_min": 0.25,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 100,
				"color": "#1e1e1e",
				"opacity": 0.25,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 2.5,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 1000,
					"rotateY": 1000
				}
			}
		},
		"interactivity": {
			"detect_on": "window",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "repulse"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 200,
					"line_linked": {
						"opacity": 0.25
					}
				},
				"bubble": {
					"distance": 200,
					"size": 10,
					"duration": 1,
					"opacity": 1,
					"speed": 1
				},
				"repulse": {
					"distance": 200,
					"duration": 0.25
				},
				"push": {
					"particles_nb": 1
				},
				"remove": {
					"particles_nb": 1
				}
			}
		},
		"retina_detect": true
	}

					 );