let songIndex = 0;
let audioElement = new Audio("songs/5.mp3");
let playBtn = document.getElementById("playBtn");
let progressBar = document.getElementById("progressBar");
let masterSongName = document.getElementById("masterSongName");
let masterArtistName = document.getElementById("masterArtistName");
let songInfo = document.querySelector(".songInfo");
let songItem = Array.from(document.getElementsByClassName("songItems"));
let currentTimeElement = document.querySelector(".current-time");
let totalDurationElement = document.querySelector(".total-duration");

class SpotifyClone {
    constructor() {
        this.musicLibrary = this.initializeMusicLibrary();
        this.init();
    }
    
    init() {
        // Initialize the music player
        console.log("Spotify Clone initialized");
    }
    
    initializeMusicLibrary() {
        return {
            bollywood: [
                {
                    id: 'naina-da-kya-kasoor',
                    title: "Naina Da Kya Kasoor",
                    artist: "Ayushmann Khurrana",
                    album: "Andhadhun",
                    filePath: "songs/5.mp3",
                    duration: "2:54",
                    year: 2018,
                    image: "https://c.saavncdn.com/237/Andhadhun-Hindi-2018-20181003-500x500.jpg",
                    category: "love"
                },
                {
                    id: 'kar-gayi-chull',
                    title: "Kar Gayi Chull",
                    artist: "Badshah, Fazilpuria",
                    album: "Kapoor & Sons",
                    filePath: "songs/2.mp3",
                    duration: "3:07",
                    year: 2016,
                    image: "https://c.saavncdn.com/978/Kapoor-Sons-Since-1921-Hindi-2016-20250508221756-500x500.jpg",
                    category: "party"
                },
                {
                    id: 'sooraj-dooba-hain',
                    title: "Sooraj Dooba Hain",
                    artist: "Arijit Singh, Aditi Singh Sharma",
                    album: "Roy",
                    filePath: "songs/7.mp3",
                    duration: "4:24",
                    year: 2015,
                    image: "https://i.scdn.co/image/ab67616d0000b273f6371011af4c82fb31d54820",
                    category: "love"
                },
                {
                    id: 'channa-ve',
                    title: "Channa Ve",
                    artist: "Armaan Malik",
                    album: "Bhoot",
                    filePath: "songs/10.mp3",
                    duration: "3:31",
                    year: 2020,
                    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84ae1dcb4b96e55e77d7f2a137",
                    category: "love"
                },
                {
                    id: 'what-jhumka',
                    title: "What Jhumka?",
                    artist: "Arijit Singh, Jonita Gandhi",
                    album: "Rocky Aur Rani Kii Prem Kahaani",
                    filePath: "songs/9.mp3",
                    duration: "3:33",
                    year: 2023,
                    image: "https://i.scdn.co/image/ab67616d00001e02d6cfe62a22efbcd2bc6a743b",
                    category: "party"
                },
                {
                    id: 'lagdi-lahore-di',
                    title: "Lagdi Lahore Di",
                    artist: "Guru Randhawa, Tulsi Kumar",
                    album: "Street Dancer 3D",
                    filePath: "songs/3.mp3",
                    duration: "3:35",
                    year: 2020,
                    image: "https://i.scdn.co/image/ab67616d0000b27347478a4ab783457fe6766576",
                    category: "party"
                },
                {
                    id: 'tum-se-hi',
                    title: "Tum Se Hi",
                    artist: "Mohit Chauhan",
                    album: "Jab We Met",
                    filePath: "songs/8.mp3",
                    duration: "5:23",
                    year: 2007,
                    image: "https://i.scdn.co/image/ab67616d0000b27352fe6875028c892308ffc2f7",
                    category: "love"
                },
                {
                    id: 'rangisari',
                    title: "Rangisari",
                    artist: "Kanishk Seth, Kavita Seth",
                    album: "Jugjugg Jeeyo",
                    filePath: "songs/6.mp3",
                    duration: "3:43",
                    year: 2022,
                    image: "https://c.saavncdn.com/260/Rangisari-From-Jugjugg-Jeeyo-Hindi-2022-20220606031008-500x500.jpg",
                    category: "party"
                },
                {
                    id: 'nachde-ne-saare',
                    title: "Nachde Ne Saare",
                    artist: "Jasleen Royal, Harshdeep Kaur",
                    album: "Baar Baar Dekho",
                    filePath: "songs/4.mp3",
                    duration: "3:14",
                    year: 2016,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGD44eJju8Bx1Dw1J4ihBmQsFgyGj1vkpV9w&s",
                    category: "party"
                },
                {
                    id: 'ik-vaari-aa',
                    title: "Ik Vaari Aa",
                    artist: "Arijit Singh",
                    album: "Raabta",
                    filePath: "songs/1.mp3",
                    duration: "4:34",
                    year: 2017,
                    image: "https://m.media-amazon.com/images/M/MV5BOTljZDRlMzctMGRmNy00ODA3LWI4ZWEtZTc4Y2E5MDFkYmNhXkEyXkFqcGc@._V1_.jpg",
                    category: "love"
                }
            ],
            hollywood: [
                {
                    id: 'let-me-love-you',
                    title: "Let Me Love You",
                    artist: "DJ Snake ft. Justin Bieber",
                    album: "Encore",
                    filePath: "songs/let me love you_transfer_2025-07-03_220429.m4a",
                    duration: "3:25",
                    year: 2016,
                    image: "https://cdn-images.dzcdn.net/images/cover/6a52e1bbddc750c996a66b0ccfa4370c/1900x1900-000000-80-0-0.jpg",
                    category: "love"
                },
                {
                    id: 'espresso',
                    title: "Espresso",
                    artist: "Sabrina Carpenter",
                    album: "Short n' Sweet",
                    filePath: "songs/espresso_transfer_2025-07-03_220429.m4a",
                    duration: "2:55",
                    year: 2024,
                    image: "https://i.scdn.co/image/ab67616d00001e02de84adf0e48248ea2d769c3e",
                    category: "party"
                },
                {
                    id: 'woman',
                    title: "Woman",
                    artist: "Doja Cat",
                    album: "Planet Her",
                    filePath: "songs/woman_transfer_2025-07-03_220429.m4a",
                    duration: "2:52",
                    year: 2021,
                    image: "https://i.scdn.co/image/ab67616d0000b273be841ba4bc24340152e3a79a",
                    category: "party"
                },
                {
                    id: 'starboy',
                    title: "Starboy",
                    artist: "The Weeknd ft. Daft Punk",
                    album: "Starboy",
                    filePath: "songs/Starboy_transfer_2025-07-03_220429.m4a",
                    duration: "3:50",
                    year: 2016,
                    image: "https://c.saavncdn.com/358/Starboy-English-2016-20240207050743-500x500.jpg",
                    category: "party"
                },
                {
                    id: 'shape-of-you',
                    title: "Shape Of You",
                    artist: "Ed Sheeran",
                    album: "÷ (Divide)",
                    filePath: "songs/shape of you _transfer_2025-07-03_220429.m4a",
                    duration: "3:53",
                    year: 2017,
                    image: "https://lastfm.freetls.fastly.net/i/u/ar0/80daaf62c7fbbf6ddaa143030b684e12.jpg",
                    category: "party"
                },
                {
                    id: 'cruel-summer',
                    title: "Cruel Summer",
                    artist: "Taylor Swift",
                    album: "Lover",
                    filePath: "songs/cruel summer_transfer_2025-07-03_220429.m4a",
                    duration: "2:58",
                    year: 2019,
                    image: "https://m.media-amazon.com/images/I/61bc1iAwLFL._UF350,350_QL80_.jpg",
                    category: "love"
                },
                {
                    id: 'stay',
                    title: "Stay",
                    artist: "The Kid LAROI, Justin Bieber",
                    album: "F*ck Love 3",
                    filePath: "songs/stay_transfer_2025-07-03_220429.m4a",
                    duration: "2:21",
                    year: 2021,
                    image: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png",
                    category: "love"
                },
                {
                    id: 'say-yes-to-heaven',
                    title: "Say Yes To Heaven",
                    artist: "Lana Del Rey",
                    album: "Single",
                    filePath: "songs/say yes to heaven_transfer_2025-07-03_220429.m4a",
                    duration: "3:29",
                    year: 2023,
                    image: "https://albumart.publicradio.org/mb/bf/bf856ab7-d334-4d7e-bc99-7a62fa67087b_4646.jpg",
                    category: "love"
                },
                {
                    id: 'yellow',
                    title: "Yellow",
                    artist: "Coldplay",
                    album: "Parachutes",
                    filePath: "songs/yellow_transfer_2025-07-03_220429.m4a",
                    duration: "4:26",
                    year: 2000,
                    image: "https://albumart.publicradio.org/mb/1d/1dc4c347-a1db-32aa-b14f-bc9cc507b843_40d3.jpg",
                    category: "love"
                },
                {
                    id: 'favorite',
                    title: "Favorite",
                    artist: "Isabel LaRosa",
                    album: "Single",
                    filePath: "songs/favorite_transfer_2025-07-03_220429.m4a",
                    duration: "2:14",
                    year: 2022,
                    image: "https://i.scdn.co/image/ab67616d0000b2737f73e6587c8ced7cad6e1e02",
                    category: "love"
                }
            ]
        };
    }
}

