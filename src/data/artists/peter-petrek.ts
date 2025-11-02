import { Artist } from "../../types/artist";

export const peterPetrek: Artist = {
  name: "Peter Petrek",
  location: "Brno, Czechia",
  profileImage: "/images/artists/peter-petrek/profile.jpg",
  bio: "?",
  gallery: [],
  portfolio: [
    {
      projectId: "in-the-footsteps-jungle-temple",
      role: "Co-Composer, Sound Design, Writing, Mixing, Mastering",
      description: "Composing, sound designing and story writing in collaboration with Osaki Seiichi and Sebastián Stupák. Mixing and mastering."
    },
    {
      projectId: "wavy-haze-album",
      role: "Artist, Composer, Producer, Mixing, Mastering",
      description: "32-track alternative, dream pop, shoegaze album."
    },
    {
      projectId: "pressures-father-i-sober",
      role: "Guest Acoustic Guitar (1 track)",
      description: "Guest contribution on Sebastián Stupák's pressures, father I sober project. Single track collaboration - track You and I.",
      isCollaboration: true
    },
    {
      projectId: "sunken-city-cassette",
      role: "Co-Composer, Sound Design, Writing, Mixing, Mastering",
      description: "Limited cassette release on the Tidal Charm label (TC005). Featured as co-composer on this collectible release with treasure map puzzle elements. Part of the label's 'Tales of Lands Far and Away' season featuring immersive narrative ambient works."
    },
    {
      projectId: "sunken-city-album",
      role: "Co-Composer, Sound Design, Writing, Mixing, Mastering",
      description: "Composing, sound designing and story writing in collaboration with Osaki Seiichi and Sebastián Stupák. Mixing and mastering."
    },
    {
      projectId: "sessions-vol-1",
      role: "Composer, Guitar, Bass, Production, Mixing, Mastering",
      description: "Collaborative work with Sebastián Stupák exploring jazz, funk and experimental compositions. Mixing and mastering"
    },
    {
      projectId: "flutter",
      role: "Composer, Producer, Mixing, Mastering",
      description: "Three ambient compositions. Mixing and mastering."
    },
    {
      projectId: "phases",
      role: "Composer, Producer, Mixing, Mastering",
      description: "8-track alternative dream pop EP. Mixing and mastering."
    }
  ],
  collaborators: [
    {
      name: "Wavy Haze",
      artistId: "wavy-haze"
    },
    {
      name: "Osaki Seiichi",
      artistId: "osaki-seiichi"
    },
    {
      name: "Sebastián Stupák",
      artistId: "sebastian-stupak"
    }
  ],
  links: {
    bandcamp: "https://wavyhaze.bandcamp.com"
  }
};