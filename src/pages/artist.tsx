import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import NotFound from "./not-found";
import { artistsData } from "../data/artists";
import { projectsData } from "../data/projects";
import styles from "./artist.module.css";

const Artist = () => {
  const { id } = useParams<{ id: string }>();
  const artist = id ? artistsData[id] : undefined;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [profileLoaded, setProfileLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoadedImages(new Set());
    setProfileLoaded(false);
  }, [id]);

  if (!artist) {
    return <NotFound />;
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  };

  const handleImageLoad = (index: number): void => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const openCarousel = (index: number): void => {
    setCurrentImageIndex(index);
    setSelectedImage(artist.gallery[index].url);
  };

  const closeCarousel = (): void => {
    setSelectedImage(null);
  };

  const nextImage = (): void => {
    const nextIndex = (currentImageIndex + 1) % artist.gallery.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(artist.gallery[nextIndex].url);
  };

  const prevImage = (): void => {
    const prevIndex = (currentImageIndex - 1 + artist.gallery.length) % artist.gallery.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(artist.gallery[prevIndex].url);
  };

  // Merge artist works with project data and sort chronologically
  const portfolioWithProjects = artist.portfolio
    .map(work => {
      const project = projectsData[work.projectId];
      if (!project) return null;
      return {
        ...project,
        role: work.role,
        artistDescription: work.description,
        isCollaboration: work.isCollaboration
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{artist.name} | Soul Audio</title>
        <meta name="description" content={artist.bio} />
        <meta property="og:title" content={`${artist.name} | Soul Audio`} />
        <meta property="og:description" content={artist.bio} />
        <meta property="og:type" content="profile" />
        {artist.links?.website && (
          <link rel="canonical" href={artist.links.website} />
        )}
      </Helmet>

      <div className={styles.layout}>
        
        {/* Left Sidebar: Profile */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSticky}>
            <div className={styles.profileImageWrapper}>
              {!profileLoaded && <div className={styles.profileImagePlaceholder} />}
              <img 
                src={artist.profileImage} 
                alt={artist.name}
                className={`${styles.profileImage} ${profileLoaded ? styles.loaded : ''}`}
                onLoad={() => setProfileLoaded(true)}
                onError={() => setProfileLoaded(false)}
              />
            </div>
            <h1 className={styles.artistName}>{artist.name}</h1>
            <p className={styles.location}>{artist.location}</p>
            <p className={styles.bio}>{artist.bio}</p>
            
            {artist.links && (
              <div className={styles.links}>
                <h3 className={styles.linksTitle}>Links</h3>
                <ul className={styles.linksList}>
                  {artist.links.website && (
                    <li>
                      <a 
                        href={artist.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkItem}
                      >
                        Website
                      </a>
                    </li>
                  )}
                  {artist.links.email && (
                    <li>
                      <a 
                        href={`mailto:${artist.links.email}`}
                        className={styles.linkItem}
                      >
                        Email me
                      </a>
                    </li>
                  )}
                  {artist.links.bandcamp && (
                    <li>
                      <a 
                        href={artist.links.bandcamp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkItem}
                      >
                        Bandcamp
                      </a>
                    </li>
                  )}
                  {artist.links.instagram && (
                    <li>
                      <a 
                        href={artist.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkItem}
                      >
                        Instagram
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
            
            {artist.collaborators && artist.collaborators.length > 0 && (
              <div className={styles.collaborators}>
                <h3 className={styles.collaboratorsTitle}>Collaborators</h3>
                <ul className={styles.collaboratorsList}>
                  {artist.collaborators.map((collaborator, index) => (
                    <li key={index}>
                      <Link 
                        to={`/artists/${collaborator.artistId}`}
                        className={styles.collaboratorLink}
                      >
                        {collaborator.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>

        <main className={styles.content}>
          
          {/* Gallery Section */}
          {artist.gallery.length > 0 && (
            <section className={styles.gallerySection}>
              <div className={styles.gallery}>
                {artist.gallery.map((image, index) => (
                  <div 
                    key={index}
                    className={styles.galleryItemWrapper}
                    style={{ 
                      gridRowEnd: `span ${image.span || 1}`,
                    }}
                  >
                    <div 
                      onClick={() => openCarousel(index)}
                      className={styles.galleryItem}
                    >
                      <img 
                        src={image.url} 
                        alt={`Gallery ${index + 1}`}
                        className={`${styles.galleryImage} ${loadedImages.has(index) ? styles.loaded : ''}`}
                        onLoad={() => handleImageLoad(index)}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Portfolio Section */}
          {portfolioWithProjects.length > 0 && (
            <section className={styles.timelineSection}>
              <h2 className={styles.sectionTitle}>Portfolio</h2>
              <div className={styles.timeline}>
                {portfolioWithProjects.map((work, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.releaseCard}>
                        <div className={styles.releaseCoverWrapper}>
                          <div className={styles.releaseCoverPlaceholder} />
                          <img 
                            src={work.cover} 
                            alt={work.title}
                            className={styles.releaseCover}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                        <div className={styles.releaseInfo}>
                          <div className={styles.releaseDate}>
                            {formatDate(work.releaseDate)}
                          </div>
                          <h3 className={styles.releaseTitle}>
                            {work.title}
                            {work.isCollaboration && (
                              <span className={styles.collaborationBadge}>Collaboration</span>
                            )}
                          </h3>
                          <div className={styles.releaseMeta}>
                            <span className={styles.releaseType}>{work.type}</span>
                            <span className={styles.separator}>·</span>
                            <span className={styles.releaseRole}>{work.role}</span>
                          </div>
                          <div className={styles.releaseGenre}>{work.genre}</div>
                          {work.artistDescription && (
                            <p className={styles.releaseDescription}>{work.artistDescription}</p>
                          )}
                          <a 
                            href={work.bandcampUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.releaseBandcampLink}
                          >
                            Listen on Bandcamp →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>

      {/* Carousel Modal */}
      {selectedImage && (
        <div className={styles.carouselOverlay} onClick={closeCarousel}>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
            aria-label="Previous image"
          >
            ‹
          </button>
          
          <img 
            src={selectedImage} 
            alt="Carousel"
            className={styles.carouselImage}
            onClick={(e) => e.stopPropagation()}
          />
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
            aria-label="Next image"
          >
            ›
          </button>

          <button
            onClick={closeCarousel}
            className={styles.carouselClose}
            aria-label="Close carousel"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Artist;