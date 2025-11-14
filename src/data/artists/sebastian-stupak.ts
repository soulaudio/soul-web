import { Artist } from "../../types/artist";

export const sebastianStupak: Artist = {
  name: "Sebastián Stupák",
  location: "Brno, Czechia",
  profileImage: "/images/artists/sebastian-stupak/profile.jpg",
  bio: "Piano and ambient composer. Seeking experimental, game, and film music projects. Inspired by Ryuichi Sakamoto, Joe Hisaishi, Takeshi Kokubo, and game composers like Russell Browers, Christopher Tin, C418, Yu-Peng Chen.",
  style: {
    backgroundColor: "#e8eff2",
    textColor: "#2c4451",
    primaryFont: "'Crimson Text', 'Georgia', serif",
    secondaryFont: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
  },
  gallery: [
    {
      url: "/images/artists/sebastian-stupak/gallery/gallery-01.jpg",
      span: 1,
    },
    {
      url: "/images/artists/sebastian-stupak/gallery/gallery-02.jpg",
      span: 1,
    },
    {
      url: "/images/artists/sebastian-stupak/gallery/gallery-03.jpg",
      span: 1,
    },
    {
      url: "/images/artists/sebastian-stupak/gallery/gallery-04.jpg",
      span: 1,
    },
    {
      url: "/images/artists/sebastian-stupak/gallery/gallery-05.jpg",
      span: 1,
    },
    {
      url: "/images/artists/sebastian-stupak/gallery/gallery-06.jpg",
      span: 1,
    },
  ],
  portfolio: [
    {
      projectId: "slower-days",
      role: "Artist, Composer, Producer",
      description: "A 14-track cinematic piano and ambient compositions. Trying to reproduce the feelings of nostalgia. Inspired by C418 compositions."
    },
    {
      projectId: "mirror",
      role: "Artist, Composer, Producer",
      description: "A 6-track experimental EP featuring compositions that explore the concept of a broken mirror."
    },
    {
      projectId: "in-the-footsteps-jungle-temple",
      role: "Co-Composer, Sound Design, Writing, Coding",
      description: "Composing, sound designing and story writing in collaboration with Osaki Seiichi and Peter Petrek. Design and coding website to drive story-telling."
    },
    {
      projectId: "wavy-haze-album",
      role: "Guest Piano (1 track)",
      description: "Guest contribution on Peter Petrek's Wavy Haze project. Single track collaboration - track Tremble.",
      isCollaboration: true
    },
    {
      projectId: "pressures-father-i-sober",
      role: "Artist, Composer, Producer",
      description: "A 5 part, 31-track album full of piano and ambient compositions and miniatures."
    },
    {
      projectId: "sunken-city-cassette",
      role: "Co-Composer, Sound Design, Writing, Design",
      description: "Limited cassette release on the Tidal Charm label (TC005). Featured as co-composer on this collectible release with treasure map puzzle elements. Part of the label's 'Tales of Lands Far and Away' season featuring immersive narrative ambient works."
    },
    {
      projectId: "sunken-city-album",
      role: "Co-Composer, Sound Design, Writing, Coding",
      description: "Composing, sound designing and story writing in collaboration with Osaki Seiichi and Peter Petrek. Design and coding website to drive story-telling."
    },
    {
      projectId: "sessions-vol-1",
      role: "Composer, Piano, Synthesizer, Production",
      description: "Collaborative work with Peter Petrek exploring jazz, funk and experimental compositions."
    },
    {
      projectId: "blank-sky",
      role: "Artist, Composer, Producer",
      description: "Raw miniature impressionistic improvisations & compositions"
    }
  ],
  collaborators: [
    {
      name: "Peter Petrek",
      artistId: "peter-petrek"
    },
    {
      name: "Osaki Seiichi",
      artistId: "osaki-seiichi"
    }
  ],
  links: {
    website: "https://sebastianstupak.com",
    email: "sebastian.stupak@pm.me",
    bandcamp: "https://sebastianstupak.bandcamp.com",
    instagram: "https://instagram.com/sebastian_stupak"
  }
};