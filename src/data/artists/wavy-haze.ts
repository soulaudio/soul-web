import { Artist } from "../../types/artist";

export const wavyHaze: Artist = {
  name: "Wavy Haze",
  location: "?",
  profileImage: "/images/artists/wavy-haze/profile.jpg",
  bio: "?",
  gallery: [],
  portfolio: [
    {
      projectId: "wavy-haze-album",
      role: "Artist, Composer, Producer",
      description: "Self-titled 32-track album featuring an expansive collection of dreamy, atmospheric tracks."
    },
    {
      projectId: "flutter",
      role: "Artist, Composer, Producer",
      description: "Three ambient compositions."
    },
    {
      projectId: "phases",
      role: "Artist, Composer, Producer",
      description: "8-track alternative dream pop EP."
    }
  ],
  collaborators: [
    {
      name: "Peter Petrek",
      artistId: "peter-petrek"
    }
  ],
  links: {
    bandcamp: "https://wavyhaze.bandcamp.com"
  }
};