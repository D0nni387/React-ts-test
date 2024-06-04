export interface Exif {
  ISO: string;
  Lens: string;
  Make: string;
  Flash: string;
  Model: string;
  Aperture: string;
  ExposureTime: string;
}

export interface Userdata {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  profile: Profile;
}

export interface Profile {
  id: number;
  display_name: string;
  avatar: string;
  cas_username: string;
  plan: string;
  created_at: string;
}

export interface Sharedby {
  name: string;
  avatar: string;
  id: number;
  share_date: string;
}

export interface Groupedimage {
  id: number;
  user: number;
  number_of_shares?: number | null;
  shared_by?: Sharedby[] | null;
  grouped_images?: Groupedimage[];
  popular_score: string | null;
  name: string;
  url: string;
  signed_url: string | null;
  thumbnail_url: string;
  description: string;
  category: string;
  mime: string | null;
  tags: string[];
  exif: Exif;
  alt_text: string;
  size: number | null;
  extension: string | null;
  width: string | null;
  height: string | null;
  dpi: string | null;
  user_verified: boolean;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
  hidden_at?: string | null;
  scanned_at?: string | null;
  text?: string | null;
  group_id: string;
  rating?: string | null;
  rating_count: number;
  dynamo_user_id: string;
  merchr_id?: string | null;
  uploaded_at: string;
  image_hash?: string | null;
  pinned_comment?: string | null;
  user_data: Userdata | null;
}

export interface Image extends Groupedimage {
  is_published?: boolean;
  is_photo_uploaded?: boolean;
}