// Create an instance of the SpotifyClone class
const spotifyApp = new SpotifyClone();

// Set initial time displays
currentTimeElement.textContent = "0:00";
totalDurationElement.textContent = "0:00";

// When metadata is loaded, update the duration display
audioElement.addEventListener("loadedmetadata", () => {
    if (!isNaN(audioElement.duration)) {
        let durationMinutes = Math.floor(audioElement.duration / 60);
        let durationSeconds = Math.floor(audioElement.duration % 60);
        totalDurationElement.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
    } else {
        // If we can't get the duration from the audio file, try to use the song data
        const currentSongData = songIndex < 10 
            ? spotifyApp.musicLibrary.bollywood[songIndex] 
            : spotifyApp.musicLibrary.hollywood[songIndex - 10];
        
        if (currentSongData && currentSongData.duration) {
            totalDurationElement.textContent = currentSongData.duration;
        }
    }
});

playBtn.addEventListener("click", ()=>{
    if (audioElement.paused || audioElement.currentTime <= 0){
        let testPlay = audioElement.play()

        if(testPlay !== undefined) {
            testPlay
          .then(()=>{
            playBtn.classList.remove("fa-circle-play");
            playBtn.classList.add("fa-circle-pause");
            
            // Also update the current song icon
            if(songIndex >= 0) {
                let currentSongIcon = document.getElementById(songIndex.toString());
                if(currentSongIcon) {
                    currentSongIcon.classList.remove("fa-circle-play");
                    currentSongIcon.classList.add("fa-circle-pause");
                }
            }
        })
          .catch((error) => {
                console.error("Error playing audio:", error);
                alert("Unable to play audio. Please check if the audio file exists.");
            });
        }
    }else {
        audioElement.pause();
        playBtn.classList.remove("fa-circle-pause");
        playBtn.classList.add("fa-circle-play");
        
        // Also update the current song icon
        if(songIndex >= 0) {
            let currentSongIcon = document.getElementById(songIndex.toString());
            if(currentSongIcon) {
                currentSongIcon.classList.remove("fa-circle-pause");
                currentSongIcon.classList.add("fa-circle-play");
            }
        }
    }
});

