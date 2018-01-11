var playlist = { "Ed Sheeran": "Shape of You", 'Soha': 'Mil Pasos', 'Luis Fonsi': 'Despacito', 'Alberto Podesta': 'La Capilla Blanca', "Dexy's Midnight Runners": 'Come on Eileen' };

function updatePlaylist(playlist, artist, song) {
  return (Object.assign({}, playlist, {[artist] : [song]}));
}

