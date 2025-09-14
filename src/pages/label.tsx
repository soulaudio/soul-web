import React, { useState, useMemo } from 'react';
import styles from './label.module.css';

const Label = () => {
  const musicConfig = {
    albums: [
      {
        id: 1,
        title: "The Tale Of A Long Forgotten Sunken City",
        artist: "Osaki Seiichi",
        genres: ["Ambient"],
        coverColor: "#53a6c4",
        coverImage: "/label/sunken-city.jpg"
      },
      {
        id: 2,
        title: "Wavy Haze",
        artist: "Wavy Haze",
        genres: ["Indie"],
        coverColor: "#022d5a",
        coverImage: "/label/wavy-haze.jpg"
      },
      {
        id: 3,
        title: "pressures, father I sober",
        artist: "Sebastián Stupák",
        genres: ["Piano"],
        coverColor: "#a9c3d0",
        coverImage: "/label/pressures-father-i-sober.jpg"
      },
      {
        id: 4,
        title: "Flutter",
        artist: "Wavy Haze",
        genres: ["Indie"],
        coverColor: "#644637",
        coverImage: "/label/flutter.jpg"
      },
      {
        id: 5,
        title: "Sessions Vol. 1",
        artist: "Sebastián Stupák",
        genres: ["Funk"],
        coverColor: "#0a0a0a",
        coverImage: "/label/sessions-vol-i.jpg"
      },
      {
        id: 6,
        title: "Phases",
        artist: "Wavy Haze",
        genres: ["Indie"],
        coverColor: "#18647e",
        coverImage: "/label/phases.jpg"
      },
      {
        id: 7,
        title: "blank sky",
        artist: "Sebastián Stupák",
        genres: ["Piano"],
        coverColor: "#0a0a0a",
        coverImage: "/label/blank-sky.jpg"
      }
    ]
  };

  const [selectedGenre, setSelectedGenre] = useState("Everything");

  const dynamicGenres = useMemo(() => {
    const genreCount: Record<string, number> = {};
    
    musicConfig.albums.forEach(album => {
      album.genres.forEach(genre => {
        genreCount[genre] = (genreCount[genre] || 0) + 1;
      });
    });

    const sortedGenres = Object.keys(genreCount).sort((a, b) => {
      const countDiff = genreCount[b] - genreCount[a];
      if (countDiff === 0) {
        return a.localeCompare(b); 
      }
      return countDiff;
    });

    return ["Everything", ...sortedGenres];
  }, [musicConfig.albums]);

  const filteredAlbums = useMemo(() => {
    if (selectedGenre === "Everything") {
      return musicConfig.albums;
    }
    return musicConfig.albums.filter(album => 
      album.genres.includes(selectedGenre)
    );
  }, [selectedGenre, musicConfig.albums]);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            src="/soul-audio-512x512.svg"
            alt="Soul Audio logo"
          />
        </div>

        <h1 className={styles.title}>
          What kind of music do You like?
        </h1>

        <div className={styles.genreContainer}>
          <div className={styles.genreFilters}>
            {dynamicGenres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`${styles.genreButton} ${
                  selectedGenre === genre ? styles.genreButtonActive : styles.genreButtonInactive
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.albumsSection}>
        <div className={styles.albumsContainer}>
            <div className={styles.albumsGrid}>
              {filteredAlbums.map((album) => (
                <div 
                  key={album.id} 
                  className={styles.albumCard}
                >
                  <div className={styles.vinylContainer}>
                    <div className={styles.vinylRecord}>
                      {/* Album Cover (Center) */}
                      <div 
                        className={styles.albumCover}
                        style={{ backgroundColor: album.coverColor }}
                      >
                        <img 
                          src={album.coverImage} 
                          alt={album.title}
                          className={styles.coverImage}
                        />
                      </div>
                      
                      {/* Dark inner ring around center */}
                      <div className={styles.innerRing}></div>
                      
                      {/* Center Hole */}
                      <div className={styles.centerHole}></div>
                      
                      {/* Vinyl Grooves */}
                      <div className={styles.groove1}></div>
                      <div className={styles.groove2}></div>
                      <div className={styles.groove3}></div>
                      <div className={styles.groove4}></div>
                    </div>
                  </div>

                  {/* Album Info */}
                  <div className={styles.albumInfo}>
                    <h3 className={styles.albumTitle}>
                      {album.title}
                    </h3>
                    <p className={styles.artistName}>
                      {album.artist}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredAlbums.length === 0 && (
              <div className={styles.emptyState}>
                <p className={styles.emptyStateText}>
                  No albums found for the selected genre.
                </p>
                <p className={styles.emptyStateSubtext}>
                  Try selecting a different genre to see albums.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Label;