audioElement.addEventListener("timeupdate", ()=>{
    console.log("timeupdate");
    // Update progress bar
    progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    progressBar.value = progress;
    
    // Update current time display
    let currentMinutes = Math.floor(audioElement.currentTime / 60);
    let currentSeconds = Math.floor(audioElement.currentTime % 60);
    currentTimeElement.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
    
    // Update total duration display if it's available
    if (!isNaN(audioElement.duration)) {
        let durationMinutes = Math.floor(audioElement.duration / 60);
        let durationSeconds = Math.floor(audioElement.duration % 60);
        totalDurationElement.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
    }
})

progressBar.addEventListener("change", ()=>{
    audioElement.currentTime = (progressBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
       const clickedIndex = parseInt(e.target.id);
       
       // If the clicked song is already playing, pause it
       if(songIndex === clickedIndex && !audioElement.paused) {
           audioElement.pause();
           e.target.classList.remove("fa-circle-pause");
           e.target.classList.add("fa-circle-play");
           playBtn.classList.remove("fa-circle-pause");
           playBtn.classList.add("fa-circle-play");
           return;
       }
       
       makeAllPlays();
       songIndex = clickedIndex;
       e.target.classList.remove("fa-circle-play");
       e.target.classList.add("fa-circle-pause");
       
       // Get the song data from the SpotifyClone music library
       let songData;
       if(songIndex < 10) {
           songData = spotifyApp.musicLibrary.bollywood[songIndex];
       } else {
           songData = spotifyApp.musicLibrary.hollywood[songIndex - 10];
       }
       
       audioElement.src = songData.filePath;
       masterSongName.innerText = songData.title;
       masterArtistName.innerText = songData.artist;
       
       // Update the current song image
       const currentSongImage = document.getElementById("currentSongImage");
       if (currentSongImage && songData.image) {
           currentSongImage.src = songData.image;
           currentSongImage.alt = songData.title;
           
           // Add error handling for broken image URLs
           currentSongImage.onerror = function() {
               console.log("Image failed to load:", songData.image);
               // Use a fallback image or the image from the song list
               const songItems = document.getElementsByClassName("songItems");
               if (songItems[songIndex]) {
                   const songImg = songItems[songIndex].querySelector(".songImg");
                   if (songImg && songImg.src) {
                       this.src = songImg.src;
                   } else {
                       // Use a default Spotify placeholder
                       this.src = "https://via.placeholder.com/300x300/1DB954/FFFFFF?text=Spotify";
                   }
               }
           };
       }
       
       // Set the initial duration display from the song data
       if (songData.duration) {
           totalDurationElement.textContent = songData.duration;
       }
       
       audioElement.currentTime = 0;
       currentTimeElement.textContent = "0:00";
       audioElement.play();
       playBtn.classList.remove("fa-circle-play");
       playBtn.classList.add("fa-circle-pause");
    })
})

