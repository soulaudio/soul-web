import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./label.module.css";
import { Helmet } from "react-helmet-async";
import { projectsData } from "../data/projects";

const Label = () => {
  const navigate = useNavigate();

  const musicConfig = {
    albums: [
      {
        id: "slower-days",
        title: "slower days",
        artist: "Sebastián Stupák",
        genres: ["Piano", "Ambient"],
        coverColor: "#93a24a",
      },
      {
        id: "mirror",
        title: "Mirror",
        artist: "Sebastián Stupák",
        genres: ["Piano"],
        coverColor: "#a26560ff",
      },
      {
        id: "in-the-footsteps-jungle-temple",
        title: "In The Footsteps Of A Lost Book Hidden In The Jungle Temple",
        artist: "Osaki Seiichi",
        genres: ["Ambient"],
        coverColor: "#99de64ff",
      },
      {
        id: "sunken-city-album",
        title: "The Tale Of A Long Forgotten Sunken City",
        artist: "Osaki Seiichi",
        genres: ["Ambient"],
        coverColor: "#53a6c4",
      },
      {
        id: "wavy-haze-album",
        title: "Wavy Haze",
        artist: "Wavy Haze",
        genres: ["Indie"],
        coverColor: "#022d5a",
      },
      {
        id: "pressures-father-i-sober",
        title: "pressures, father I sober",
        artist: "Sebastián Stupák",
        genres: ["Piano"],
        coverColor: "#a9c3d0",
      },
      {
        id: "flutter",
        title: "Flutter",
        artist: "Wavy Haze",
        genres: ["Indie"],
        coverColor: "#644637",
      },
      {
        id: "sessions-vol-1",
        title: "Sessions Vol. 1",
        artist: "Sebastián Stupák",
        genres: ["Funk"],
        coverColor: "#0a0a0a",
      },
      {
        id: "phases",
        title: "Phases",
        artist: "Wavy Haze",
        genres: ["Indie"],
        coverColor: "#18647e",
      },
      {
        id: "blank-sky",
        title: "blank sky",
        artist: "Sebastián Stupák",
        genres: ["Piano"],
        coverColor: "#0a0a0a",
      },
    ],
  };

  const [selectedGenre, setSelectedGenre] = useState("Everything");

  const dynamicGenres = useMemo(() => {
    const genreCount: Record<string, number> = {};
    musicConfig.albums.forEach((album) => {
      album.genres.forEach((genre) => {
        genreCount[genre] = (genreCount[genre] || 0) + 1;
      });
    });

    const sortedGenres = Object.keys(genreCount).sort((a, b) => {
      const diff = genreCount[b] - genreCount[a];
      return diff !== 0 ? diff : a.localeCompare(b);
    });

    return ["Everything", ...sortedGenres];
  }, [musicConfig.albums]);

  const filteredAlbums = useMemo(() => {
    if (selectedGenre === "Everything") return musicConfig.albums;
    return musicConfig.albums.filter((album) =>
      album.genres.includes(selectedGenre)
    );
  }, [selectedGenre, musicConfig.albums]);

  return (
    <>
      <Helmet>
        <title>Label | Soul Audio</title>
        <meta
          name="description"
          content="About Soul Audio label and our artists."
        />
        <meta property="og:title" content="Label | Soul Audio" />
        <meta
          property="og:description"
          content="About Soul Audio label and our artists."
        />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.header}>
            <div
              className={styles.logoContainer}
              onClick={() => navigate("/")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") navigate("/");
              }}
            >
              <img
                src="/soul-audio-512x512.svg"
                alt="Soul Audio logo"
                className={styles.logo}
              />
            </div>

            <h1 className={styles.title}>What kind of music do You like?</h1>

            <div className={styles.genreContainer}>
              <div className={styles.genreFilters}>
                {dynamicGenres.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`${styles.genreButton} ${
                      selectedGenre === genre
                        ? styles.genreButtonActive
                        : styles.genreButtonInactive
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
                {filteredAlbums.map((album) => {
                  const project = projectsData[album.id];
                  const coverImage = project?.cover || "/placeholder.jpg";
                  const bandcampUrl =
                    project?.bandcampUrl ||
                    "https://soulaudio.bandcamp.com/";
                  const title = project?.title || album.title;

                  return (
                    <div
                      key={album.id}
                      className={styles.albumCard}
                      onClick={() =>
                        window.open(bandcampUrl, "_blank", "noopener,noreferrer")
                      }
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                          window.open(
                            bandcampUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                      }}
                    >
                      <div className={styles.vinylContainer}>
                        <div className={styles.vinylRecord}>
                          <div
                            className={styles.albumCover}
                            style={{ backgroundColor: album.coverColor }}
                          >
                            <img
                              src={coverImage}
                              alt={title}
                              className={styles.coverImage}
                              onError={(e) =>
                                (e.currentTarget.style.display = "none")
                              }
                            />
                          </div>
                          <div className={styles.innerRing}></div>
                          <div className={styles.centerHole}></div>
                          <div className={styles.groove1}></div>
                          <div className={styles.groove2}></div>
                          <div className={styles.groove3}></div>
                          <div className={styles.groove4}></div>
                        </div>
                      </div>

                      <div className={styles.albumInfo}>
                        <h3 className={styles.albumTitle}>{title}</h3>
                        <p className={styles.artistName}>{album.artist}</p>
                      </div>
                    </div>
                  );
                })}
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
    </>
  );
};

export default Label;
