const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: true,
    order: random,
    audio: [
      {
        name: "美好事物",
        artist: '房东的猫',
        url: 'https://www.5431.name/music/1.mp3',
        cover: 'https://www.5431.name/music/1.jpg',
      },
      {
        name: '云烟成雨',
        artist: '房东的猫',
        url: 'https://www.5431.name/music/2.MP3',
        cover: 'https://www.5431.name/music/1.jpg',
      },
      {
        name: '秋酿',
        artist: '房东的猫',
        url: 'https://www.5431.name/music/3.mp3',
        cover: 'https://www.5431.name/music/1.jpg',
      },
      {
        name: '下一站茶山刘',
        artist: '房东的猫',
        url: 'https://www.5431.name/music/4.MP3',
        cover: 'https://www.5431.name/music/1.jpg',
      },
      {
        name: '春风十里',
        artist: '房东的猫',
        url: 'https://www.5431.name/music/5.mp3',
        cover: 'https://www.5431.name/music/1.jpg',
      },
    ]
});