document.getElementById("next").addEventListener("click", ()=>{
    if(songIndex>=19){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    
    // Get the song data from the SpotifyClone music library
    let songData;
    if(songIndex < 10) {
        songData = spotifyApp.musicLibrary.bollywood[songIndex];
    } else {
        songData = spotifyApp.musicLibrary.hollywood[songIndex - 10];
    }
    
    audioElement.src = songData.filePath;
    masterSongName.innerText = songData.title;
    masterArtistName.innerText = songData.artist;
    
    // Update the current song image
    const currentSongImage = document.getElementById("currentSongImage");
    if (currentSongImage && songData.image) {
        currentSongImage.src = songData.image;
        currentSongImage.alt = songData.title;
        
        // Add error handling for broken image URLs
        currentSongImage.onerror = function() {
            console.log("Image failed to load:", songData.image);
            // Use a fallback image or the image from the song list
            const songItems = document.getElementsByClassName("songItems");
            if (songItems[songIndex]) {
                const songImg = songItems[songIndex].querySelector(".songImg");
                if (songImg && songImg.src) {
                    this.src = songImg.src;
                } else {
                    // Use a default Spotify placeholder
                    this.src = "https://via.placeholder.com/300x300/1DB954/FFFFFF?text=Spotify";
                }
            }
        };
    }
    
    audioElement.currentTime = 0;
    audioElement.play();
    playBtn.classList.remove("fa-circle-play");
    playBtn.classList.add("fa-circle-pause");
})

document.getElementById("previous").addEventListener("click", ()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    
    // Get the song data from the SpotifyClone music library
    let songData;
    if(songIndex < 10) {
        songData = spotifyApp.musicLibrary.bollywood[songIndex];
    } else {
        songData = spotifyApp.musicLibrary.hollywood[songIndex - 10];
    }
    
    audioElement.src = songData.filePath;
    masterSongName.innerText = songData.title;
    masterArtistName.innerText = songData.artist;
    
    // Update the current song image
    const currentSongImage = document.getElementById("currentSongImage");
    if (currentSongImage && songData.image) {
        currentSongImage.src = songData.image;
        currentSongImage.alt = songData.title;
        
        // Add error handling for broken image URLs
        currentSongImage.onerror = function() {
            console.log("Image failed to load:", songData.image);
            // Use a fallback image or the image from the song list
            const songItems = document.getElementsByClassName("songItems");
            if (songItems[songIndex]) {
                const songImg = songItems[songIndex].querySelector(".songImg");
                if (songImg && songImg.src) {
                    this.src = songImg.src;
                } else {
                    // Use a default Spotify placeholder
                    this.src = "https://via.placeholder.com/300x300/1DB954/FFFFFF?text=Spotify";
                }
            }
        };
    }
    
    audioElement.currentTime = 0;
    audioElement.play();
    playBtn.classList.remove("fa-circle-play");
    playBtn.classList.add("fa-circle-pause");
})

