export interface DeezerArtist {
  id: number;
  name: string;
}

export interface DeezerAlbum {
  id: number;
  title: string;
  cover_medium: string;
}

export interface DeezerTrack {
  id: number;
  title: string;
  preview: string;
  artist: DeezerArtist;
  album: DeezerAlbum;
}

export interface DeezerResponse {
  data: DeezerTrack[];
}
