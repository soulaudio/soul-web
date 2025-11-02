import { Artist } from "../../types/artist";

export const osakiSeiichi: Artist = {
  name: "Osaki Seiichi",
  location: "Nagoya, Japan",
  profileImage: "/images/artists/osaki-seiichi/profile.jpg",
  bio: "Creating ambient, progressive and experimental art and connecting it through multiple medias. Exploring themes of adventure, storytelling, and cinematic ambient textures.",
  gallery: [],
  portfolio: [
    {
      projectId: "in-the-footsteps-jungle-temple",
      role: "Composer, Producer, Sound Design",
      description: "An immersive narrative journey through a tropical jungle expedition. Brothers discover an ancient temple while being guided by a mysterious stranger. Four-part composition featuring tropical ambience, eerie nighttime encounters, a perilous bridge crossing, and the discovery of a sacred book hidden within jade pillars that produce enchanting melodies."
    },
    {
      projectId: "sunken-city-cassette",
      role: "Co-Composer, Sound Design, Writing, Design",
      description: "Limited cassette release on the Tidal Charm label (TC005). Featured as co-composer on this collectible release with treasure map puzzle elements. Part of the label's 'Tales of Lands Far and Away' season featuring immersive narrative ambient works."
    },
    {
      projectId: "sunken-city-album",
      role: "Composer, Producer, Sound Design",
      description: "Three-part narrative composition featuring wandering through ancient alleyways, mysterious awakenings, and escaping from mythical creatures. Collaboration with Peter Petrek and Sebastián Stupák."
    }
  ],
  collaborators: [
    {
      name: "Peter Petrek",
      artistId: "peter-petrek"
    },
    {
      name: "Sebastián Stupák",
      artistId: "sebastian-stupak"
    }
  ],
  links: {
    website: "https://osakiseiichi.com",
    bandcamp: "https://osakiseiichi.bandcamp.com"
  }
};