// Search, Library, and Premium Functionality
class UIManager {
    constructor() {
        this.searchOverlay = document.getElementById('searchOverlay');
        this.libraryOverlay = document.getElementById('libraryOverlay');
        this.premiumOverlay = document.getElementById('premiumOverlay');
        this.searchInput = document.getElementById('searchInput');
        this.searchResults = document.getElementById('searchResults');
        this.resultsContainer = document.getElementById('resultsContainer');
        
        this.initializeEventListeners();
        this.populateArtists();
    }
    
    initializeEventListeners() {
        // Search functionality
        const searchButton = document.querySelector('.fa-magnifying-glass');
        const searchNavItem = document.querySelector('.bottom-nav ul li:nth-child(2)');
        
        searchButton.addEventListener('click', () => this.openSearch());
        searchNavItem.addEventListener('click', () => this.openSearch());
        
        // Library functionality
        const libraryButton = document.querySelector('.fa-bookmark');
        const libraryNavItem = document.querySelector('.bottom-nav ul li:nth-child(3)');
        
        libraryButton.addEventListener('click', () => this.openLibrary());
        libraryNavItem.addEventListener('click', () => this.openLibrary());
        
        // Premium functionality
        const premiumButton = document.querySelector('.fa-spotify');
        const premiumNavItem = document.querySelector('.bottom-nav ul li:nth-child(4)');
        
        premiumButton.addEventListener('click', () => this.openPremium());
        premiumNavItem.addEventListener('click', () => this.openPremium());
        
        // Home functionality
        const homeButton = document.querySelector('.fa-house');
        const homeNavItem = document.querySelector('.bottom-nav ul li:nth-child(1)');
        
        homeButton.addEventListener('click', () => this.closeAllOverlays());
        homeNavItem.addEventListener('click', () => this.closeAllOverlays());
        
        // Close buttons
        document.getElementById('closeSearch').addEventListener('click', () => this.closeSearch());
        document.getElementById('closeLibrary').addEventListener('click', () => this.closeLibrary());
        document.getElementById('closePremium').addEventListener('click', () => this.closePremium());
        
        // Search input
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        
        // Popular searches
        document.querySelectorAll('.popular-item').forEach(item => {
            item.addEventListener('click', () => {
                const searchTerm = item.getAttribute('data-search');
                this.searchInput.value = searchTerm;
                
                // Handle special cases for showing specific song lists
                if (searchTerm === 'bollywood') {
                    this.showBollywoodSongs();
                } else if (searchTerm === 'english') {
                    this.showEnglishSongs();
                } else if (searchTerm === 'love songs') {
                    this.showLoveSongs();
                } else if (searchTerm === 'party') {
                    this.showPartySongs();
                } else {
                    this.handleSearch(searchTerm);
                }
            });
        });
        
        // Library tabs
        document.querySelectorAll('.library-tab').forEach(tab => {
            tab.addEventListener('click', () => this.switchLibraryTab(tab));
        });
        
        // Premium button
        document.querySelector('.premium-btn').addEventListener('click', () => {
            alert('🎉 Premium subscription activated! (Demo only)');
        });
        
        // Create playlist button
        document.querySelector('.create-playlist-btn').addEventListener('click', () => {
            const playlistName = prompt('Enter playlist name:');
            if (playlistName) {
                alert(`Playlist "${playlistName}" created! (Demo only)`);
            }
        });
    }
    
