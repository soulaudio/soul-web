export interface GalleryImage {
  url: string;
  span?: number;
}

export interface ArtistWork {
  projectId: string;
  role: string;
  description?: string;
  isCollaboration?: boolean;
}

export interface Artist {
  name: string;
  profileImage: string;
  bio: string;
  location: string;
  gallery: GalleryImage[];
  portfolio: ArtistWork[];
  collaborators?: Collaborator[];
  links?: ArtistLinks;
}

export interface Collaborator {
  name: string;
  artistId: string;
}

export interface ArtistLinks {
  website?: string;
  email?: string;
  bandcamp?: string;
  instagram?: string;
}

export interface ArtistsData {
  [key: string]: Artist;
}