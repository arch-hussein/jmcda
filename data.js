var APP_DATA = {
  "scenes": [
    {
      "id": "0-scene-1",
      "name": "Scene 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-scene-9",
      "name": "Scene 9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.840045491298584,
          "pitch": -0.05533256599046332,
          "rotation": 0,
          "target": "2-scene-10"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2612904090753325,
          "pitch": -0.18853473382682218,
          "title": "TRAINING ROOM",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-scene-10",
      "name": "Scene 10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.7462173026383887,
        "pitch": 0.15518728371291068,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.5640195854223116,
          "pitch": 0.055919622393989954,
          "rotation": 6.283185307179586,
          "target": "1-scene-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-panorama1",
      "name": "Panorama(1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