    openSearch() {
        this.closeAllOverlays();
        this.searchOverlay.classList.remove('hidden');
        this.searchInput.focus();
    }
    
    openLibrary() {
        this.closeAllOverlays();
        this.libraryOverlay.classList.remove('hidden');
    }
    
    openPremium() {
        this.closeAllOverlays();
        this.premiumOverlay.classList.remove('hidden');
    }
    
    closeSearch() {
        this.searchOverlay.classList.add('hidden');
        this.clearSearch();
    }
    
    closeLibrary() {
        this.libraryOverlay.classList.add('hidden');
    }
    
    closePremium() {
        this.premiumOverlay.classList.add('hidden');
    }
    
    closeAllOverlays() {
        this.searchOverlay.classList.add('hidden');
        this.libraryOverlay.classList.add('hidden');
        this.premiumOverlay.classList.add('hidden');
        this.clearSearch();
    }
    
    clearSearch() {
        this.searchInput.value = '';
        this.searchResults.classList.add('hidden');
        this.resultsContainer.innerHTML = '';
    }
    
    handleSearch(query) {
        if (query.length < 2) {
            this.searchResults.classList.add('hidden');
            return;
        }
        
        const allSongs = [
            ...spotifyApp.musicLibrary.bollywood,
            ...spotifyApp.musicLibrary.hollywood
        ];
        
        const filteredSongs = allSongs.filter(song => 
            song.title.toLowerCase().includes(query.toLowerCase()) || 
            song.artist.toLowerCase().includes(query.toLowerCase()) ||
            song.album.toLowerCase().includes(query.toLowerCase())
        );
        
        this.displaySearchResults(filteredSongs);
    }
    
