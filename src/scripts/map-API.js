let myMap;

const init = () => {
  myMap = new ymaps.Map('map', {

    center: [55.751855, 37.576905],
    zoom: 16,
    controls: ['zoomControl']
  });

    const coords = [
    [55.751855, 37.576905],
  ];

  var myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageSize: [58, 73],
    iconImageOffset: [-3, -42],
    iconImageHref: 'images/img/marker.svg'
});

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord))
  })

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);