    displaySearchResults(songs) {
        this.searchResults.classList.remove('hidden');
        this.resultsContainer.innerHTML = '';
        
        if (songs.length === 0) {
            this.resultsContainer.innerHTML = '<div class="no-results">No results found</div>';
            return;
        }
        
        songs.forEach(song => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <div class="result-img">
                    <img src="${song.image}" alt="${song.title}" class="search-song-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <i class="fa-solid fa-music" style="display:none;"></i>
                </div>
                <div class="result-info">
                    <div class="result-title">${song.title}</div>
                    <div class="result-artist">${song.artist} • ${song.album}</div>
                </div>
                <div class="result-play">
                    <i class="fa-solid fa-play"></i>
                </div>
            `;
            
            resultItem.addEventListener('click', () => {
                this.playSongFromSearch(song);
                this.closeSearch();
            });
            
            this.resultsContainer.appendChild(resultItem);
        });
    }
    
    playSongFromSearch(song) {
        // Find song index
        let clickIndex = -1;
        const bollywoodIndex = spotifyApp.musicLibrary.bollywood.findIndex(s => s.id === song.id);
        if (bollywoodIndex !== -1) {
            clickIndex = bollywoodIndex;
        } else {
            const hollywoodIndex = spotifyApp.musicLibrary.hollywood.findIndex(s => s.id === song.id);
            if (hollywoodIndex !== -1) {
                clickIndex = hollywoodIndex + 10;
            }
        }
        
        if (clickIndex >= 0) {
            // Update UI
            makeAllPlays();
            songIndex = clickIndex;
            
            const songElement = document.getElementById(songIndex.toString());
            if (songElement) {
                songElement.classList.remove("fa-circle-play");
                songElement.classList.add("fa-circle-pause");
            }
            
            // Set audio source and play
            audioElement.src = song.filePath;
            masterSongName.innerText = song.title;
            masterArtistName.innerText = song.artist;
            if (song.duration) {
                totalDurationElement.textContent = song.duration;
            }
            audioElement.currentTime = 0;
            currentTimeElement.textContent = "0:00";
            audioElement.play();
            playBtn.classList.remove("fa-circle-play");
            playBtn.classList.add("fa-circle-pause");
        }
    }
    
    switchLibraryTab(clickedTab) {
        // Remove active class from all tabs
        document.querySelectorAll('.library-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Add active class to clicked tab
        clickedTab.classList.add('active');
        
        // Hide all tab panels
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        
        // Show selected tab panel
        const tabName = clickedTab.getAttribute('data-tab');
        document.getElementById(tabName + 'Tab').classList.add('active');
    }
    
    populateArtists() {
        const artistsGrid = document.getElementById('artistsGrid');
        
        // Artist images mapping
        const artistImages = {
            'Ayushmann Khurrana': 'https://i.scdn.co/image/ab6761610000e5ebf3019edbf35807dc84dde492',
            'Badshah': 'https://i.scdn.co/image/ab6761610000e5eb7b386b1320742bd6686854e7',
            'Arijit Singh': 'https://i.scdn.co/image/ab6761610000e5eb5ba2d75eb08a2d672f9b69b7',
            'Armaan Malik': 'https://i.scdn.co/image/ab67616100005174304d3dd0ed0fef6a64ba1dd7',
            'Guru Randhawa': 'https://i.scdn.co/image/ab6761610000e5eb531f6fb5759f44e7c3d707d6',
            'Mohit Chauhan': 'https://i.scdn.co/image/ab6761610000e5eb16691117e2ba803946b203ba',
            'Kanishk Seth': 'https://i.scdn.co/image/ab6761610000e5eb3138b4aeddf7d954df0c341b',
            'Jasleen Royal': 'https://i.scdn.co/image/ab6761610000e5eb852737800de564b2c0efe165',
            'DJ Snake': 'https://i.scdn.co/image/ab6761610000e5ebf4cebaecf21134c83c4d3655',
            'Sabrina Carpenter': 'https://i.scdn.co/image/ab6761610000e5eb78e45cfa4697ce3c437cb455',
            'Doja Cat': 'https://i.scdn.co/image/ab67616d00001e020f4f19f09818756f25916e45',
            'The Weeknd': 'https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae',
            'Ed Sheeran': 'https://routenote.com/blog/wp-content/uploads/2022/02/1.-Ed-Sheeran.jpg',
            'Taylor Swift': 'https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676',
            'The Kid LAROI': 'https://i.scdn.co/image/ab67616100005174b3fd5c8505c463f91d730ac3',
            'Lana Del Rey': 'https://i.scdn.co/image/ab6761610000e5ebb99cacf8acd5378206767261',
            'Coldplay': 'https://i.scdn.co/image/ab6761610000e5eb1ba8fc5f5c73e7e9313cc6eb',
            'Isabel LaRosa': 'https://i.scdn.co/image/ab6761610000e5eb599d3d1bf51e7e91844323d5'
        };
        
        // Get unique artists
        const allSongs = [
            ...spotifyApp.musicLibrary.bollywood,
            ...spotifyApp.musicLibrary.hollywood
        ];
        
        const artistsSet = new Set();
        allSongs.forEach(song => {
            // Handle artists with featuring
            const mainArtist = song.artist.split(',')[0].split(' ft.')[0].trim();
            artistsSet.add(mainArtist);
        });
        
        const artists = Array.from(artistsSet);
        
        artists.forEach(artist => {
            const artistElement = document.createElement('div');
            artistElement.className = 'artist-item';
            
            const artistImage = artistImages[artist] || 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop&crop=face';
            
            artistElement.innerHTML = `
                <div class="artist-circle">
                    <img src="${artistImage}" alt="${artist}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <i class="fa-solid fa-user" style="display: none; font-size: 40px; color: var(--spotify-light-gray);"></i>
                </div>
                <div class="artist-name">${artist}</div>
            `;
            
            artistElement.addEventListener('click', () => {
                alert(`Playing songs by ${artist} (Demo functionality)`);
            });
            
            artistsGrid.appendChild(artistElement);
        });
    }
    
    showBollywoodSongs() {
        // Show all Bollywood songs
        this.displaySearchResults(spotifyApp.musicLibrary.bollywood);
    }
    
    showEnglishSongs() {
        // Show all Hollywood/English songs
        this.displaySearchResults(spotifyApp.musicLibrary.hollywood);
    }
    
    showLoveSongs() {
        // Get love songs from both Bollywood and Hollywood
        const allSongs = [
            ...spotifyApp.musicLibrary.bollywood,
            ...spotifyApp.musicLibrary.hollywood
        ];
        
        const loveSongs = allSongs.filter(song => song.category === 'love');
        this.displaySearchResults(loveSongs);
    }
    
    showPartySongs() {
        // Get party songs from both Bollywood and Hollywood
        const allSongs = [
            ...spotifyApp.musicLibrary.bollywood,
            ...spotifyApp.musicLibrary.hollywood
        ];
        
        const partySongs = allSongs.filter(song => song.category === 'party');
        this.displaySearchResults(partySongs);
    }
}

// Initialize UI Manager
const uiManager = new UIManager();

// Heart/Like functionality
class LikeManager {
    constructor() {
        this.likedSongs = new Set();
        this.heartIcon = document.getElementById('heartIcon');
        this.likeNotification = document.getElementById('likeNotification');
        this.likeMessage = document.getElementById('likeMessage');
        
        this.initializeEventListeners();
        this.loadLikedSongs();
    }
    
    initializeEventListeners() {
        this.heartIcon.addEventListener('click', () => {
            this.toggleLike();
        });
    }
    
    toggleLike() {
        const currentSongId = this.getCurrentSongId();
        const isLiked = this.likedSongs.has(currentSongId);
        
        if (isLiked) {
            this.removeLike(currentSongId);
        } else {
            this.addLike(currentSongId);
        }
        
        this.updateHeartIcon(!isLiked);
        this.showNotification(!isLiked);
        this.saveLikedSongs();
    }
    
    addLike(songId) {
        this.likedSongs.add(songId);
    }
    
    removeLike(songId) {
        this.likedSongs.delete(songId);
    }
    
    updateHeartIcon(isLiked) {
        if (isLiked) {
            this.heartIcon.classList.remove('fa-regular');
            this.heartIcon.classList.add('fa-solid', 'liked');
        } else {
            this.heartIcon.classList.remove('fa-solid', 'liked');
            this.heartIcon.classList.add('fa-regular');
        }
    }
    
    showNotification(isLiked) {
        // Update message
        this.likeMessage.textContent = isLiked ? 'Added to liked songs' : 'Removed from liked songs';
        
        // Update notification styling
        if (isLiked) {
            this.likeNotification.classList.remove('removed');
        } else {
            this.likeNotification.classList.add('removed');
        }
        
        // Show notification
        this.likeNotification.classList.add('show');
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            this.likeNotification.classList.remove('show');
        }, 3000);
    }
    
    getCurrentSongId() {
        // Generate a unique ID based on current song index and library
        if (songIndex < 10) {
            return spotifyApp.musicLibrary.bollywood[songIndex].id;
        } else {
            return spotifyApp.musicLibrary.hollywood[songIndex - 10].id;
        }
    }
    
    checkCurrentSongLikeStatus() {
        const currentSongId = this.getCurrentSongId();
        const isLiked = this.likedSongs.has(currentSongId);
        this.updateHeartIcon(isLiked);
    }
    
    saveLikedSongs() {
        localStorage.setItem('spotifyLikedSongs', JSON.stringify([...this.likedSongs]));
    }
    
    loadLikedSongs() {
        const saved = localStorage.getItem('spotifyLikedSongs');
        if (saved) {
            this.likedSongs = new Set(JSON.parse(saved));
        }
        // Check if current song is liked
        this.checkCurrentSongLikeStatus();
    }
}

// Initialize Like Manager
const likeManager = new LikeManager();

// Update heart icon when song changes
const originalNextFunction = document.getElementById("next").onclick;
const originalPreviousFunction = document.getElementById("previous").onclick;

// Override next button to update heart status
document.getElementById("next").addEventListener("click", () => {
    setTimeout(() => {
        likeManager.checkCurrentSongLikeStatus();
    }, 100);
});

// Override previous button to update heart status
document.getElementById("previous").addEventListener("click", () => {
    setTimeout(() => {
        likeManager.checkCurrentSongLikeStatus();
    }, 100);
});

// Update heart status when song is clicked from list
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", () => {
        setTimeout(() => {
            likeManager.checkCurrentSongLikeStatus();
        }, 100);
    });
});
